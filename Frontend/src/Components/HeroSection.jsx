import React, { useState, useEffect } from 'react';
import { Users, BookOpen, BarChart3, MessageSquare, Calendar, Award, ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        { icon: Users, text: "Students, Teachers & Administrators" },
        { icon: BarChart3, text: "Real-time Analytics & Insights" },
        { icon: MessageSquare, text: "Seamless Communication Hub" }
    ];

    const stats = [
        { value: "100%", label: "Digital Workflow" },
        { value: "24/7", label: "Access Anywhere" },
        { value: "3", label: "Unified Dashboards" }
    ];

    return (
        <div className="relative min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Text Content */}
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Modern Education Platform 2026</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                            Welcome to
                            <span className="block bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                EduPulse
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            A centralized educational ecosystem that streamlines administration,
                            personalizes learning journeys, and connects your entire institution
                            in real-time.
                        </p>

                        {/* Rotating Features */}
                        <div className="mb-8 h-12">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-3 transition-all duration-500 absolute ${activeFeature === index
                                            ? 'opacity-100 transform translate-y-0'
                                            : 'opacity-0 transform -translate-y-4'
                                            }`}
                                    >
                                        <div className="bg-indigo-100 p-2 rounded-lg">
                                            <Icon className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <span className="text-lg font-medium text-gray-700">{feature.text}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="group bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border-2 border-indigo-200 shadow-md hover:shadow-lg">
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-indigo-600 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Visual Elements */}
                    <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative">

                            {/* Main Card - Dashboard Preview */}
                            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">Dashboard Overview</h3>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                </div>

                                {/* Feature Cards */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl">
                                        <div className="bg-indigo-500 p-3 rounded-lg">
                                            <BookOpen className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-gray-700">Course Management</div>
                                            <div className="text-xs text-gray-500">Create, manage & track courses</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl">
                                        <div className="bg-purple-500 p-3 rounded-lg">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-gray-700">Performance Analytics</div>
                                            <div className="text-xs text-gray-500">Real-time insights & tracking</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-linear-to-r from-pink-50 to-indigo-50 rounded-xl">
                                        <div className="bg-pink-500 p-3 rounded-lg">
                                            <Calendar className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-gray-700">Smart Scheduling</div>
                                            <div className="text-xs text-gray-500">Appointments & meetings</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Stats */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-indigo-600">10+</div>
                                            <div className="text-xs text-gray-500">Award </div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-purple-600">∞</div>
                                            <div className="text-xs text-gray-500">Possibilities</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-pink-600">1</div>
                                            <div className="text-xs text-gray-500">Platform</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-4 -right-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                                <div className="text-xs font-semibold">2026 Ready</div>
                            </div>

                            {/* Floating Indicator */}
                            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                </div>
                                <span className="text-sm font-medium text-gray-700">Live Updates</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
};

export default HeroSection;