import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
            <Head title="Register" />
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200 rounded-full opacity-25 blur-lg"></div>
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo/Brand Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.09 8.26L19.65 7.26L14.83 12L19.65 16.74L13.09 15.74L12 22L10.91 15.74L4.35 16.74L9.17 12L4.35 7.26L10.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h1>
                    <p className="text-gray-600 text-sm">Join our learning community</p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
                    <form onSubmit={submit} className="space-y-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <InputLabel 
                                htmlFor="name" 
                                value="Full Name" 
                                className="text-gray-700 font-medium text-sm"
                            />
                            <div className="relative">
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200 placeholder-gray-400 text-gray-900"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Enter your full name"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <InputError message={errors.name} className="text-red-500 text-xs mt-1" />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <InputLabel 
                                htmlFor="email" 
                                value="Email Address" 
                                className="text-gray-700 font-medium text-sm"
                            />
                            <div className="relative">
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200 placeholder-gray-400 text-gray-900"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>
                            <InputError message={errors.email} className="text-red-500 text-xs mt-1" />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <InputLabel 
                                htmlFor="password" 
                                value="Password" 
                                className="text-gray-700 font-medium text-sm"
                            />
                            <div className="relative">
                                <TextInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={data.password}
                                    className="w-full px-4 py-3 pr-12 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200 placeholder-gray-400 text-gray-900"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Create a strong password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <InputError message={errors.password} className="text-red-500 text-xs mt-1" />
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2">
                            <InputLabel 
                                htmlFor="password_confirmation" 
                                value="Confirm Password" 
                                className="text-gray-700 font-medium text-sm"
                            />
                            <div className="relative">
                                <TextInput
                                    id="password_confirmation"
                                    type={showPasswordConfirmation ? "text" : "password"}
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="w-full px-4 py-3 pr-12 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200 placeholder-gray-400 text-gray-900"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                >
                                    {showPasswordConfirmation ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <InputError message={errors.password_confirmation} className="text-red-500 text-xs mt-1" />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <PrimaryButton 
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                                disabled={processing}
                            >
                                {processing ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating Account...
                                    </div>
                                ) : (
                                    'Create Account'
                                )}
                            </PrimaryButton>
                        </div>

                        {/* Login Link */}
                        <div className="text-center pt-4 border-t border-gray-100">
                            <p className="text-gray-600 text-sm">
                                Already have an account?{' '}
                                <Link
                                    href={route('login')}
                                    className="text-green-600 hover:text-green-700 font-semibold hover:underline transition-colors duration-200"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-xs">
                        By creating an account, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    );
}