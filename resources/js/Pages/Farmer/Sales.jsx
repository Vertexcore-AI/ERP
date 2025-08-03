import FarmerLayout from '@/Layouts/FarmerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { DollarSign, TrendingUp, TrendingDown, ShoppingCart, FileText } from 'lucide-react';

export default function SalesFinance() {
    return (
        <FarmerLayout header="Sales & Finance">
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Sales & Finance</h2>
                        <p className="text-muted-foreground">Track your sales and financial performance</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <FileText className="mr-2 h-4 w-4" />
                            Generate Invoice
                        </Button>
                        <Button>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Record Sale
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Rs. 180,000</div>
                            <p className="text-xs text-muted-foreground">
                                <span className="text-green-600">+12%</span> from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-muted-foreground">
                                This month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Sale</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Rs. 7,500</div>
                            <p className="text-xs text-muted-foreground">
                                Per transaction
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                            <TrendingDown className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">65%</div>
                            <p className="text-xs text-muted-foreground">
                                Net profit
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Financial Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center py-12">
                            <DollarSign className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium text-foreground mb-2">Sales & Finance Coming Soon</h3>
                            <p className="text-muted-foreground mb-4">
                                Track your sales, manage invoices, and monitor financial performance with detailed analytics.
                            </p>
                            <div className="flex gap-2 justify-center">
                                <Button>
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Record Sale
                                </Button>
                                <Button variant="outline">
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Reports
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </FarmerLayout>
    );
}
