import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageCircleHeartIcon, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#f5f7fa] text-gray-800 mt-7">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 bg-white border border-green-400 rounded-xl shadow-lg p-8 transition duration-300">
          
          {/* Logo & Title */}
          <div className="text-center mb-3">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl bg-yellow-300 flex items-center justify-center transition-all">
                <MessageCircleHeartIcon className="w-7 h-7 text-green-600" />
              </div>
              <h1 className="text-3xl font-extrabold">Create Account</h1>
              <p className="text-gray-500">Get started with your free account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 ">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 text-sm font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input w-full pl-10 pr-4 py-2 border border-green-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
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
                  className="input w-full pl-10 pr-4 py-2 border border-green-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
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
                  className="input w-full pl-10 pr-10 py-2 border border-green-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-orange-500 text-white font-semibold py-2 rounded-lg shadow-sm hover:bg-orange-600 transition-all duration-200 text-lg"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <span className="flex justify-center items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Loading...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-500 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex items-center justify-center bg-orange-100">
       <div className="text-center px-10">
  <h2 className="text-4xl font-bold text-green-600 mb-4">Start Your Journey</h2>
  
  <p className="text-green-800 text-lg mb-3">
    Create your account and chat with the world — effortlessly and securely.
  </p>

  <p className="text-green-700 text-base">
    Whether you're connecting with friends or building new communities, our platform helps you stay close — from anywhere, at any time.
  </p>

  <ul className="mt-6 text-green-700 text-sm space-y-2 text-left max-w-md mx-auto">
    <li className="flex items-start gap-2">
      <span className="text-green-500">✅</span>
      <span>Real-time messaging with speed and style</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-green-500">✅</span>
      <span>Easy sign-up, secure login, and encrypted chats</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-green-500">✅</span>
      <span>Meet, chat, and grow — all in one place</span>
    </li>
  </ul>

  <p className="mt-6 text-green-600 font-semibold">
    🚀 Let's build better conversations together.
  </p>
</div>

      </div>
    </div>
  );
};

export default SignUpPage;
