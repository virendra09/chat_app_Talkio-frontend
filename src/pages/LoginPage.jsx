import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageCircleHeartIcon } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 bg-[#f5f7fa] text-gray-800 mt-7">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 bg-white border border-orange-400 rounded-xl shadow-lg p-8 transition duration-300">
          
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-yellow-300 flex items-center justify-center transition-all">
                <MessageCircleHeartIcon className="w-7 h-7 text-green-600" />
              </div>
              <h1 className="text-3xl font-extrabold">Let's chat again</h1>
              <p className="text-gray-500">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 text-sm font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="input w-full pl-10 pr-4 py-2 border border-orange-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 text-sm font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full pl-10 pr-10 py-2 border border-orange-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Make it strong"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full bg-green-500 text-white font-semibold py-2 rounded-lg shadow-sm hover:bg-green-600 transition-all duration-200 text-lg "
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <span className="flex justify-center items-center gap-2 ">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-green-500 hover:underline">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden lg:flex items-center justify-center bg-green-200">
     <div className="text-center px-10">
  <h2 className="text-4xl font-bold text-orange-500 mb-4">Welcome Back</h2>

  <p className="text-orange-800 text-lg mb-3">
    Log in and continue where you left off. We're glad to see you again!
  </p>

  <p className="text-orange-700 text-base">
    Your chats, your community, your world — all in one place, ready for you.
  </p>

  <ul className="mt-6 text-orange-700 text-sm space-y-2 text-left max-w-md mx-auto">
    <li className="flex items-start gap-2">
      <span className="text-orange-500">🔒</span>
      <span>Secure login with end-to-end encrypted communication</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-orange-500">💬</span>
      <span>Stay connected with friends and teams in real-time</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-orange-500">⚡</span>
      <span>Fast, reliable and responsive interface for seamless chatting</span>
    </li>
  </ul>

  <p className="mt-6 text-orange-600 font-semibold">
    👋 Let’s get you back in the conversation!
  </p>
</div>

      </div>
    </div>
  );
};

export default LoginPage;
