"use client";

import Link from "next/link";
import { ArrowRight, Rocket, Users, Target, BarChart, CheckCircle, Zap, Shield, Sparkles, FolderGit, MessageSquare, DollarSign, LineChart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Background3D = dynamic(() => import("@/components/ui/background-3d"), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-100 overflow-x-hidden selection:bg-indigo-500/30">
      <div className="absolute inset-0 z-0">
        <Background3D />
      </div>

      {/* Header */}
      <header className="px-6 lg:px-8 h-20 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-slate-950/20 sticky top-0 z-50">
        <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">VentureX</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          {["Product", "Departments", "Pricing"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-indigo-400 transition-colors duration-200">
              {item}
            </a>
          ))}
        </nav>
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
        <section className="relative pt-32 pb-40">
          <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              The Operating System <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x drop-shadow-2xl">
                for Startups.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              One workspace to rule them all. Manage Tech, Finance, Marketing, and HR in a single, collaborative platform. Like GitHub, but for your entire company.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all shadow-[0_0_40px_-5px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                For Startups <Rocket className="w-5 h-5" />
              </Link>
              <Link
                href="#departments"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                For Investors
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Grid - Bento Box Style */}
        <section id="departments" className="py-32 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">One Platform, Every Role</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">A dedicated workbench for every team.</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Break down silos. Enable your Tech, Finance, and Marketing teams to calibrate on a single source of truth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              {/* Finance Core */}
              <div className="md:col-span-2 group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-[80px] -z-10 group-hover:bg-emerald-600/30 transition-colors"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">FinanceOS</h3>
                      <p className="text-slate-400 max-w-md">Track burn rate, manage equity cap tables, and automate expense approvals without leaving your workspace.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 relative h-40 w-full bg-slate-950/50 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
                  <div className="w-full px-6 py-4">
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Monthly Recurring Revenue</span>
                      <span className="text-emerald-400">+12.5%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[75%]"></div>
                    </div>
                    <div className="mt-4 flex gap-4">
                      <div className="h-16 w-1/3 bg-slate-800/50 rounded-lg animate-pulse"></div>
                      <div className="h-16 w-1/3 bg-slate-800/50 rounded-lg animate-pulse delay-75"></div>
                      <div className="h-16 w-1/3 bg-slate-800/50 rounded-lg animate-pulse delay-100"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fundraising */}
              <div className="md:row-span-2 group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-500/10 to-transparent -z-10"></div>
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Fundraising</h3>
                <p className="text-slate-400 mb-6">Direct investor connections. Host your pitch deck and share a secure data room link.</p>

                <div className="space-y-3 mt-auto">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">VC</div>
                      <div>
                        <div className="text-sm font-semibold text-white">Sequoia Capital</div>
                        <div className="text-xs text-slate-400">Has viewed your deck</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold">YC</div>
                      <div>
                        <div className="text-sm font-semibold text-white">YCombinator</div>
                        <div className="text-xs text-green-400">Request for Meeting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HR & Hiring */}
              <FeatureCard
                icon={<Briefcase className="w-6 h-6 text-indigo-400" />}
                title="HR & Hiring"
                description="Manage your talent pipeline, onboarding checklists, and employee directory."
              />

              {/* Tech & Product */}
              <FeatureCard
                icon={<FolderGit className="w-6 h-6 text-blue-400" />}
                title="Tech & Product"
                description="Integrated roadmap planning. Sync with GitHub, Linear, and Jira automatically."
              />

              {/* Unified Collaboration */}
              <div className="md:col-span-2 md:col-start-2 group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex items-center justify-between gap-8 relative overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-purple-500/10 to-transparent -z-10"></div>
                <div className="max-w-md">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Role-Based Access Control</h3>
                  <p className="text-slate-400">Give your marketing intern access to social calendars, but not your financial burn rate. Granular permissions built-in.</p>
                </div>
                <div className="hidden md:block">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
                        User {i}
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-white font-bold cursor-pointer hover:bg-slate-600 transition-colors">
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-200 mb-4">
                <Rocket className="w-5 h-5 text-indigo-500" />
                <span>VentureX</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                The operating system for high-growth startups. Manage everything from finance to fundraising in one place.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-200 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-200 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-200 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2026 VentureX. Built for IIT Jammu Hackathon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  )

}
