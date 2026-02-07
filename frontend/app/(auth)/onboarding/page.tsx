"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Rocket, Users, Loader2, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { startupApi } from "@/lib/api/startup";
import { useAuth } from "@/contexts/AuthContext";

type Role = "founder" | "member" | null;

export default function OnboardingPage() {
    const router = useRouter();
    const { user } = useAuth();
    const [step, setStep] = useState<"role" | "details">("role");
    const [role, setRole] = useState<Role>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Founder fields
    const [companyName, setCompanyName] = useState("");
    const [domain, setDomain] = useState("Technology");
    const [stage, setStage] = useState("ideation");
    const [vision, setVision] = useState("");
    const [problemStatement, setProblemStatement] = useState("");
    const [solution, setSolution] = useState("");

    const handleRoleSelect = (selectedRole: Role) => {
        setRole(selectedRole);
        setStep("details");
    };

    const handleComplete = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (role === 'founder') {
                // Create startup profile via API
                await startupApi.create({
                    name: companyName,
                    domain,
                    stage,
                    vision,
                    problemStatement,
                    solution
                });
            }
            // For team members, no startup creation needed
            // They will be added to a startup by the founder
            router.push("/dashboard");
        } catch (err: any) {
            setError(err.response?.data?.message || "Failed to create startup profile");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
            <div className="w-full max-w-lg space-y-8">
                <div className="space-y-2 text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white">
                        {step === "role" ? "Choose your path" : "Tell us about your startup"}
                    </h1>
                    <p className="text-slate-400">
                        {step === "role"
                            ? "Are you starting a new venture or joining an existing one?"
                            : "Let's set up your workspace for success."}
                    </p>
                </div>

                {step === "role" ? (
                    <div className="grid gap-4">
                        <button
                            onClick={() => handleRoleSelect("founder")}
                            className="flex flex-col items-center justify-center p-6 border-2 border-white/10 rounded-xl hover:border-indigo-500 hover:bg-indigo-500/5 transition-all group bg-slate-900/50"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                                <Rocket className="w-8 h-8 text-slate-400 group-hover:text-indigo-400" />
                            </div>
                            <h3 className="font-semibold text-lg text-white">I am a Founder</h3>
                            <p className="text-sm text-slate-400 text-center mt-2">I want to launch a new startup and build my team.</p>
                        </button>

                        <button
                            onClick={() => handleRoleSelect("member")}
                            className="flex flex-col items-center justify-center p-6 border-2 border-white/10 rounded-xl hover:border-indigo-500 hover:bg-indigo-500/5 transition-all group bg-slate-900/50"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                                <Users className="w-8 h-8 text-slate-400 group-hover:text-indigo-400" />
                            </div>
                            <h3 className="font-semibold text-lg text-white">I am a Team Member</h3>
                            <p className="text-sm text-slate-400 text-center mt-2">I want to join an existing startup workspace.</p>
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleComplete} className="space-y-6 animate-in fade-in slide-in-from-right-8 bg-slate-900/50 p-8 rounded-2xl border border-white/10">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        {role === "founder" ? (
                            <>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none text-slate-300">Startup Name *</label>
                                    <input
                                        required
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        placeholder="Acme Inc."
                                        className="flex h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2 text-sm text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none text-slate-300">Industry Domain *</label>
                                    <select
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        className="flex h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:border-indigo-500 transition-colors"
                                    >
                                        <option value="Technology">Technology & SaaS</option>
                                        <option value="Fintech">Fintech</option>
                                        <option value="Edtech">Edtech</option>
                                        <option value="Healthtech">Healthtech</option>
                                        <option value="Consumer">Consumer Goods</option>
                                        <option value="CleanTech">CleanTech</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none text-slate-300">Stage *</label>
                                    <select
                                        value={stage}
                                        onChange={(e) => setStage(e.target.value)}
                                        className="flex h-12 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-2 text-sm text-white focus-visible:outline-none focus-visible:border-indigo-500 transition-colors"
                                    >
                                        <option value="ideation">Ideation</option>
                                        <option value="mvp">MVP</option>
                                        <option value="beta">Beta</option>
                                        <option value="early_traction">Early Traction</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none text-slate-300">Vision *</label>
                                    <textarea
                                        required
                                        value={vision}
                                        onChange={(e) => setVision(e.target.value)}
                                        placeholder="What's your long-term vision?"
                                        className="flex min-h-[80px] w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none text-slate-300">Problem Statement *</label>
                                    <textarea
                                        required
                                        value={problemStatement}
                                        onChange={(e) => setProblemStatement(e.target.value)}
                                        placeholder="What problem are you solving?"
                                        className="flex min-h-[80px] w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-indigo-500 transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none text-slate-300">Solution *</label>
                                    <textarea
                                        required
                                        value={solution}
                                        onChange={(e) => setSolution(e.target.value)}
                                        placeholder="How are you solving it?"
                                        className="flex min-h-[80px] w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-indigo-500 transition-colors"
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="space-y-4">
                                <div className="p-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-center">
                                    <Building2 className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
                                    <h3 className="text-lg font-semibold text-white mb-2">Welcome, Team Member!</h3>
                                    <p className="text-sm text-slate-300">
                                        Your founder will add you to the startup workspace. Once added, you'll have access to tasks, feedback, and other team features.
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-4 pt-4">
                            <button
                                type="button"
                                onClick={() => setStep("role")}
                                className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium border border-white/10 bg-transparent hover:bg-white/5 text-white h-12 px-4 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-500 h-12 px-4 transition-colors shadow-lg shadow-indigo-500/20"
                            >
                                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Enter Workspace"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

