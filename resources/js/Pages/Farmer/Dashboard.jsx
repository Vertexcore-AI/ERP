import { useState, useEffect } from 'react';
import FarmerLayout from '@/Layouts/FarmerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Progress } from '@/Components/ui/progress';
import { Button } from '@/Components/ui/button';
import { Separator } from '@/Components/ui/separator';
import {
    TrendingUp,
    TrendingDown,
    Minus,
    Droplets,
    Thermometer,
    Sun,
    Cloud,
    CloudRain,
    Wind,
    MapPin,
    Calendar,
    Clock,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Sprout,
    Package,
    Scissors,
    DollarSign,
    Users,
    Activity,
    ArrowRight,
    CloudLightning
} from 'lucide-react';
import { ChartContainer } from '@/Components/ui/chart';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from 'recharts';

// Mock data for the new dashboard design
const summaryData = [
    {
        crop: 'Wheat',
        production: '125 Tons',
        progress: 12,
        color: '#FBBF24',
        bgColor: '#FEF3C7'
    },
    {
        crop: 'Rice',
        production: '980 Tons',
        progress: 33,
        color: '#4ADE80',
        bgColor: '#D1FAE5'
    }
];

const weatherData = {
    today: {
        temp: '37°/23°',
        condition: 'Rainy - Cloudy',
        icon: 'cloud-sun'
    },
    forecast: [
        { date: '25 June', temp: '29°', condition: 'Thunderstorm' },
        { date: '26 June', temp: '32°', condition: 'Rainy cloudy' },
        { date: '27 June', temp: '39°', condition: 'Semicloudy' },
        { date: '28 June', temp: '42°', condition: 'Sunny - Humidity' }
    ]
};

const predictiveData = [
    { crop: 'Wheat', percentage: 59, color: '#FBBF24' },
    { crop: 'Rice', percentage: 81, color: '#4ADE80' },
    { crop: 'Maize', percentage: 13, color: '#A78BFA' }
];

const harvestingCostData = [
    { name: 'Wheat', value: 76, color: '#D1FAE5' },
    { name: 'Rice', value: 24, color: '#22C55E' }
];

export default function FarmerDashboard({ user }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    // Debug: Log user data
    console.log('FarmerDashboard - User data:', user);

    // Simulate real-time updates
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <FarmerLayout header="Farmer Dashboard" user={user}>
            <div className="space-y-6">

                {/* Top Section - Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-6">
                    {/* Wheat Production Card */}
                    <Card className="bg-[#FEF3C7] border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-[#1F2937] font-semibold text-base mb-1">Wheat</h3>
                                    <p className="text-[#6B7280] text-sm mb-1">Total production</p>
                                    <div className="text-[#000000] font-bold text-[28px]">125 Tons</div>
                                </div>
                                <div className="relative w-12 h-12">
                                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#E5E7EB"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#60A5FA"
                                            strokeWidth="3"
                                            strokeDasharray={`${12}, 100`}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[#1F2937] font-semibold text-xs">12%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Rice Production Card */}
                    <Card className="bg-[#D1FAE5] border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-[#1F2937] font-semibold text-base mb-1">Rice</h3>
                                    <p className="text-[#6B7280] text-sm mb-1">Total production</p>
                                    <div className="text-[#000000] font-bold text-[28px]">980 Tons</div>
                                </div>
                                <div className="relative w-12 h-12">
                                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#E5E7EB"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#4ADE80"
                                            strokeWidth="3"
                                            strokeDasharray={`${33}, 100`}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[#1F2937] font-semibold text-xs">33%</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Weather Forecast Section */}
                    <div className="lg:col-span-1 space-y-4">
                        
                        {/* Today's Weather Card */}
                        <Card className="bg-[#D1FAE5] border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <Cloud className="w-12 h-12 text-[#1F2937]" />
                                            <Sun className="w-6 h-6 text-yellow-500 absolute -top-1 -right-1" />
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-2 mb-1">
                                                <span className="text-[#1F2937] font-semibold text-base">Today</span>
                                                <span className="text-[#1F2937] font-bold text-2xl">37°</span>
                                                <span className="text-[#1F2937] text-sm">/23</span>
                                            </div>
                                            <div className="text-[#1F2937] text-sm">Rainy - Cloudy</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Thermometer className="w-8 h-8 text-red-500" />
                                        <Sun className="w-6 h-6 text-yellow-500" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Four-Day Forecast Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {weatherData.forecast.map((day, index) => (
                                <Card key={index} className="bg-white border border-gray-200 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                                    <CardContent className="p-4 text-center">
                                        <div className="text-[#1F2937] text-sm mb-1">{day.date}</div>
                                        <div className="text-[#1F2937] font-bold text-xl mb-1">{day.temp}</div>
                                        <div className="text-[#1F2937] text-sm">{day.condition}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Section - Farm Illustration */}
                <Card className="border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                    <CardContent className="p-6">
                        <div className="text-center">
                            <h3 className="text-foreground font-semibold text-lg mb-4">Manage your farm (Illustration)</h3>
                            <div className="relative h-48 rounded-lg overflow-hidden">
                                <img
                                    src="/images/illus.jpg"
                                    alt="Farm Management Illustration"
                                    className="w-1/2 h-full object-cover"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Bottom Section - Predictive Analysis & Harvesting Cost */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Predictive Analysis Cards */}
                    <div className="lg:col-span-3">
                        <h3 className="text-foreground font-semibold text-lg mb-4">Predictive analysis</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* January '22 Card */}
                            <Card className="bg-card border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                                <CardContent className="p-6">
                                    <h4 className="text-foreground font-semibold text-base mb-4">January '22</h4>
                                    <div className="space-y-3">
                                        {predictiveData.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-muted-foreground text-sm">{item.crop}</span>
                                                    <span className="text-foreground font-semibold text-sm">{item.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-muted rounded-full h-2">
                                                    <div
                                                        className="h-2 rounded-full"
                                                        style={{
                                                            width: `${item.percentage}%`,
                                                            backgroundColor: item.color
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* February '22 Card */}
                            <Card className="bg-[#FEF3C7] border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                                <CardContent className="p-6">
                                    <h4 className="text-[#1F2937] font-semibold text-base mb-4">February '22</h4>
                                    <div className="space-y-3">
                                        {predictiveData.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-[#6B7280] text-sm">{item.crop}</span>
                                                    <span className="text-[#1F2937] font-semibold text-sm">{item.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                                                    <div
                                                        className="h-2 rounded-full"
                                                        style={{
                                                            width: `${item.percentage}%`,
                                                            backgroundColor: item.color
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* March '22 Card */}
                            <Card className="bg-[#D1FAE5] border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                                <CardContent className="p-6">
                                    <h4 className="text-[#1F2937] font-semibold text-base mb-4">March '22</h4>
                                    <div className="space-y-3">
                                        {predictiveData.map((item, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-[#6B7280] text-sm">{item.crop}</span>
                                                    <span className="text-[#1F2937] font-semibold text-sm">{item.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                                                    <div
                                                        className="h-2 rounded-full"
                                                        style={{
                                                            width: `${item.percentage}%`,
                                                            backgroundColor: item.color
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Harvesting Cost Card */}
                    <Card className="bg-[#D1FAE5] border-0 shadow-[0px_4px_15px_rgba(0,0,0,0.06)]">
                        <CardContent className="p-6">
                            <h4 className="text-[#1F2937] font-semibold text-base mb-4">Harvesting Cost</h4>
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between">
                                    <span className="text-[#6B7280] text-sm">Wheat</span>
                                    <span className="text-[#1F2937] font-semibold">$76K</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[#6B7280] text-sm">Rice</span>
                                    <span className="text-[#1F2937] font-semibold">$24K</span>
                                </div>
                            </div>
                            <Separator className="my-3" />
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[#6B7280] text-sm">Total estimation</span>
                                <span className="text-[#000000] font-bold text-[28px]">$100K</span>
                            </div>

                            {/* Pie Chart */}
                            <div className="flex justify-center">
                                <div className="relative w-24 h-24">
                                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#22C55E"
                                            strokeWidth="8"
                                            strokeDasharray="76, 100"
                                        />
                                        <path
                                            d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            fill="none"
                                            stroke="#D1FAE5"
                                            strokeWidth="8"
                                            strokeDasharray="24, 100"
                                            strokeDashoffset="-76"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </FarmerLayout>
    );
}