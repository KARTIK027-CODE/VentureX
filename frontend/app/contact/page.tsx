"use client";

import Link from "next/link";
import { ArrowRight, Rocket, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="flex flex-col min-h-screen font-sans text-slate-100">
            <div className="absolute inset-0 z-0"><Background3D /></div>

            <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-slate-950/20 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
                        <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">VentureX</span>
                </Link>
                <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white">← Back to Home</Link>
            </header>

            <main className="flex-1 relative z-10 py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-5xl font-black mb-6">Get in Touch</h1>
                        <p className="text-xl text-slate-400 mb-12">Have questions? We're here to help.</p>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Mail className="w-5 h-5 text-indigo-400" />
                                        <span>support@venturex.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-300">
                                        <Mail className="w-5 h-5 text-indigo-400" />
                                        <span>sales@venturex.com</span>
                                    </div>
                                </div>
                                <div className="mt-8 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                                    <h3 className="font-bold text-white mb-2">Enterprise Sales</h3>
                                    <p className="text-slate-400 text-sm mb-4">Looking to discuss custom plan?</p>
                                    <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View Pricing →</Link>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                                        placeholder="john@startup.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                                >
                                    {submitted ? "✓ Message Sent!" : (<><Send className="w-4 h-4" /> Send Message</>)}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-md relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-500 text-sm">© 2026 VentureX</p>
                </div>
            </footer>
        </div>
    );
}
