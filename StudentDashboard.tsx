import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  FileText, 
  Upload, 
  Download, 
  CreditCard,
  User,
  CheckCircle,
  Clock,
  BookOpen,
  Trophy
} from "lucide-react";
import vitLogo from "@/assets/vit-logo.png";

interface StudentDashboardProps {
  onBack: () => void;
}

const StudentDashboard = ({ onBack }: StudentDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const studentData = {
    name: "John Doe",
    id: "20CS001",
    semester: "6th Semester",
    cgpa: "8.5",
    attendance: "85%"
  };

  const courses = [
    { code: "CS301", name: "Data Structures", instructor: "Dr. Smith", credits: 4 },
    { code: "CS302", name: "Algorithms", instructor: "Prof. Johnson", credits: 3 },
    { code: "CS303", name: "Database Systems", instructor: "Dr. Brown", credits: 4 },
    { code: "CS304", name: "Computer Networks", instructor: "Prof. Davis", credits: 3 }
  ];

  const timetable = [
    { day: "Monday", time: "9:00-10:00", subject: "Data Structures", room: "Lab 1" },
    { day: "Monday", time: "10:00-11:00", subject: "Algorithms", room: "Room 201" },
    { day: "Tuesday", time: "9:00-10:00", subject: "Database Systems", room: "Lab 2" },
    { day: "Tuesday", time: "11:00-12:00", subject: "Computer Networks", room: "Room 301" }
  ];

  const assignments = [
    { title: "Data Structure Implementation", course: "CS301", dueDate: "2024-01-15", status: "pending" },
    { title: "Algorithm Analysis Report", course: "CS302", dueDate: "2024-01-12", status: "submitted" },
    { title: "Database Design Project", course: "CS303", dueDate: "2024-01-20", status: "pending" }
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
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-primary font-heading">Student Portal</h1>
                <p className="text-muted-foreground">Welcome back, {studentData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                {studentData.semester}
              </Badge>
              <div className="text-right">
                <p className="text-sm font-medium">{studentData.id}</p>
                <p className="text-xs text-muted-foreground">CGPA: {studentData.cgpa}</p>
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
              { id: "overview", label: "Overview", icon: User },
              { id: "courses", label: "Courses", icon: BookOpen },
              { id: "timetable", label: "Timetable", icon: Calendar },
              { id: "assignments", label: "Assignments", icon: FileText },
              { id: "materials", label: "Materials", icon: Download },
              { id: "payments", label: "Payments", icon: CreditCard }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-primary"
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
                    <Trophy className="h-5 w-5 text-primary" />
                    <span>Academic Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-primary text-white p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Overall CGPA</h3>
                      <p className="text-2xl font-bold">{studentData.cgpa}</p>
                    </div>
                    <div className="bg-gradient-secondary text-white p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Attendance</h3>
                      <p className="text-2xl font-bold">{studentData.attendance}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Assignments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {assignments.slice(0, 3).map((assignment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <h4 className="font-medium">{assignment.title}</h4>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={assignment.status === "submitted" ? "default" : "secondary"}>
                            {assignment.status === "submitted" ? "Submitted" : "Pending"}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{assignment.dueDate}</p>
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
                    Upload Assignment
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Exam Schedule
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Fees
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Today's Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {timetable.filter(item => item.day === "Monday").map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.time}</span>
                        <span className="font-medium">{item.subject}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <Badge variant="outline">{course.code}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p><span className="font-medium">Instructor:</span> {course.instructor}</p>
                    <p><span className="font-medium">Credits:</span> {course.credits}</p>
                    <div className="flex justify-between items-center mt-4">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Materials
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
        )}

        {activeTab === "timetable" && (
          <Card>
            <CardHeader>
              <CardTitle>Weekly Timetable</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Day</th>
                      <th className="text-left p-3">Time</th>
                      <th className="text-left p-3">Subject</th>
                      <th className="text-left p-3">Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetable.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-3 font-medium">{item.day}</td>
                        <td className="p-3">{item.time}</td>
                        <td className="p-3">{item.subject}</td>
                        <td className="p-3">{item.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "assignments" && (
          <div className="space-y-4">
            {assignments.map((assignment, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{assignment.title}</h3>
                      <p className="text-muted-foreground">{assignment.course}</p>
                      <p className="text-sm text-muted-foreground mt-1">Due: {assignment.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={assignment.status === "submitted" ? "default" : "secondary"}>
                        {assignment.status === "submitted" ? (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Submitted
                          </>
                        ) : (
                          <>
                            <Clock className="h-3 w-3 mr-1" />
                            Pending
                          </>
                        )}
                      </Badge>
                      {assignment.status === "pending" && (
                        <Button size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Submit
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "materials" && (
          <div className="grid md:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{course.code}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button size="sm" variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Lecture Notes
                    </Button>
                    <Button size="sm" variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Lab Manual
                    </Button>
                    <Button size="sm" variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Previous Papers
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "payments" && (
          <Card>
            <CardHeader>
              <CardTitle>Fee Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                  <h3 className="font-semibold text-warning-foreground">Pending Payment</h3>
                  <p className="text-warning-foreground/80">Semester Fee: ₹50,000</p>
                  <p className="text-sm text-warning-foreground/60">Due Date: January 31, 2024</p>
                  <Button className="mt-3 bg-warning hover:bg-warning/90">
                    Pay Now
                  </Button>
                </div>
                
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <h3 className="font-semibold text-success-foreground">Payment History</h3>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between text-sm">
                      <span>Admission Fee</span>
                      <span className="text-success">₹25,000 - Paid</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Previous Semester</span>
                      <span className="text-success">₹50,000 - Paid</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default StudentDashboard;