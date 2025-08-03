import FarmerLayout from '@/Layouts/FarmerLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Scissors, Calendar, TrendingUp, Package } from 'lucide-react';

export default function HarvestTracking() {
    return (
        <FarmerLayout header="Harvest Tracking">
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-boeeeeeld text-foreground">Harvest Tracking</h2>
                        <p className="text-muted-foreground">Track and manage your harvest data</p>
                    </div>
                    <Button>
                        <Scissors className="mr-2 h-4 w-4" />
                        Record Harvest
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Harvest</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2,400 kg</div>
                            <p className="text-xs text-muted-foreground">
                                This season
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Harvest Sessions</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">
                                This month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Yield</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">200 kg</div>
                            <p className="text-xs text-muted-foreground">
                                Per session
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
                            <Scissors className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8.5/10</div>
                            <p className="text-xs text-muted-foreground">
                                Average grade
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Harvest Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center py-12">
                            <Scissors className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium text-foreground mb-2">Harvest Tracking Coming Soon</h3>
                            <p className="text-muted-foreground mb-4">
                                Track your harvest data, monitor quality, and manage logistics all in one place.
                            </p>
                            <Button>
                                <Scissors className="mr-2 h-4 w-4" />
                                Start Recording Harvest
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </FarmerLayout>
    );
}
