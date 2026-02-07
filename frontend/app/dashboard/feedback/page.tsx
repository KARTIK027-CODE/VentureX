"use client";

import { useEffect, useState } from "react";
import { Star, MessageSquare, Loader2, ThumbsUp } from "lucide-react";
import { feedbackApi } from "@/lib/api/feedback";

interface FeedbackItem {
    _id: string;
    feedbackText: string;
    category?: 'idea' | 'execution' | 'product' | 'market';
    rating?: number;
    submittedByName?: string;
    createdAt: string;
}

export default function FeedbackPage() {
    const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [showForm, setShowForm] = useState(false);

    // Form fields
    const [feedbackText, setFeedbackText] = useState("");
    const [category, setCategory] = useState<'idea' | 'execution' | 'product' | 'market'>('product');
    const [rating, setRating] = useState(3);

    useEffect(() => {
        fetchFeedback();
    }, []);

    const fetchFeedback = async () => {
        try {
            const data = await feedbackApi.getAll();
            setFeedbacks(data as FeedbackItem[]);
        } catch (err: any) {
            setError("Failed to load feedback");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await feedbackApi.submit({
                type: 'internal',
                feedbackText,
                category,
                rating
            });
            setShowForm(false);
            resetForm();
            fetchFeedback();
            setSuccess("Feedback submitted successfully!");
            setTimeout(() => setSuccess(""), 3000);
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to submit feedback");
        }
    };

    const resetForm = () => {
        setFeedbackText("");
        setCategory('product');
        setRating(3);
    };

    const getCategoryColor = (cat?: string) => {
        switch (cat) {
            case 'product': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
            case 'idea': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'execution': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
            case 'market': return 'bg-red-500/20 text-red-400 border-red-500/30';
            default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
        );
    }

    return (
        <div className="p-8 space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Feedback</h1>
                    <p className="text-slate-400 mt-2">Share your thoughts and help us improve</p>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
                >
                    <MessageSquare className="w-4 h-4" />
                    Give Feedback
                </button>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {error}
                </div>
            )}

            {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {success}
                </div>
            )}

            {/* Feedback List */}
            <div className="grid gap-4">
                {feedbacks.length === 0 ? (
                    <div className="bg-slate-900/50 border border-white/10 rounded-xl p-12 text-center">
                        <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-400">No feedback yet. Be the first to share your thoughts!</p>
                    </div>
                ) : (
                    feedbacks.map((feedback) => (
                        <div key={feedback._id} className="bg-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        {feedback.category && (
                                            <span className={`text-xs px-2 py-1 rounded capitalize ${getCategoryColor(feedback.category)}`}>
                                                {feedback.category}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">{feedback.feedbackText}</p>
                                </div>
                                <div className="flex items-center gap-1 ml-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < (feedback.rating || 0) ? 'fill-amber-400 text-amber-400' : 'text-slate-700'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                                <span>By {feedback.submittedByName || 'Anonymous'}</span>
                                <span>•</span>
                                <span>{new Date(feedback.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Feedback Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-slate-900 rounded-xl border border-white/10 p-6 w-full max-w-lg">
                        <h2 className="text-xl font-bold text-white mb-4">Submit Feedback</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-slate-300">Feedback</label>
                                <textarea
                                    value={feedbackText}
                                    onChange={(e) => setFeedbackText(e.target.value)}
                                    required
                                    rows={5}
                                    placeholder="Share your thoughts, ideas, or suggestions..."
                                    className="mt-1 flex w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-300">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value as 'idea' | 'execution' | 'product' | 'market')}
                                    className="mt-1 flex h-10 w-full rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white"
                                >
                                    <option value="product">Product</option>
                                    <option value="idea">Idea</option>
                                    <option value="execution">Execution</option>
                                    <option value="market">Market</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-300 block mb-2">
                                    Rating: {rating}/5
                                </label>
                                <div className="flex gap-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setRating(i + 1)}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-8 h-8 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700 hover:text-slate-600'}`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowForm(false);
                                        resetForm();
                                    }}
                                    className="flex-1 px-4 py-2 border border-white/10 bg-transparent hover:bg-white/5 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
