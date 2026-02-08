"use client";

import Link from "next/link";
import { ArrowRight, Rocket, User, DollarSign, Code, MessageSquare, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

const ROLES = [
    {
        icon: Rocket,
        title: "For Founders",
        subtitle: "Your startup command center",
        features: [
            "360° view of company metrics",
            "Cross-department insights",
            "Investor-ready reporting",
            "Fundraising tools & pitch decks",
            "Strategic goal tracking (OKRs)"
        ],
        color: "from-indigo-500 to-purple-600",
        stat: "Save 15+ hours/week"
    },
    {
        icon: DollarSign,
        title: "For CFOs & Finance Teams",
        subtitle: "Financial clarity, automated",
        features: [
            "Real-time burn rate & runway",
            "Cap table & equity management",
            "Automated expense tracking",
            "Budget allocation by department",
            "Revenue forecasting models"
        ],
        color: "from-emerald-500 to-green-600",
        stat: "85% faster month-end close"
    },
    {
        icon: Code,
        title: "For CTOs & Dev Teams",
        subtitle: "Build faster, ship smarter",
        features: [
            "GitHub/GitLab sync",
            "Sprint planning & roadmaps",
            "Technical debt tracking",
            "Release management",
            "Team velocity analytics"
        ],
        color: "from-blue-500 to-cyan-600",
        stat: "40% better sprint planning"
    },
    {
        icon: MessageSquare,
        title: "For CMOs & Marketing",
        subtitle: "Campaigns that convert",
        features: [
            "Social media scheduler",
            "Content calendar",
            "Campaign ROI tracking",
            "SEO & analytics dashboard",
            "Brand asset management"
        ],
        color: "from-pink-500 to-rose-600",
        stat: "3x content output"
    },
    {
        icon: Briefcase,
        title: "For HR & Operations",
        subtitle: "People-first infrastructure",
        features: [
            "Applicant tracking (ATS)",
            "Onboarding workflows",
            "Team directory & org charts",
            "Performance review cycles",
            "Payroll integration"
        ],
        color: "from-purple-500 to-violet-600",
        stat: "60% faster onboarding"
    },
    {
        icon: Users,
        title: "For Team Members",
        subtitle: "Clarity on what matters",
        features: [
            "Personal task dashboard",
            "Department-specific analytics",
            "Collaboration tools",
            "Goal visibility & alignment",
            "Resource access control"
        ],
        color: "from-amber-500 to-orange-600",
        stat: "90% team satisfaction"
    }
];

export default function DepartmentsPage() {
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
                {/* Hero */}
                <section className="relative pt-24 pb-16">
                    <div className="container mx-auto px-6 text-center max-w-5xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                                Built for Every Role
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                                One Platform. <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Every Department</span>.
                            </h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                                Whether you're a founder, CFO, CTO, or team member—VentureX gives you the exact tools you need.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Roles Grid */}
                <section className="py-24">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {ROLES.map((role, idx) => (
                                <motion.div
                                    key={role.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} p-3 mb-6 shadow-lg`}>
                                        <role.icon className="w-full h-full text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{role.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6">{role.subtitle}</p>

                                    <ul className="space-y-2 mb-6">
                                        {role.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-4 border-t border-white/10">
                                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Impact</div>
                                        <div className="text-lg font-bold text-indigo-400">{role.stat}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-12 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-xl text-center"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Ready to empower your entire team?
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Give every role the tools they need to excel.
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
