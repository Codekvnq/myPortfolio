import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  TreePine, 
  Plus, 
  Users, 
  Edit, 
  Trash2, 
  ArrowUpDown, 
  UserPlus, 
  Settings, 
  Bell, 
  BarChart3, 
  Download, 
  Upload, 
  Search, 
  Palette, 
  CreditCard, 
  HelpCircle,
  User
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <TreePine className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">FamilyVerse</h1>
                <p className="text-sm text-muted-foreground">Welcome back, John • Premium Member</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search family members..." 
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="heritage" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Family Tree
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Add Family Member
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Invite Members
                </Button>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Manage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Families
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Sort Families
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Reports & Analytics
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Import / Export
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Palette className="h-4 w-4 mr-2" />
                  Theme Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Subscriptions
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help & Support
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Family Members</p>
                      <p className="text-2xl font-bold text-foreground">247</p>
                    </div>
                    <Users className="h-8 w-8 text-family-sage" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Nationwide Matches</p>
                      <p className="text-2xl font-bold text-foreground">18</p>
                    </div>
                    <Search className="h-8 w-8 text-trust-blue" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Family Trees</p>
                      <p className="text-2xl font-bold text-foreground">12</p>
                    </div>
                    <TreePine className="h-8 w-8 text-heritage-brown" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Generations</p>
                      <p className="text-2xl font-bold text-foreground">8</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Premium Features Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Nationwide Connections */}
              <Card className="shadow-card border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl flex items-center">
                      <Search className="h-5 w-5 mr-2 text-primary" />
                      Nationwide Connections
                    </CardTitle>
                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Premium</div>
                  </div>
                  <CardDescription>Discover potential relatives across the country</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Sarah Johnson", location: "California", confidence: "92%", relation: "Potential 3rd cousin" },
                      { name: "Michael Smith", location: "Texas", confidence: "87%", relation: "Potential 4th cousin" },
                      { name: "Emma Davis", location: "Florida", confidence: "79%", relation: "Potential 5th cousin" },
                    ].map((match, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-foreground">{match.name}</h4>
                          <p className="text-sm text-muted-foreground">{match.location} • {match.relation}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary">{match.confidence} match</div>
                          <Button variant="ghost" size="sm" className="mt-1">
                            Connect
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Analytics Dashboard */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Family Analytics
                  </CardTitle>
                  <CardDescription>Insights about your family data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Most common surname</span>
                      <span className="font-semibold">Johnson (45 members)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Oldest generation</span>
                      <span className="font-semibold">Born 1892</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Geographic spread</span>
                      <span className="font-semibold">23 states</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Data completeness</span>
                      <span className="font-semibold text-primary">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Recent Family Trees</CardTitle>
                <CardDescription>Your most recently updated family trees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Johnson Family Tree", members: 45, updated: "2 hours ago", status: "Premium" },
                    { name: "Smith Ancestry", members: 32, updated: "1 day ago", status: "Basic" },
                    { name: "Williams Heritage", members: 28, updated: "3 days ago", status: "Premium" },
                  ].map((tree, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <TreePine className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-foreground">{tree.name}</h3>
                            {tree.status === "Premium" && (
                              <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Premium</div>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{tree.members} members • Updated {tree.updated}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Premium Upgrade Prompt */}
            <Card className="shadow-card border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-primary" />
                  Unlock Premium Features
                </CardTitle>
                <CardDescription>Get access to advanced family discovery tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Search className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Nationwide Matching</h4>
                      <p className="text-sm text-muted-foreground">Connect with relatives across all 50 states</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Advanced Analytics</h4>
                      <p className="text-sm text-muted-foreground">Detailed insights and historical reports</p>
                    </div>
                  </div>
                </div>
                <Button variant="heritage" className="w-full sm:w-auto">
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}