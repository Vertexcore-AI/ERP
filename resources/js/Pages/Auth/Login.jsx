import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
            <Head title="Log in" />
            
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-200 rounded-full opacity-25 blur-lg"></div>
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo/Brand Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L13.09 8.26L19.65 7.26L14.83 12L19.65 16.74L13.09 15.74L12 22L10.91 15.74L4.35 16.74L9.17 12L4.35 7.26L10.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                    <p className="text-gray-600 text-sm">Sign in to continue your learning journey</p>
                </div>

                {/* Status Message */}
                {status && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm font-medium text-green-800">{status}</p>
                        </div>
                    </div>
                )}

                {/* Main Form Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
                    <form onSubmit={submit} className="space-y-6">
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
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Enter your email"
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
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-200 placeholder-gray-400 text-gray-900"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Enter your password"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                            <InputError message={errors.password} className="text-red-500 text-xs mt-1" />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center group cursor-pointer">
                                <div className="relative">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                                    />
                                </div>
                                <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                                    Remember me
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline transition-colors duration-200"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
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
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </PrimaryButton>
                        </div>

                        {/* Register Link */}
                        <div className="text-center pt-4 border-t border-gray-100">
                            <p className="text-gray-600 text-sm">
                                Don't have an account?{' '}
                                <Link
                                    href={route('register')}
                                    className="text-green-600 hover:text-green-700 font-semibold hover:underline transition-colors duration-200"
                                >
                                    Create one here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Quick Login Options (Optional - you can remove if not needed) */}
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50 text-gray-500">
                                Quick & Secure Access
                            </span>
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-xs">
                        Protected by industry-standard security measures
                    </p>
                </div>
            </div>
        </div>
    );
}