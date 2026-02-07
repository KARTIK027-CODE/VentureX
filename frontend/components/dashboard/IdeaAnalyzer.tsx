"use client";

import { useState } from "react";
import { Lightbulb, X, Sparkles, Zap, DollarSign, Target, Loader2, TrendingUp, Users, Shield, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

interface AnalysisData {
    score: number;
    pitch: string;
    radar: { subject: string; A: number; fullMark: number }[];
    competitors: string[];
    swot: {
        strengths: string[];
        weaknesses: string[];
        opportunities: string[];
        threats: string[];
    };
    monetization: string;
    mvp_strategy: string;
}

export default function IdeaAnalyzer() {
    const [isOpen, setIsOpen] = useState(false);
    const [idea, setIdea] = useState("");
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState<AnalysisData | null>(null);

    const handleAnalyze = async () => {
        if (!idea.trim()) return;

        setLoading(true);
        setAnalysis(null);
        try {
            const response = await fetch('/api/analyze-idea', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idea })
            });

            const data = await response.json();
            if (data.analysis) {
                setAnalysis(data.analysis);
            } else if (data.error) {
                console.error("API Error:", data.error);
                alert(data.error);
            }
        } catch (error) {
            console.error("Failed to analyze idea:", error);
            alert("Failed to connect to the server. Please check your internet connection.");
        } finally {
            setLoading(false);
        }
    };

    const scoreColor = (score: number) => {
        if (score >= 80) return "#22c55e"; // Green
        if (score >= 60) return "#eab308"; // Yellow
        return "#ef4444"; // Red
    };

    return (
        <>
            {/* Trigger Button/Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-1 md:col-span-2 lg:col-span-4 p-8 rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900/40 border border-indigo-500/30 cursor-pointer hover:border-indigo-400 group relative overflow-hidden"
                onClick={() => setIsOpen(true)}
            >
                <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors"></div>

                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">NEW FEATURE</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-amber-400" />
                            Validate Your Startup Idea
                        </h2>
                        <p className="text-slate-300 max-w-2xl">
                            Unsure if your idea is scalable? Use our AI-powered analyzer to get instant feedback on market fit, scalability, and minimal-cost launch strategies.
                        </p>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-500/50 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6" />
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-5xl bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-900/50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-indigo-500/20">
                                        <Lightbulb className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white">Idea Strength Analyzer</h2>
                                        <p className="text-sm text-slate-400">AI-Powered Feasibility Report</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-indigo-500/20 scrollbar-track-transparent">
                                {!analysis && !loading ? (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                                Describe your startup idea in detail
                                            </label>
                                            <textarea
                                                value={idea}
                                                onChange={(e) => setIdea(e.target.value)}
                                                placeholder="e.g. A marketplace for renting high-end camera gear directly from other photographers with built-in insurance..."
                                                className="w-full h-40 bg-slate-900 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                            />
                                        </div>

                                        <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-4">
                                            <h4 className="text-indigo-300 font-medium mb-2 flex items-center gap-2">
                                                <Target className="w-4 h-4" /> What you'll receive:
                                            </h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Viability Score (0-100)</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Competitor Analysis</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> SWOT Analysis</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> Business Model Suggestion</li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : loading ? (
                                    <div className="flex flex-col items-center justify-center h-full min-h-[400px] space-y-4">
                                        <div className="relative">
                                            <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Sparkles className="w-6 h-6 text-indigo-400 animate-pulse" />
                                            </div>
                                        </div>
                                        <div className="text-center space-y-1">
                                            <h3 className="text-xl font-bold text-white">Analyzing Market Fit...</h3>
                                            <p className="text-slate-400">Evaluating competitors, scalability, and risks.</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-8 animate-in fade-in duration-500">
                                        {/* Top Section: Score & Radar */}
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                            {/* Score Card */}
                                            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                                <div className="relative w-48 h-48 flex items-center justify-center">
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <RadialBarChart
                                                            innerRadius="80%"
                                                            outerRadius="100%"
                                                            barSize={10}
                                                            data={[{ name: 'score', value: analysis?.score, fill: scoreColor(analysis?.score || 0) }]}
                                                            startAngle={180}
                                                            endAngle={0}
                                                        >
                                                            <RadialBar background dataKey="value" cornerRadius={10} />
                                                        </RadialBarChart>
                                                    </ResponsiveContainer>
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                                                        <span className="text-5xl font-bold text-white">{analysis?.score}</span>
                                                        <span className="text-sm text-slate-400 uppercase tracking-wider font-medium">Viability</span>
                                                    </div>
                                                </div>
                                                <p className="text-slate-400 text-sm mt-4 italic">"{analysis?.pitch}"</p>
                                            </div>

                                            {/* Radar Chart */}
                                            <div className="lg:col-span-2 bg-slate-900 border border-white/5 rounded-2xl p-6">
                                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                    <TrendingUp className="w-5 h-5 text-indigo-400" /> Dimensions
                                                </h3>
                                                <div className="h-[250px] w-full">
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={analysis?.radar}>
                                                            <PolarGrid stroke="#334155" />
                                                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                                            <Radar name="Idea" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
                                                        </RadarChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            </div>
                                        </div>

                                        {/* SWOT Analysis */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-4">
                                                <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2"><Shield className="w-4 h-4" /> Strengths</h4>
                                                <ul className="list-disc list-inside text-sm text-emerald-100/70 space-y-1">
                                                    {analysis?.swot.strengths.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>
                                            <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                                                <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><X className="w-4 h-4" /> Weaknesses</h4>
                                                <ul className="list-disc list-inside text-sm text-red-100/70 space-y-1">
                                                    {analysis?.swot.weaknesses.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>
                                            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-4">
                                                <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2"><Rocket className="w-4 h-4" /> Opportunities</h4>
                                                <ul className="list-disc list-inside text-sm text-blue-100/70 space-y-1">
                                                    {analysis?.swot.opportunities.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>
                                            <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-4">
                                                <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2"><Target className="w-4 h-4" /> Threats</h4>
                                                <ul className="list-disc list-inside text-sm text-amber-100/70 space-y-1">
                                                    {analysis?.swot.threats.map((s, i) => <li key={i}>{s}</li>)}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Strategy & Competitors */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div className="md:col-span-2 bg-slate-900 border border-white/5 rounded-2xl p-6">
                                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                    <DollarSign className="w-5 h-5 text-green-400" /> Business Strategy
                                                </h3>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Monetization Model</h4>
                                                        <p className="text-white text-sm leading-relaxed">{analysis?.monetization}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">MVP Strategy ($0 Cost)</h4>
                                                        <p className="text-white text-sm leading-relaxed">{analysis?.mvp_strategy}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-900 border border-white/5 rounded-2xl p-6">
                                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                                    <Users className="w-5 h-5 text-blue-400" /> Competitors
                                                </h3>
                                                <ul className="space-y-3">
                                                    {analysis?.competitors.map((comp, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                                                            {comp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-white/10 bg-slate-900/50 flex justify-between items-center">
                                {analysis ? (
                                    <>
                                        <button
                                            onClick={() => setAnalysis(null)}
                                            className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
                                        >
                                            Analyze Another Idea
                                        </button>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="px-6 py-2.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                                        >
                                            Close Report
                                        </button>
                                    </>
                                ) : (
                                    <div className="w-full flex justify-end">
                                        <button
                                            onClick={handleAnalyze}
                                            disabled={loading || !idea.trim()}
                                            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" /> Analyzing...
                                                </>
                                            ) : (
                                                <>
                                                    <Sparkles className="w-5 h-5" /> Generate Analysis
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
