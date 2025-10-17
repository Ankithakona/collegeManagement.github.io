import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  TrendingUp,
  Settings,
  BarChart3,
  Calendar,
  Shield,
  Database,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import vitLogo from "@/assets/vit-logo.png";

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const systemStats = {
    totalStudents: 1250,
    totalProfessors: 85,
    totalCourses: 120,
    activeSessions: 45
  };

  const recentUsers = [
    { id: "20CS001", name: "John Doe", type: "Student", status: "Active", joined: "2024-01-15" },
    { id: "PROF015", name: "Dr. Sarah Johnson", type: "Professor", status: "Active", joined: "2024-01-10" },
    { id: "20CS002", name: "Jane Smith", type: "Student", status: "Inactive", joined: "2024-01-08" },
    { id: "PROF016", name: "Prof. Michael Brown", type: "Professor", status: "Active", joined: "2024-01-05" }
  ];

  const courses = [
    { code: "CS301", name: "Data Structures", students: 45, professor: "Dr. Johnson", status: "Active" },
    { code: "CS302", name: "Algorithms", students: 38, professor: "Prof. Brown", status: "Active" },
    { code: "CS303", name: "Database Systems", students: 42, professor: "Dr. Smith", status: "Active" },
    { code: "CS304", name: "Computer Networks", students: 35, professor: "Prof. Davis", status: "Inactive" }
  ];

  const systemAlerts = [
    { type: "warning", message: "Server maintenance scheduled for tonight", time: "2 hours ago" },
    { type: "info", message: "New semester registration opened", time: "5 hours ago" },
    { type: "success", message: "Backup completed successfully", time: "1 day ago" },
    { type: "error", message: "Payment gateway issue resolved", time: "2 days ago" }
  ];

  const monthlyStats = [
    { month: "Jan", students: 1150, professors: 80, courses: 115 },
    { month: "Feb", students: 1200, professors: 82, courses: 118 },
    { month: "Mar", students: 1250, professors: 85, courses: 120 }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Logo */}
      <div 
        className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${vitLogo})` }}
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBack}
                className="hover:bg-accent/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-accent font-heading">Admin Portal</h1>
                <p className="text-muted-foreground">System Management Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-accent/10 text-accent">
                Administrator
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium">Admin Panel</p>
                <p className="text-xs text-muted-foreground">Super User</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "users", label: "User Management", icon: Users },
              { id: "courses", label: "Course Management", icon: BookOpen },
              { id: "analytics", label: "Analytics", icon: TrendingUp },
              { id: "system", label: "System Health", icon: Database },
              { id: "settings", label: "Settings", icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-accent text-accent"
                    : "border-transparent text-muted-foreground hover:text-accent"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                      <p className="text-2xl font-bold text-primary">{systemStats.totalStudents}</p>
                    </div>
                    <div className="bg-gradient-primary p-3 rounded-full">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Professors</p>
                      <p className="text-2xl font-bold text-secondary">{systemStats.totalProfessors}</p>
                    </div>
                    <div className="bg-gradient-secondary p-3 rounded-full">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                      <p className="text-2xl font-bold text-accent">{systemStats.totalCourses}</p>
                    </div>
                    <div className="bg-gradient-accent p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Sessions</p>
                      <p className="text-2xl font-bold text-success">{systemStats.activeSessions}</p>
                    </div>
                    <div className="bg-success p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{user.name}</h4>
                          <p className="text-sm text-muted-foreground">{user.type} • {user.id}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                            {user.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{user.joined}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle>System Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {systemAlerts.map((alert, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                        <div className={`p-1 rounded-full ${
                          alert.type === 'error' ? 'bg-destructive/20' :
                          alert.type === 'warning' ? 'bg-warning/20' :
                          alert.type === 'success' ? 'bg-success/20' : 'bg-primary/20'
                        }`}>
                          <AlertCircle className={`h-4 w-4 ${
                            alert.type === 'error' ? 'text-destructive' :
                            alert.type === 'warning' ? 'text-warning' :
                            alert.type === 'success' ? 'text-success' : 'text-primary'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{alert.message}</p>
                          <p className="text-xs text-muted-foreground">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">User Management</h2>
              <div className="space-x-2">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Add User
                </Button>
                <Button>
                  Import Users
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">ID</th>
                        <th className="text-left p-3">Name</th>
                        <th className="text-left p-3">Type</th>
                        <th className="text-left p-3">Status</th>
                        <th className="text-left p-3">Joined</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-3 font-medium">{user.id}</td>
                          <td className="p-3">{user.name}</td>
                          <td className="p-3">
                            <Badge variant="outline">{user.type}</Badge>
                          </td>
                          <td className="p-3">
                            <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="p-3 text-muted-foreground">{user.joined}</td>
                          <td className="p-3">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">Edit</Button>
                              <Button size="sm" variant="outline">View</Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <div className="space-x-2">
                <Button variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
                <Button>
                  Import Courses
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        <Badge variant="outline">{course.code}</Badge>
                      </div>
                      <Badge variant={course.status === "Active" ? "default" : "secondary"}>
                        {course.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p><span className="font-medium">Students:</span> {course.students}</p>
                      <p><span className="font-medium">Professor:</span> {course.professor}</p>
                      <div className="flex justify-between items-center mt-4">
                        <Button size="sm" variant="outline">
                          Edit Course
                        </Button>
                        <Button size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">System Analytics</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyStats.map((stat, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="font-medium">{stat.month} 2024</span>
                        <div className="text-right text-sm">
                          <p>Students: {stat.students}</p>
                          <p>Professors: {stat.professors}</p>
                          <p>Courses: {stat.courses}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>System Uptime</span>
                      <Badge className="bg-success">99.9%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>User Satisfaction</span>
                      <Badge className="bg-primary">4.8/5</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Course Completion Rate</span>
                      <Badge className="bg-secondary">92%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Response Time</span>
                      <Badge className="bg-accent">0.3s</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "system" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">System Health</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Server Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { service: "Web Server", status: "online", uptime: "99.9%" },
                      { service: "Database", status: "online", uptime: "99.8%" },
                      { service: "File Storage", status: "online", uptime: "99.7%" },
                      { service: "Email Service", status: "maintenance", uptime: "98.5%" }
                    ].map((service, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="font-medium">{service.service}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant={service.status === "online" ? "default" : "secondary"}>
                            {service.status === "online" ? (
                              <>
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Online
                              </>
                            ) : (
                              <>
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Maintenance
                              </>
                            )}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{service.uptime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resource Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>CPU Usage</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Memory Usage</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Storage Usage</span>
                        <span>32%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">System Settings</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    System Configuration
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Database className="h-4 w-4 mr-2" />
                    Backup Settings
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="h-4 w-4 mr-2" />
                    Security Settings
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Academic Calendar
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    Clear Cache
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Generate Reports
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Export Data
                  </Button>
                  <Button className="w-full justify-start text-destructive" variant="outline">
                    System Maintenance Mode
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;