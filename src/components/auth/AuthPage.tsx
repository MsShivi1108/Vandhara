import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Map, Eye, EyeOff, Users, Shield } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"admin" | "user">("user");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      return;
    }

    setIsLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password, selectedRole);
      } else {
        await signup(
          formData.email,
          formData.password,
          formData.name,
          selectedRole
        );
      }
    } catch (error) {
      console.error("Auth error:", error);
      // You could add error state handling here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#010f2b] via-[#060523] to-[#08204a] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="rounded-full inline-block mb-1 h-20 w-20">
            <img src="/public/logo.jpg" alt="logo" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">FRA Atlas</h1>
          <p className="text-gray-400">AI-Powered Forest Rights Monitoring</p>
        </div>

        {/* Auth Form */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-400">
              {isLogin
                ? "Sign in to access your dashboard"
                : "Join the FRA monitoring system"}
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Select Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole("user")}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  selectedRole === "user"
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                    : "bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500"
                }`}
              >
                <Users className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">User</div>
                <div className="text-xs opacity-75">Tribal/NGO Access</div>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole("admin")}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  selectedRole === "admin"
                    ? "bg-blue-500/20 border-blue-500 text-blue-400"
                    : "bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500"
                }`}
              >
                <Shield className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Admin</div>
                <div className="text-xs opacity-75">Government Access</div>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-600 hover:to-green-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading
                ? "Processing..."
                : isLogin
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
