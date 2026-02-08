"use client";

import Link from "next/link";
import { Rocket, Shield, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

export default function SecurityPage() {
    const features = [
        { icon: Lock, title: "End-to-End Encryption", desc: "All data encrypted at rest (AES-256) and in transit (TLS 1.3)" },
        { icon: Shield, title: "SOC 2 Type II Certified", desc: "Annual audits by independent third parties" },
        { icon: CheckCircle, title: "Regular Penetration Testing", desc: "Quarterly security assessments by certified experts" },
        { icon: Lock, title: "Role-Based Access Control", desc: "Granular permissions to protect sensitive data" },
        { icon: Shield, title: "2FA & SSO", desc: "Multi-factor authentication and SAML single sign-on" },
        { icon: CheckCircle, title: "Audit Logs", desc: "Complete visibility into who accessed what and when" }
    ];

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
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="text-center mb-16">
                            <Shield className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
                            <h1 className="text-5xl font-black mb-6">Security & Compliance</h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                                Your data security is our top priority. We employ enterprise-grade security measures to protect your information.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10"
                                >
                                    <feature.icon className="w-8 h-8 text-indigo-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-3xl font-bold text-white mb-4">Infrastructure Security</h2>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>Hosted on AWS with multi-region redundancy</li>
                                    <li>Automated backups every 6 hours with 30-day retention</li>
                                    <li>DDoS protection and WAF (Web Application Firewall)</li>
                                    <li>99.9% uptime SLA</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-white mb-4">Compliance</h2>
                                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                                    <li>GDPR compliant (data residency options available)</li>
                                    <li>SOC 2 Type II certified</li>
                                    <li>HIPAA-ready for healthcare startups</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-white mb-4">Report a Vulnerability</h2>
                                <p className="text-slate-300">
                                    We take security seriously. If you discover a vulnerability, please report it to: <Link href="mailto:security@venturex.com" className="text-indigo-400 hover:text-indigo-300">security@venturex.com</Link>
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
