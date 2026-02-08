"use client";

import Link from "next/link";
import { ArrowRight, Rocket, Search, Filter, TrendingUp, Users, DollarSign, MapPin, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

const MOCK_STARTUPS = [
    {
        id: 1,
        name: "TechVentures AI",
        logo: "🤖",
        industry: "AI/ML",
        stage: "Series A",
        location: "San Francisco, CA",
        teamSize: 15,
        mrr: "$45K",
        growth: "+35%",
        description: "Building next-gen AI tools for developers",
        metrics: { users: "5K+", retention: "85%" }
    },
    {
        id: 2,
        name: "GreenFlow Energy",
        logo: "🌱",
        industry: "CleanTech",
        stage: "Seed",
        location: "Austin, TX",
        teamSize: 8,
        mrr: "$12K",
        growth: "+52%",
        description: "Renewable energy management platform",
        metrics: { users: "2K+", retention: "78%" }
    },
    {
        id: 3,
        name: "HealthSync Pro",
        logo: "🏥",
        industry: "HealthTech",
        stage: "Pre-Seed",
        location: "Boston, MA",
        teamSize: 5,
        mrr: "$8K",
        growth: "+68%",
        description: "Patient data synchronization for hospitals",
        metrics: { users: "1K+", retention: "92%" }
    },
    {
        id: 4,
        name: "FinTrack Analytics",
        logo: "💰",
        industry: "FinTech",
        stage: "Series A",
        location: "New York, NY",
        teamSize: 22,
        mrr: "$78K",
        growth: "+28%",
        description: "Real-time financial analytics for SMBs",
        metrics: { users: "12K+", retention: "81%" }
    },
    {
        id: 5,
        name: "EduLearn Platform",
        logo: "📚",
        industry: "EdTech",
        stage: "Seed",
        location: "Seattle, WA",
        teamSize: 12,
        mrr: "$31K",
        growth: "+41%",
        description: "Adaptive learning platform for students",
        metrics: { users: "8K+", retention: "76%" }
    },
    {
        id: 6,
        name: "CloudScale Ops",
        logo: "☁️",
        industry: "DevOps",
        stage: "Series B",
        location: "San Francisco, CA",
        teamSize: 45,
        mrr: "$125K",
        growth: "+22%",
        description: "Infrastructure automation for cloud",
        metrics: { users: "18K+", retention: "88%" }
    },
    {
        id: 7,
        name: "FoodieConnect",
        logo: "🍕",
        industry: "FoodTech",
        stage: "Pre-Seed",
        location: "Miami, FL",
        teamSize: 6,
        mrr: "$5K",
        growth: "+89%",
        description: "Restaurant discovery and reservations",
        metrics: { users: "800+", retention: "71%" }
    },
    {
        id: 8,
        name: "PropTech Solutions",
        logo: "🏢",
        industry: "PropTech",
        stage: "Seed",
        location: "Denver, CO",
        teamSize: 10,
        mrr: "$19K",
        growth: "+44%",
        description: "Smart building management systems",
        metrics: { users: "3.5K+", retention: "83%" }
    },

];

const INDUSTRIES = ["All", "AI/ML", "FinTech", "HealthTech", "EdTech", "CleanTech", "DevOps", "FoodTech", "PropTech"];
const STAGES = ["All", "Pre-Seed", "Seed", "Series A", "Series B"];

export default function InvestorsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [selectedStage, setSelectedStage] = useState("All");

    const filteredStartups = MOCK_STARTUPS.filter(startup => {
        const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            startup.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesIndustry = selectedIndustry === "All" || startup.industry === selectedIndustry;
        const matchesStage = selectedStage === "All" || startup.stage === selectedStage;
        return matchesSearch && matchesIndustry && matchesStage;
    });

    return (
        <div className="flex flex-col min-h-screen font-sans text-slate-100 overflow-x-hidden selection:bg-indigo-500/30">
            <div className="absolute inset-0 z-0">
                <Background3D />
            </div>

            {/* Header */}
            <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-slate-950/20 sticky top-0 z-50">
                <Link href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
                        <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">VentureX</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        Log in
                    </Link>
                    <Link
                        href="/signup"
                        className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-indigo-500/25 group"
                    >
                        Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </header>

            <main className="flex-1 relative z-10">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-12"
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                                For Investors
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                                Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">High-Growth</span> Startups
                            </h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                                Access vetted startups, view pitch decks, and connect directly with founders building the future.
                            </p>
                        </motion.div>

                        {/* Search and Filters */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12"
                        >
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search startups..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                                    />
                                    {searchTerm && (
                                        <button
                                            onClick={() => setSearchTerm("")}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                                <select
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                >
                                    {INDUSTRIES.map(industry => (
                                        <option key={industry} value={industry} className="bg-slate-900">{industry}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedStage}
                                    onChange={(e) => setSelectedStage(e.target.value)}
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                                >
                                    {STAGES.map(stage => (
                                        <option key={stage} value={stage} className="bg-slate-900">{stage}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                                <Filter className="w-4 h-4" />
                                <span>{filteredStartups.length} startups found</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Startups Grid */}
                <section className="pb-24">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredStartups.map((startup, idx) => (
                                <motion.div
                                    key={startup.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-3xl border border-white/10">
                                                {startup.logo}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1">{startup.name}</h3>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium">
                                                        {startup.industry}
                                                    </span>
                                                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-medium">
                                                        {startup.stage}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 text-sm mb-4">{startup.description}</p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-2 mb-1">
                                                <DollarSign className="w-4 h-4 text-emerald-400" />
                                                <span className="text-xs text-slate-400">MRR</span>
                                            </div>
                                            <div className="text-lg font-bold text-white">{startup.mrr}</div>
                                            <div className="text-xs text-emerald-400">{startup.growth} MoM</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Users className="w-4 h-4 text-blue-400" />
                                                <span className="text-xs text-slate-400">Team</span>
                                            </div>
                                            <div className="text-lg font-bold text-white">{startup.teamSize}</div>
                                            <div className="text-xs text-slate-400">{startup.metrics.users} users</div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span>{startup.location}</span>
                                    </div>

                                    {/* CTA */}
                                    <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]">
                                        View Pitch Deck <ArrowRight className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {filteredStartups.length === 0 && (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-white mb-2">No startups found</h3>
                                <p className="text-slate-400">Try adjusting your filters or search term</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-md relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 font-bold text-lg text-slate-200 mb-4">
                        <Rocket className="w-5 h-5 text-indigo-500" />
                        <span>VentureX</span>
                    </Link>
                    <p className="text-slate-500 text-sm">© 2026 VentureX. Built for IIT Jammu Hackathon.</p>
                </div>
            </footer>
        </div>
    );
}
