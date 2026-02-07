'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Mail, Lock, User, Rocket, ArrowRight, Eye, EyeOff, Shield, BarChart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<'founder' | 'team_member'>('founder');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signup(name, email, password, role);
            router.push('/dashboard');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-950">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden p-12 flex-col justify-between border-r border-white/5">
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="flex items-center gap-3 mb-12">
                            <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/20">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">VentureX</h2>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Start Your<br />Journey Today
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-md">
                            Join thousands of founders who are building successful startups with VentureX.
                        </p>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <FeaturePill icon={Zap} text="Launch faster with smart tools" />
                        <FeaturePill icon={BarChart} text="Track progress in real-time" />
                        <FeaturePill icon={Shield} text="Enterprise-grade security" />
                    </motion.div>
                </div>

                {/* Bottom Testimony */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative z-10"
                >
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <p className="text-slate-300 italic mb-4">
                            "VentureX transformed how we manage our startup. The best decision we made!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">SJ</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Sarah Johnson</p>
                                <p className="text-slate-500 text-xs">CEO, TechFlow</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex items-center justify-center p-8 bg-slate-950">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    {/* Mobile Logo */}
                    <Link href="/" className="lg:hidden flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl">
                            <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">VentureX</h2>
                    </Link>

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Create your account</h2>
                        <p className="text-slate-400">Get started with your free account</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl"
                        >
                            {error}
                        </motion.div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSignup} className="space-y-5">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                    <User className="w-5 h-5 text-slate-500" />
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-white/10 bg-slate-900/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                    <Mail className="w-5 h-5 text-slate-500" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@startup.com"
                                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-white/10 bg-slate-900/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                    <Lock className="w-5 h-5 text-slate-500" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    minLength={6}
                                    className="w-full h-12 pl-12 pr-12 rounded-xl border border-white/10 bg-slate-900/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <p className="text-xs text-slate-500 mt-1.5">Minimum 6 characters</p>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-3">
                                I am a
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setRole('founder')}
                                    className={`p-4 rounded-xl border transition-all ${role === 'founder'
                                            ? 'border-indigo-500 bg-indigo-500/10'
                                            : 'border-white/10 bg-slate-900/30 hover:border-white/20'
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <div className={`p-2.5 rounded-xl ${role === 'founder' ? 'bg-indigo-500' : 'bg-slate-800'}`}>
                                            <Rocket className={`w-5 h-5 ${role === 'founder' ? 'text-white' : 'text-slate-400'}`} />
                                        </div>
                                        <span className={`text-sm font-semibold ${role === 'founder' ? 'text-indigo-400' : 'text-slate-400'}`}>
                                            Founder
                                        </span>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRole('team_member')}
                                    className={`p-4 rounded-xl border transition-all ${role === 'team_member'
                                            ? 'border-indigo-500 bg-indigo-500/10'
                                            : 'border-white/10 bg-slate-900/30 hover:border-white/20'
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <div className={`p-2.5 rounded-xl ${role === 'team_member' ? 'bg-indigo-500' : 'bg-slate-800'}`}>
                                            <User className={`w-5 h-5 ${role === 'team_member' ? 'text-white' : 'text-slate-400'}`} />
                                        </div>
                                        <span className={`text-sm font-semibold ${role === 'team_member' ? 'text-indigo-400' : 'text-slate-400'}`}>
                                            Team Member
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function FeaturePill({ icon: Icon, text }: any) {
    return (
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/10">
            <div className="p-2 rounded-lg bg-white/10">
                <Icon className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-slate-300 font-medium">{text}</span>
        </div>
    );
}
