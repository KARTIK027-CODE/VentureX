"use client";

import Link from "next/link";
import { ArrowRight, Rocket, Check, Zap, Star, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

const PLANS = [
    {
        name: "Free",
        icon: Rocket,
        price: "$0",
        period: "forever",
        description: "Perfect for solo founders validating their idea",
        features: [
            "Up to 3 team members",
            "Basic task & milestone tracking",
            "5GB storage",
            "Community support",
            "Mobile app access"
        ],
        cta: "Get Started Free",
        highlighted: false,
        color: "from-slate-500 to-gray-600"
    },
    {
        name: "Pro",
        icon: Zap,
        price: "$99",
        period: "/month",
        description: "For growing startups ready to scale",
        features: [
            "Up to 25 team members",
            "All Free features",
            "Advanced analytics & reporting",
            "Role-based access control",
            "50GB storage",
            "Priority support",
            "All integrations (GitHub, Stripe, etc.)",
            "Custom branding",
            "API access"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        color: "from-indigo-500 to-purple-600",
        badge: "Most Popular"
    },
    {
        name: "Enterprise",
        icon: Crown,
        price: "Custom",
        period: "",
        description: "Tailored solutions for established companies",
        features: [
            "Unlimited team members",
            "All Pro features",
            "Dedicated account manager",
            "Custom integrations",
            "Unlimited storage",
            "24/7 phone support",
            "Advanced security (SSO, audit logs)",
            "Custom SLAs",
            "On-premise deployment option"
        ],
        cta: "Contact Sales",
        highlighted: false,
        color: "from-amber-500 to-orange-600"
    }
];

const FAQS = [
    {
        q: "Can I switch plans later?",
        a: "Absolutely! You can upgrade or downgrade anytime. Changes take effect immediately."
    },
    {
        q: "Is there a free trial for Pro?",
        a: "Yes, we offer a 14-day free trial for Pro with no credit card required."
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, debit cards, and wire transfers for Enterprise plans."
    },
    {
        q: "Do you offer discounts for nonprofits?",
        a: "Yes! Registered nonprofits and educational institutions get 50% off Pro plans. Contact us for details."
    },
    {
        q: "What happens if I exceed my team limit?",
        a: "You'll be prompted to upgrade to the next tier. No features are locked until you do."
    }
];

export default function PricingPage() {
    const [isAnnual, setIsAnnual] = useState(false);

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
                                Transparent Pricing
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                                Choose the Plan That <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Fits Your Stage</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
                                Start free, scale as you grow. No hidden fees, cancel anytime.
                            </p>

                            {/* Annual Toggle */}
                            <div className="inline-flex items-center gap-3 p-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/10">
                                <button
                                    onClick={() => setIsAnnual(false)}
                                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${!isAnnual ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setIsAnnual(true)}
                                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${isAnnual ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                                >
                                    Annual <span className="ml-1 text-xs text-emerald-400">(Save 20%)</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="pb-24">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {PLANS.map((plan, idx) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 ${plan.highlighted
                                            ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-105'
                                            : 'bg-slate-900/60 border-white/10 hover:border-indigo-500/30'
                                        }`}
                                >
                                    {plan.badge && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-lg">
                                            {plan.badge}
                                        </div>
                                    )}

                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} p-2.5 mb-6`}>
                                        <plan.icon className="w-full h-full text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-black text-white">
                                                {plan.price === "$99" && isAnnual ? "$79" : plan.price}
                                            </span>
                                            <span className="text-slate-400">{plan.period}</span>
                                        </div>
                                        {plan.price === "$99" && isAnnual && (
                                            <div className="text-xs text-emerald-400 mt-1">Billed annually at $948/year</div>
                                        )}
                                    </div>

                                    <Link
                                        href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                                        className={`block w-full py-3 px-4 rounded-xl font-semibold text-center transition-all mb-8 ${plan.highlighted
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:brightness-110 shadow-lg'
                                                : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                    >
                                        {plan.cta}
                                    </Link>

                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {FAQS.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10"
                                >
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-slate-400">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
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
