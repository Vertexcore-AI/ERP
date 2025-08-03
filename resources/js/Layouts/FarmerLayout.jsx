import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    Home,
    Sprout,
    Package,
    Scissors,
    TrendingUp,
    FileText,
    Menu,
    X,
    Bell,
    Settings,
    LogOut,
    User,
    Sun,
    Moon
} from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/Components/ui/dropdown-menu';
import { ModeToggle } from '@/Components/ui/mode-toggle';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Dashboard', href: '/farmer/dashboard', icon: Home },
    { name: 'Crop Management', href: '/farmer/crops', icon: Sprout },
    { name: 'Inventory', href: '/farmer/inventory', icon: Package },
    { name: 'Harvest Tracking', href: '/farmer/harvest', icon: Scissors },
    { name: 'Sales & Finance', href: '/farmer/sales', icon: TrendingUp },
    { name: 'Reports', href: '/farmer/reports', icon: FileText },
];

export default function FarmerLayout({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Fallback user data if not provided
    const currentUser = user || {
        name: 'Farmer User',
        email: 'farmer@govipotha.com',
        avatar: null
    };

    return (
        <div className="min-h-screen bg-background">
            <Head title={header} />

            {/* Mobile sidebar overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-50 bg-card border-r border-border transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
                <div className="flex h-full flex-col">
                    {/* Logo */}
                    <div className="flex h-20 items-center justify-between px-6 border-b border-border">
                        <div className="flex items-center space-x-3">
                            <img
                                src="/images/logo.png"
                                alt="GoviPotha Logo"
                                className="w-16 h-16 object-contain"
                            />

                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 px-4 py-6">
                        {navigation.map((item) => {
                            const isActive = window.location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                        isActive
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                    }`}
                                >
                                    <item.icon className="mr-3 h-5 w-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User section */}
                    <div className="border-t border-border p-4">
                        <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                                <AvatarFallback>
                                    {currentUser.name?.charAt(0)?.toUpperCase() || 'F'}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
                                    {currentUser.name}
                                </p>
                                <p className="text-xs text-muted-foreground truncate">
                                    {currentUser.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Header */}
                <header className="bg-card border-b border-border">
                    <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                            <h1 className="text-lg font-semibold text-foreground ml-4 lg:ml-0">
                                {header}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Notifications */}
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-8 w-8" />
                                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs text-white text-center">
                                    3
                                </Badge>
                            </Button>

                            {/* Theme toggle */}
                            <ModeToggle />

                            {/* User menu */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                                            <AvatarFallback>
                                                {currentUser.name?.charAt(0)?.toUpperCase() || 'F'}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {currentUser.name}
                                            </p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {currentUser.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
