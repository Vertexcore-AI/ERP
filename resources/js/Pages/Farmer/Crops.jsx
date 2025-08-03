import { useState } from 'react';
import FarmerLayout from '@/Layouts/FarmerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Progress } from '@/Components/ui/progress';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { 
    Plus,
    Search,
    Filter,
    Calendar,
    Droplets,
    Thermometer,
    Sun,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Sprout,
    Scissors,
    Package,
    TrendingUp,
    Clock,
    MapPin
} from 'lucide-react';
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
    ResponsiveContainer
} from 'recharts';

// Mock data for crop management
const mockCrops = [
    {
        id: 1,
        name: 'Rice (Basmati)',
        variety: 'Basmati 370',
        area: 2.5,
        plantedDate: '2024-01-15',
        expectedHarvest: '2024-04-15',
        status: 'Growing',
        progress: 65,
        health: 'Good',
        yield: 1800,
        location: 'Field A',
        soilType: 'Clay Loam',
        irrigationType: 'Flood',
        lastIrrigation: '2024-03-10',
        nextIrrigation: '2024-03-15',
        fertilizerApplied: 'NPK 20-20-20',
        lastFertilizer: '2024-02-28',
        nextFertilizer: '2024-03-20',
        pests: 'Minor',
        diseases: 'None',
        notes: 'Crop showing good growth, no major issues detected'
    },
    {
        id: 2,
        name: 'Corn (Sweet)',
        variety: 'Golden Bantam',
        area: 1.8,
        plantedDate: '2024-01-20',
        expectedHarvest: '2024-04-20',
        status: 'Harvest Ready',
        progress: 95,
        health: 'Excellent',
        yield: 1200,
        location: 'Field B',
        soilType: 'Sandy Loam',
        irrigationType: 'Drip',
        lastIrrigation: '2024-03-12',
        nextIrrigation: '2024-03-18',
        fertilizerApplied: 'NPK 15-15-15',
        lastFertilizer: '2024-03-05',
        nextFertilizer: 'N/A',
        pests: 'None',
        diseases: 'None',
        notes: 'Ready for harvest, excellent yield expected'
    },
    {
        id: 3,
        name: 'Tomatoes',
        variety: 'Roma',
        area: 0.8,
        plantedDate: '2024-02-01',
        expectedHarvest: '2024-05-01',
        status: 'Growing',
        progress: 45,
        health: 'Good',
        yield: 600,
        location: 'Greenhouse 1',
        soilType: 'Potting Mix',
        irrigationType: 'Drip',
        lastIrrigation: '2024-03-13',
        nextIrrigation: '2024-03-14',
        fertilizerApplied: 'NPK 10-10-10',
        lastFertilizer: '2024-03-08',
        nextFertilizer: '2024-03-22',
        pests: 'Minor',
        diseases: 'None',
        notes: 'Plants healthy, flowering stage'
    }
];

const mockGrowthData = [
    { day: 1, height: 5, leaves: 2 },
    { day: 7, height: 12, leaves: 4 },
    { day: 14, height: 25, leaves: 6 },
    { day: 21, height: 40, leaves: 8 },
    { day: 28, height: 60, leaves: 10 },
    { day: 35, height: 85, leaves: 12 },
    { day: 42, height: 110, leaves: 14 },
    { day: 49, height: 130, leaves: 16 },
    { day: 56, height: 145, leaves: 18 },
    { day: 63, height: 155, leaves: 20 },
];

const mockEnvironmentalData = [
    { time: '06:00', temperature: 22, humidity: 85, soilMoisture: 75 },
    { time: '09:00', temperature: 26, humidity: 70, soilMoisture: 72 },
    { time: '12:00', temperature: 32, humidity: 55, soilMoisture: 68 },
    { time: '15:00', temperature: 30, humidity: 60, soilMoisture: 65 },
    { time: '18:00', temperature: 28, humidity: 75, soilMoisture: 70 },
    { time: '21:00', temperature: 24, humidity: 80, soilMoisture: 73 },
];

export default function CropManagement() {
    const [selectedCrop, setSelectedCrop] = useState(mockCrops[0]);
    const [searchTerm, setSearchTerm] = useState('');

    const getStatusColor = (status) => {
        switch (status) {
            case 'Growing':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'Harvest Ready':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Planted':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getHealthColor = (health) => {
        switch (health) {
            case 'Excellent':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'Good':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'Fair':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Poor':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const filteredCrops = mockCrops.filter(crop =>
        crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.variety.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crop.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <FarmerLayout header="Crop Management">
            <div className="space-y-6">
                {/* Header with Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Crop Management</h2>
                        <p className="text-muted-foreground">Monitor and manage your crops</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add New Crop
                        </Button>
                    </div>
                </div>

                {/* Search and Filters */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search crops by name, variety, or location..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <Select defaultValue="all">
                                <SelectTrigger className="w-full sm:w-48">
                                    <SelectValue placeholder="Filter by status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="growing">Growing</SelectItem>
                                    <SelectItem value="harvest-ready">Harvest Ready</SelectItem>
                                    <SelectItem value="planted">Planted</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Crop List */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Crops ({filteredCrops.length})</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {filteredCrops.map((crop) => (
                                        <div
                                            key={crop.id}
                                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                                selectedCrop.id === crop.id
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-border hover:bg-accent'
                                            }`}
                                            onClick={() => setSelectedCrop(crop)}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-medium">{crop.name}</h3>
                                                <Badge className={getStatusColor(crop.status)}>
                                                    {crop.status}
                                                </Badge>
                                            </div>
                                            <div className="text-sm text-muted-foreground mb-2">
                                                {crop.variety} • {crop.area} hectares
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm">
                                                    <span className="text-muted-foreground">Progress:</span>
                                                    <span className="ml-1 font-medium">{crop.progress}%</span>
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {crop.location}
                                                </div>
                                            </div>
                                            <Progress value={crop.progress} className="mt-2" />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Crop Details */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="overview" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="growth">Growth Tracking</TabsTrigger>
                                <TabsTrigger value="environment">Environment</TabsTrigger>
                                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                            </TabsList>

                            <TabsContent value="overview" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{selectedCrop.name} - {selectedCrop.variety}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-medium mb-2">Basic Information</h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Area:</span>
                                                            <span>{selectedCrop.area} hectares</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Location:</span>
                                                            <span>{selectedCrop.location}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Soil Type:</span>
                                                            <span>{selectedCrop.soilType}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Health:</span>
                                                            <Badge className={getHealthColor(selectedCrop.health)}>
                                                                {selectedCrop.health}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium mb-2">Timeline</h4>
                                                    <div className="space-y-2 text-sm">
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Planted:</span>
                                                            <span>{selectedCrop.plantedDate}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Expected Harvest:</span>
                                                            <span>{selectedCrop.expectedHarvest}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Expected Yield:</span>
                                                            <span>{selectedCrop.yield} kg</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="font-medium mb-2">Current Status</h4>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <div className="flex justify-between text-sm mb-1">
                                                                <span>Growth Progress</span>
                                                                <span>{selectedCrop.progress}%</span>
                                                            </div>
                                                            <Progress value={selectedCrop.progress} />
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                                            <div className="text-center p-3 bg-accent rounded-lg">
                                                                <div className="font-medium">{selectedCrop.pests}</div>
                                                                <div className="text-muted-foreground">Pest Level</div>
                                                            </div>
                                                            <div className="text-center p-3 bg-accent rounded-lg">
                                                                <div className="font-medium">{selectedCrop.diseases}</div>
                                                                <div className="text-muted-foreground">Diseases</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h4 className="font-medium mb-2">Notes</h4>
                                                    <p className="text-sm text-muted-foreground bg-accent p-3 rounded-lg">
                                                        {selectedCrop.notes}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="growth" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Growth Tracking</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-80">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={mockGrowthData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="day" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line 
                                                        type="monotone" 
                                                        dataKey="height" 
                                                        stroke="#10B981" 
                                                        name="Height (cm)" 
                                                    />
                                                    <Line 
                                                        type="monotone" 
                                                        dataKey="leaves" 
                                                        stroke="#3B82F6" 
                                                        name="Leaves Count" 
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="environment" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Environmental Monitoring</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-80">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={mockEnvironmentalData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="time" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line 
                                                        type="monotone" 
                                                        dataKey="temperature" 
                                                        stroke="#EF4444" 
                                                        name="Temperature (°C)" 
                                                    />
                                                    <Line 
                                                        type="monotone" 
                                                        dataKey="humidity" 
                                                        stroke="#3B82F6" 
                                                        name="Humidity (%)" 
                                                    />
                                                    <Line 
                                                        type="monotone" 
                                                        dataKey="soilMoisture" 
                                                        stroke="#8B5CF6" 
                                                        name="Soil Moisture (%)" 
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="schedule" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Maintenance Schedule</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-3">
                                                    <h4 className="font-medium">Irrigation Schedule</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                                                            <div>
                                                                <div className="font-medium">Last Irrigation</div>
                                                                <div className="text-sm text-muted-foreground">{selectedCrop.lastIrrigation}</div>
                                                            </div>
                                                            <Droplets className="h-5 w-5 text-blue-500" />
                                                        </div>
                                                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                                                            <div>
                                                                <div className="font-medium">Next Irrigation</div>
                                                                <div className="text-sm text-muted-foreground">{selectedCrop.nextIrrigation}</div>
                                                            </div>
                                                            <Clock className="h-5 w-5 text-yellow-500" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <h4 className="font-medium">Fertilizer Schedule</h4>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                                                            <div>
                                                                <div className="font-medium">Last Fertilizer</div>
                                                                <div className="text-sm text-muted-foreground">{selectedCrop.lastFertilizer}</div>
                                                            </div>
                                                            <Package className="h-5 w-5 text-green-500" />
                                                        </div>
                                                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                                                            <div>
                                                                <div className="font-medium">Next Fertilizer</div>
                                                                <div className="text-sm text-muted-foreground">{selectedCrop.nextFertilizer}</div>
                                                            </div>
                                                            <Clock className="h-5 w-5 text-yellow-500" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t">
                                                <h4 className="font-medium mb-3">Quick Actions</h4>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" size="sm">
                                                        <Droplets className="mr-2 h-4 w-4" />
                                                        Record Irrigation
                                                    </Button>
                                                    <Button variant="outline" size="sm">
                                                        <Package className="mr-2 h-4 w-4" />
                                                        Record Fertilizer
                                                    </Button>
                                                    <Button variant="outline" size="sm">
                                                        <Scissors className="mr-2 h-4 w-4" />
                                                        Record Harvest
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </FarmerLayout>
    );
} 