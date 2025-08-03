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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { 
    Plus,
    Search,
    Filter,
    Package,
    AlertTriangle,
    CheckCircle,
    XCircle,
    TrendingUp,
    TrendingDown,
    Minus,
    DollarSign,
    Calendar,
    Clock,
    MapPin,
    Truck,
    Warehouse,
    ShoppingCart,
    FileText,
    Download
} from 'lucide-react';
import {
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

// Mock data for inventory management
const mockInventory = [
    {
        id: 1,
        name: 'NPK Fertilizer 20-20-20',
        category: 'Fertilizers',
        quantity: 150,
        unit: 'kg',
        minStock: 50,
        maxStock: 500,
        currentStock: 25,
        unitPrice: 120,
        supplier: 'Agro Supplies Ltd',
        lastRestocked: '2024-02-15',
        expiryDate: '2025-12-31',
        location: 'Warehouse A',
        status: 'critical'
    },
    {
        id: 2,
        name: 'Organic Pesticide',
        category: 'Pesticides',
        quantity: 20,
        unit: 'L',
        minStock: 10,
        maxStock: 100,
        currentStock: 5,
        unitPrice: 450,
        supplier: 'Green Solutions',
        lastRestocked: '2024-03-01',
        expiryDate: '2024-08-31',
        location: 'Warehouse B',
        status: 'critical'
    },
    {
        id: 3,
        name: 'Rice Seeds (Basmati)',
        category: 'Seeds',
        quantity: 100,
        unit: 'kg',
        minStock: 25,
        maxStock: 200,
        currentStock: 80,
        unitPrice: 85,
        supplier: 'Seed Bank Co',
        lastRestocked: '2024-01-20',
        expiryDate: '2025-06-30',
        location: 'Warehouse A',
        status: 'good'
    },
    {
        id: 4,
        name: 'Drip Irrigation Tubes',
        category: 'Equipment',
        quantity: 500,
        unit: 'm',
        minStock: 100,
        maxStock: 1000,
        currentStock: 200,
        unitPrice: 15,
        supplier: 'Irrigation Systems',
        lastRestocked: '2024-02-28',
        expiryDate: 'N/A',
        location: 'Equipment Shed',
        status: 'warning'
    },
    {
        id: 5,
        name: 'Soil Testing Kit',
        category: 'Tools',
        quantity: 5,
        unit: 'units',
        minStock: 2,
        maxStock: 10,
        currentStock: 3,
        unitPrice: 2500,
        supplier: 'Lab Equipment Co',
        lastRestocked: '2024-01-10',
        expiryDate: 'N/A',
        location: 'Tool Shed',
        status: 'good'
    },
    {
        id: 6,
        name: 'Corn Seeds (Sweet)',
        category: 'Seeds',
        quantity: 50,
        unit: 'kg',
        minStock: 20,
        maxStock: 150,
        currentStock: 15,
        unitPrice: 95,
        supplier: 'Seed Bank Co',
        lastRestocked: '2024-02-10',
        expiryDate: '2025-05-31',
        location: 'Warehouse A',
        status: 'warning'
    }
];

const mockUsageData = [
    { month: 'Jan', fertilizers: 80, pesticides: 15, seeds: 30, equipment: 50 },
    { month: 'Feb', fertilizers: 120, pesticides: 25, seeds: 45, equipment: 75 },
    { month: 'Mar', fertilizers: 90, pesticides: 20, seeds: 35, equipment: 60 },
    { month: 'Apr', fertilizers: 150, pesticides: 30, seeds: 60, equipment: 100 },
    { month: 'May', fertilizers: 110, pesticides: 18, seeds: 40, equipment: 80 },
    { month: 'Jun', fertilizers: 130, pesticides: 22, seeds: 50, equipment: 90 },
];

const mockCategoryData = [
    { name: 'Fertilizers', value: 35, color: '#10B981' },
    { name: 'Seeds', value: 25, color: '#3B82F6' },
    { name: 'Pesticides', value: 20, color: '#F59E0B' },
    { name: 'Equipment', value: 15, color: '#8B5CF6' },
    { name: 'Tools', value: 5, color: '#EF4444' },
];

const mockRecentTransactions = [
    { id: 1, type: 'purchase', item: 'NPK Fertilizer', quantity: '100kg', amount: 'Rs. 12,000', date: '2024-03-10', status: 'completed' },
    { id: 2, type: 'usage', item: 'Organic Pesticide', quantity: '5L', amount: 'Rs. 2,250', date: '2024-03-08', status: 'completed' },
    { id: 3, type: 'purchase', item: 'Drip Tubes', quantity: '200m', amount: 'Rs. 3,000', date: '2024-03-05', status: 'completed' },
    { id: 4, type: 'usage', item: 'Rice Seeds', quantity: '20kg', amount: 'Rs. 1,700', date: '2024-03-03', status: 'completed' },
    { id: 5, type: 'purchase', item: 'Soil Testing Kit', quantity: '1 unit', amount: 'Rs. 2,500', date: '2024-03-01', status: 'pending' },
];

export default function InventoryManagement() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const getStatusColor = (status) => {
        switch (status) {
            case 'good':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'warning':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'critical':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
        }
    };

    const getStockPercentage = (current, max) => {
        return Math.round((current / max) * 100);
    };

    const filteredInventory = mockInventory.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const criticalItems = mockInventory.filter(item => item.status === 'critical');
    const warningItems = mockInventory.filter(item => item.status === 'warning');
    const totalValue = mockInventory.reduce((sum, item) => sum + (item.currentStock * item.unitPrice), 0);

    return (
        <FarmerLayout header="Inventory Management">
            <div className="space-y-6">
                {/* Header with Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Inventory Management</h2>
                        <p className="text-muted-foreground">Track and manage your farm supplies</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Item
                        </Button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{mockInventory.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Across {new Set(mockInventory.map(item => item.category)).size} categories
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Rs. {totalValue.toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                Current stock value
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">{criticalItems.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Items need restocking
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
                            <TrendingDown className="h-4 w-4 text-yellow-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-600">{warningItems.length}</div>
                            <p className="text-xs text-muted-foreground">
                                Items running low
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Search and Filters */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search inventory by name, category, or supplier..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-full sm:w-48">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="fertilizers">Fertilizers</SelectItem>
                                    <SelectItem value="pesticides">Pesticides</SelectItem>
                                    <SelectItem value="seeds">Seeds</SelectItem>
                                    <SelectItem value="equipment">Equipment</SelectItem>
                                    <SelectItem value="tools">Tools</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Inventory List */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="list" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="list">Inventory List</TabsTrigger>
                                <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
                            </TabsList>

                            <TabsContent value="list" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Inventory Items ({filteredInventory.length})</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {filteredInventory.map((item) => (
                                                <div key={item.id} className="p-4 border rounded-lg">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div>
                                                            <h3 className="font-medium">{item.name}</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {item.category} • {item.supplier}
                                                            </p>
                                                        </div>
                                                        <Badge className={getStatusColor(item.status)}>
                                                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                                        </Badge>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Current Stock</div>
                                                            <div className="font-medium">
                                                                {item.currentStock} {item.unit}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Min Stock</div>
                                                            <div className="font-medium">{item.minStock} {item.unit}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Unit Price</div>
                                                            <div className="font-medium">Rs. {item.unitPrice}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-muted-foreground">Location</div>
                                                            <div className="font-medium">{item.location}</div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-sm">
                                                            <span>Stock Level</span>
                                                            <span>{getStockPercentage(item.currentStock, item.maxStock)}%</span>
                                                        </div>
                                                        <Progress 
                                                            value={getStockPercentage(item.currentStock, item.maxStock)} 
                                                            className="h-2"
                                                        />
                                                    </div>

                                                    <div className="flex gap-2 mt-3">
                                                        <Button variant="outline" size="sm">
                                                            <ShoppingCart className="mr-2 h-4 w-4" />
                                                            Restock
                                                        </Button>
                                                        <Button variant="outline" size="sm">
                                                            <FileText className="mr-2 h-4 w-4" />
                                                            Details
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="transactions" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Recent Transactions</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Type</TableHead>
                                                    <TableHead>Item</TableHead>
                                                    <TableHead>Quantity</TableHead>
                                                    <TableHead>Amount</TableHead>
                                                    <TableHead>Date</TableHead>
                                                    <TableHead>Status</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {mockRecentTransactions.map((transaction) => (
                                                    <TableRow key={transaction.id}>
                                                        <TableCell>
                                                            <Badge variant={transaction.type === 'purchase' ? 'default' : 'secondary'}>
                                                                {transaction.type}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell>{transaction.item}</TableCell>
                                                        <TableCell>{transaction.quantity}</TableCell>
                                                        <TableCell>{transaction.amount}</TableCell>
                                                        <TableCell>{transaction.date}</TableCell>
                                                        <TableCell>
                                                            <Badge className={transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                                                {transaction.status}
                                                            </Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Analytics and Alerts */}
                    <div className="space-y-6">
                        {/* Category Distribution */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Category Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={mockCategoryData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {mockCategoryData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Usage Trends */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Usage Trends</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={mockUsageData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="fertilizers" fill="#10B981" name="Fertilizers" />
                                            <Bar dataKey="pesticides" fill="#F59E0B" name="Pesticides" />
                                            <Bar dataKey="seeds" fill="#3B82F6" name="Seeds" />
                                            <Bar dataKey="equipment" fill="#8B5CF6" name="Equipment" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Critical Alerts */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Critical Alerts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {criticalItems.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                            <AlertTriangle className="h-5 w-5 text-red-500" />
                                            <div className="flex-1">
                                                <div className="font-medium text-sm">{item.name}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    Only {item.currentStock} {item.unit} remaining
                                                </div>
                                            </div>
                                            <Button size="sm" variant="outline">
                                                Restock
                                            </Button>
                                        </div>
                                    ))}
                                    {criticalItems.length === 0 && (
                                        <div className="text-center py-4 text-muted-foreground">
                                            No critical alerts
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full justify-start">
                                        <ShoppingCart className="mr-2 h-4 w-4" />
                                        Place Order
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Truck className="mr-2 h-4 w-4" />
                                        Track Delivery
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Warehouse className="mr-2 h-4 w-4" />
                                        Check Storage
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Generate Report
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </FarmerLayout>
    );
} 