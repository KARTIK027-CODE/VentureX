"use client";

import Link from "next/link";
import { Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

export default function PrivacyPage() {
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
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-8 h-8 text-indigo-400" />
                            <h1 className="text-5xl font-black">Privacy Policy</h1>
                        </div>
                        <p className="text-sl text-slate-400 mb-2">Effective Date: January 1, 2026</p>
                        <p className="text-slate-300 mb-12">Your privacy is important to us. This policy outlines how we collect, use, and protect your data.</p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                                <p className="text-slate-300">We collect information you provide directly, such as when you create an account, use our services, or contact support. This includes:</p>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Name, email address, and company information</li>
                                    <li>Usage data and analytics</li>
                                    <li>Payment information (processed securely through Stripe)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
                                <p className="text-slate-300">We use your information to:</p>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Send updates, security alerts, and support messages</li>
                                    <li>Analyze usage patterns to enhance user experience</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                                <p className="text-slate-300">We implement industry-standard security measures including:</p>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Encryption at rest and in transit (AES-256)</li>
                                    <li>Regular security audits and penetration testing</li>
                                    <li>SOC 2 Type II compliance</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
                                <p className="text-slate-300">We use trusted third-party services for:</p>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Payment processing (Stripe)</li>
                                    <li>Analytics (Google Analytics)</li>
                                    <li>Infrastructure (AWS)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                                <p className="text-slate-300">You have the right to:</p>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Access, update, or delete your data</li>
                                    <li>Export your data in a portable format</li>
                                    <li>Opt out of marketing communications</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                                <p className="text-slate-300">
                                    For privacy-related questions, contact us at: <Link href="mailto:privacy@venturex.com" className="text-indigo-400 hover:text-indigo-300">privacy@venturex.com</Link>
                                </p>
                            </section>
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
