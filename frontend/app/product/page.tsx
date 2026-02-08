"use client";

import Link from "next/link";
import { ArrowRight, Rocket, DollarSign, FolderGit, Users, Briefcase, BarChart3, CheckCircle, Zap, Shield, Globe, Code, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

const FEATURES = [
    {
        icon: DollarSign,
        title: "FinanceOS",
        description: "Complete financial management",
        features: [
            "Real-time burn rate tracking",
            "Cap table management",
            "Automated expense approvals",
            "Revenue analytics & forecasting",
            "Budget allocation by department"
        ],
        color: "from-emerald-500 to-green-600"
    },
    {
        icon: FolderGit,
        title: "TechOS",
        description: "Development workflow automation",
        features: [
            "GitHub/GitLab integration",
            "Sprint planning & roadmaps",
            "Bug tracking & priorities",
            "CI/CD pipeline monitoring",
            "Technical debt tracker"
        ],
        color: "from-blue-500 to-cyan-600"
    },
    {
        icon: Users,
        title: "Marketing Hub",
        description: "Campaign management at scale",
        features: [
            "Social media scheduling",
            "Content calendar management",
            "Campaign analytics dashboard",
            "SEO tracking & insights",
            "Brand asset library"
        ],
        color: "from-pink-500 to-rose-600"
    },
    {
        icon: Briefcase,
        title: "HR & Talent",
        description: "People operations simplified",
        features: [
            "Applicant tracking system",
            "Onboarding checklists",
            "Team directory & org chart",
            "Performance reviews",
            "Payroll integration"
        ],
        color: "from-purple-500 to-violet-600"
    },
    {
        icon: BarChart3,
        title: "Analytics & Insights",
        description: "Data-driven decision making",
        features: [
            "Custom dashboards",
            "Cross-department metrics",
            "Goal tracking (OKRs)",
            "Trend analysis",
            "Automated reporting"
        ],
        color: "from-amber-500 to-orange-600"
    },
    {
        icon: Shield,
        title: "Security & Access",
        description: "Enterprise-grade protection",
        features: [
            "Role-based permissions",
            "2FA authentication",
            "Audit logs",
            "SOC 2 compliance",
            "Data encryption at rest"
        ],
        color: "from-slate-500 to-gray-600"
    }
];

const INTEGRATIONS = [
    "GitHub", "GitLab", "Stripe", "QuickBooks", "Slack", "Google Workspace",
    "Linear", "Jira", "Notion", "Figma", "Intercom", "HubSpot"
];

export default function ProductPage() {
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
                    <div className="container mx-auto px-6 text-center max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                                Product Features
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                                Everything Your Startup <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Needs to Scale</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                                From finance to engineering, marketing to HR—manage every department in one unified platform.
                            </p>
                            <Link
                                href="/signup"
                                className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all shadow-xl hover:scale-105"
                            >
                                Start Free Trial <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {FEATURES.map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-3 mb-6 shadow-lg`}>
                                        <feature.icon className="w-full h-full text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6">{feature.description}</p>
                                    <ul className="space-y-2">
                                        {feature.features.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integrations Section */}
                <section id="integrations" className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Integrates with Your Stack
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Connect the tools you already use—no migration headaches.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {INTEGRATIONS.map((tool, idx) => (
                                <motion.div
                                    key={tool}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.03 }}
                                    className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium hover:border-indigo-500/50 hover:bg-white/10 transition-all"
                                >
                                    {tool}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-xl text-center"
                        >
                            <Zap className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Ready to supercharge your startup?
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Join hundreds of founders using VentureX to scale faster.
                            </p>
                            <Link
                                href="/signup"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl"
                            >
                                Start Free Trial <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
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
