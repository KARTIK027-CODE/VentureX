"use client";

import Link from "next/link";
import { Rocket, FileText } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

export default function TermsPage() {
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
                            <FileText className="w-8 h-8 text-indigo-400" />
                            <h1 className="text-5xl font-black">Terms of Service</h1>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">Effective Date: January 1, 2026</p>
                        <p className="text-slate-300 mb-12">Please read these terms carefully before using VentureX.</p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                <p className="text-slate-300">
                                    By accessing or using VentureX, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. User Accounts</h2>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>You must provide accurate and complete information</li>
                                    <li>You are responsible for maintaining account security</li>
                                    <li>One account per person; no account sharing</li>
                                    <li>Notify us immediately of any unauthorized access</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Acceptable Use</h2>
                                <p className="text-slate-300">You agree NOT to:</p>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Violate any laws or regulations</li>
                                    <li>Transmit malware or malicious code</li>
                                    <li>Reverse engineer or attempt to access source code</li>
                                    <li>Use the service to spam or harass others</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Subscriptions renew automatically unless canceled</li>
                                    <li>No refunds for partial billing periods</li>
                                    <li>We reserve the right to change pricing with 30 days notice</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                                <p className="text-slate-300">
                                    All content, features, and functionality are owned by VentureX and protected by copyright, trademark, and other intellectual property laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                                <p className="text-slate-300">
                                    VentureX is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                                <p className="text-slate-300">
                                    We reserve the right to suspend or terminate accounts that violate these terms. You may cancel your account at any time.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
                                <p className="text-slate-300">
                                    For questions about these terms, contact: <Link href="mailto:legal@venturex.com" className="text-indigo-400 hover:text-indigo-300">legal@venturex.com</Link>
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
