import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Upload, 
  FileText,
  GraduationCap,
  Clock,
  BookOpen,
  CheckCircle
} from "lucide-react";
import vitLogo from "@/assets/vit-logo.png";

interface ProfessorDashboardProps {
  onBack: () => void;
}

const ProfessorDashboard = ({ onBack }: ProfessorDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const professorData = {
    name: "Dr. Sarah Johnson",
    id: "PROF001",
    department: "Computer Science",
    experience: "10 years"
  };

  const classes = [
    { 
      code: "CS301", 
      name: "Data Structures", 
      students: 45, 
      semester: "6th",
      schedule: "Mon, Wed, Fri - 9:00 AM"
    },
    { 
      code: "CS302", 
      name: "Algorithms", 
      students: 38, 
      semester: "6th",
      schedule: "Tue, Thu - 10:00 AM"
    },
    { 
      code: "CS101", 
      name: "Programming Fundamentals", 
      students: 52, 
      semester: "2nd",
      schedule: "Mon, Wed - 2:00 PM"
    }
  ];

  const students = [
    { id: "20CS001", name: "John Doe", cgpa: "8.5", attendance: "92%" },
    { id: "20CS002", name: "Jane Smith", cgpa: "9.1", attendance: "88%" },
    { id: "20CS003", name: "Mike Johnson", cgpa: "7.8", attendance: "95%" },
    { id: "20CS004", name: "Sarah Wilson", cgpa: "8.9", attendance: "90%" }
  ];

  const materials = [
    { title: "Week 1 - Introduction to Data Structures", type: "Lecture Notes", uploaded: "2024-01-05" },
    { title: "Lab Assignment 1", type: "Assignment", uploaded: "2024-01-08" },
    { title: "Binary Trees Tutorial", type: "Video", uploaded: "2024-01-10" }
  ];

  const timetable = [
    { day: "Monday", time: "9:00-10:00", subject: "Data Structures", room: "Lab 1", class: "CS301" },
    { day: "Monday", time: "14:00-15:00", subject: "Programming Fundamentals", room: "Room 201", class: "CS101" },
    { day: "Tuesday", time: "10:00-11:00", subject: "Algorithms", room: "Room 301", class: "CS302" },
    { day: "Wednesday", time: "9:00-10:00", subject: "Data Structures", room: "Lab 1", class: "CS301" }
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
                className="hover:bg-secondary/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-secondary font-heading">Professor Portal</h1>
                <p className="text-muted-foreground">Welcome, {professorData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-secondary/10 text-secondary">
                {professorData.department}
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium">{professorData.id}</p>
                <p className="text-xs text-muted-foreground">{professorData.experience}</p>
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
              { id: "overview", label: "Overview", icon: GraduationCap },
              { id: "classes", label: "My Classes", icon: BookOpen },
              { id: "students", label: "Students", icon: Users },
              { id: "timetable", label: "Timetable", icon: Calendar },
              { id: "materials", label: "Materials", icon: FileText },
              { id: "attendance", label: "Attendance", icon: CheckCircle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-secondary text-secondary"
                    : "border-transparent text-muted-foreground hover:text-secondary"
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
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-secondary" />
                    <span>Teaching Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-secondary text-white p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Total Classes</h3>
                      <p className="text-2xl font-bold">{classes.length}</p>
                    </div>
                    <div className="bg-gradient-primary text-white p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Total Students</h3>
                      <p className="text-2xl font-bold">{classes.reduce((sum, cls) => sum + cls.students, 0)}</p>
                    </div>
                    <div className="bg-gradient-accent text-white p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Materials Uploaded</h3>
                      <p className="text-2xl font-bold">{materials.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timetable.filter(item => item.day === "Monday").map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{item.subject}</h4>
                          <p className="text-sm text-muted-foreground">{item.class} • {item.room}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{item.time}</p>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            Upcoming
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Material
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Mark Attendance
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Grade Assignments
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Uploaded new material for CS301</p>
                    <p>• Graded 15 assignments</p>
                    <p>• Updated attendance for CS302</p>
                    <p>• Created new assignment</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "classes" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{cls.name}</CardTitle>
                  <Badge variant="outline">{cls.code}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><span className="font-medium">Students:</span> {cls.students}</p>
                    <p><span className="font-medium">Semester:</span> {cls.semester}</p>
                    <p><span className="font-medium">Schedule:</span> {cls.schedule}</p>
                    <div className="flex justify-between items-center mt-4">
                      <Button size="sm" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        View Students
                      </Button>
                      <Button size="sm">
                        Manage Class
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "students" && (
          <Card>
            <CardHeader>
              <CardTitle>Student Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Student ID</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">CGPA</th>
                      <th className="text-left p-3">Attendance</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">{student.id}</td>
                        <td className="p-3">{student.name}</td>
                        <td className="p-3">
                          <Badge variant="outline">{student.cgpa}</Badge>
                        </td>
                        <td className="p-3">
                          <Badge variant={parseFloat(student.attendance) >= 90 ? "default" : "secondary"}>
                            {student.attendance}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "timetable" && (
          <Card>
            <CardHeader>
              <CardTitle>Weekly Teaching Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Day</th>
                      <th className="text-left p-3">Time</th>
                      <th className="text-left p-3">Subject</th>
                      <th className="text-left p-3">Class</th>
                      <th className="text-left p-3">Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetable.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">{item.day}</td>
                        <td className="p-3">{item.time}</td>
                        <td className="p-3">{item.subject}</td>
                        <td className="p-3">
                          <Badge variant="outline">{item.class}</Badge>
                        </td>
                        <td className="p-3">{item.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "materials" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Materials</h2>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload New Material
              </Button>
            </div>
            
            {materials.map((material, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{material.title}</h3>
                      <p className="text-muted-foreground">{material.type}</p>
                      <p className="text-sm text-muted-foreground mt-1">Uploaded: {material.uploaded}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{material.type}</Badge>
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "attendance" && (
          <Card>
            <CardHeader>
              <CardTitle>Attendance Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {classes.map((cls, index) => (
                  <Card key={index} className="cursor-pointer hover:bg-muted/50">
                    <CardContent className="p-4 text-center">
                      <h3 className="font-semibold">{cls.code}</h3>
                      <p className="text-sm text-muted-foreground">{cls.name}</p>
                      <Button size="sm" className="mt-2">
                        Mark Attendance
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Recent Attendance</h3>
                <div className="space-y-2 text-sm">
                  <p>• CS301 - January 15, 2024 - 42/45 students present</p>
                  <p>• CS302 - January 14, 2024 - 35/38 students present</p>
                  <p>• CS101 - January 13, 2024 - 50/52 students present</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default ProfessorDashboard;