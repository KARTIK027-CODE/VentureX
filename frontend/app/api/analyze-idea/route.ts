import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { idea } = await req.json();

        if (!idea) {
            return NextResponse.json({ error: 'No idea provided' }, { status: 400 });
        }

        const geminiApiKey = process.env.GEMINI_API_KEY;

        if (!geminiApiKey || geminiApiKey === 'your_gemini_api_key_here') {
            const errorMsg = !geminiApiKey
                ? 'Gemini API key is missing from environment variables'
                : 'Gemini API key is still set to placeholder value';

            console.error(`[Idea Analyzer] Configuration Error: ${errorMsg}`);

            return NextResponse.json(
                { error: `${errorMsg}. Please check GEMINI_API_KEY in .env.local` },
                { status: 500 }
            );
        }

        const prompt = `
        You are an expert startup consultant and venture capitalist. 
        Analyze the following startup idea and provide a structured JSON report.
        
        Startup Idea: "${idea}"

        Return a VALID JSON object with the following structure (do not use Markdown formatting, just raw JSON):
        {
            "score": <number 0-100, overall viability score>,
            "pitch": "<string, a compelling 1-sentence elevator pitch>",
            "radar": [
                { "subject": "Innovation", "A": <number 0-100>, "fullMark": 100 },
                { "subject": "Market Size", "A": <number 0-100>, "fullMark": 100 },
                { "subject": "Feasibility", "A": <number 0-100>, "fullMark": 100 },
                { "subject": "Competition", "A": <number 0-100>, "fullMark": 100 },
                { "subject": "Scalability", "A": <number 0-100>, "fullMark": 100 }
            ],
            "competitors": ["<string>", "<string>", "<string>"],
            "swot": {
                "strengths": ["<string>", "<string>"],
                "weaknesses": ["<string>", "<string>"],
                "opportunities": ["<string>", "<string>"],
                "threats": ["<string>", "<string>"]
            },
            "monetization": "<string, best business model suggestion>",
            "mvp_strategy": "<string, minimal cost MVP strategy>"
        }
        `;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${geminiApiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('[Idea Analyzer] Gemini API Error:', JSON.stringify(data, null, 2));
            return NextResponse.json(
                { error: `Gemini API Error: ${data.error?.message || response.statusText}` },
                { status: response.status }
            );
        }

        const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!textResponse) {
            console.error('[Idea Analyzer] No analysis in response:', JSON.stringify(data, null, 2));
            throw new Error('Failed to generate analysis from Gemini');
        }

        // Clean up markdown code blocks if present
        const cleanJson = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
        const analysis = JSON.parse(cleanJson);

        return NextResponse.json({ analysis });

    } catch (error: any) {
        console.error('[Idea Analyzer] Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to analyze idea. Please try again.' },
            { status: 500 }
        );
    }
}
