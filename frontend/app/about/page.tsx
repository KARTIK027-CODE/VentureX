"use client";

import Link from "next/link";
import { Rocket, Users, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

export default function AboutPage() {
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
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="prose prose-invert max-w-none">
                        <h1 className="text-5xl font-black mb-6">About VentureX</h1>
                        <p className="text-xl text-slate-400 mb-12">We're building the operating system for high-growth startups.</p>

                        <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
                            {[
                                { icon: Users, title: "Built by Founders", desc: "Created by a team who've been in your shoes" },
                                { icon: Target, title: "Startup-First", desc: "Every feature designed for fast-moving teams" },
                                { icon: Heart, title: "Community Driven", desc: "Shaped by feedback from 500+ startups" }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10">
                                    <item.icon className="w-8 h-8 text-indigo-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            VentureX was born from frustration. As founders ourselves, we were tired of juggling 15+ tools just to manage our startup.
                            Slack for communication, Notion for docs, QuickBooks for finance, Jira for dev, HubSpot for marketing—the list goes on.
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            We realized that startups need a <strong>unified command center</strong>—a single platform where every department can collaborate,
                            track metrics, and move fast without context-switching.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Today, VentureX powers hundreds of startups worldwide, from pre-seed to Series B. We're just getting started.
                        </p>

                        <div id="careers" className="mt-12 p-8 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                            <h2 className="text-2xl font-bold text-white mb-4">Join Our Team</h2>
                            <p className="text-slate-300 mb-4">We're hiring! Check back soon for open positions.</p>
                            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium">Get in touch →</Link>
                        </div>
                    </motion.div>
                </div>
            </main>

            <footer className="py-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-md relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-500 text-sm">© 2026 VentureX. Built for IIT Jammu Hackathon.</p>
                </div>
            </footer>
        </div>
    );
}
