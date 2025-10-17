import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Shield, BookOpen } from "lucide-react";
import StudentDashboard from "@/components/StudentDashboard";
import ProfessorDashboard from "@/components/ProfessorDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import LoginPage from "@/components/LoginPage";

type Portal = 'login' | 'landing' | 'student' | 'professor' | 'admin';

const Index = () => {
  const [currentPortal, setCurrentPortal] = useState<Portal>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (role: 'student' | 'professor' | 'admin') => {
    setIsAuthenticated(true);
    setCurrentPortal(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPortal('login');
  };

  const renderPortal = () => {
    if (!isAuthenticated) {
      return <LoginPage onLogin={handleLogin} />;
    }

    switch (currentPortal) {
      case 'student':
        return <StudentDashboard onBack={handleLogout} />;
      case 'professor':
        return <ProfessorDashboard onBack={handleLogout} />;
      case 'admin':
        return <AdminDashboard onBack={handleLogout} />;
      case 'landing':
        return <LandingPage onPortalSelect={setCurrentPortal} onLogout={handleLogout} />;
      default:
        return <LandingPage onPortalSelect={setCurrentPortal} onLogout={handleLogout} />;
    }
  };

  return renderPortal();
};

const LandingPage = ({ 
  onPortalSelect, 
  onLogout 
}: { 
  onPortalSelect: (portal: Portal) => void;
  onLogout: () => void;
}) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white font-heading">College</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onLogout}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
            Welcome to College
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Your comprehensive platform for academic excellence. Choose your portal to access 
            personalized features designed for your role.
          </p>
        </div>

        {/* Portal Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <PortalCard
            title="Student Portal"
            description="Access your courses, attendance, assignments, and academic records"
            icon={<GraduationCap className="h-12 w-12" />}
            gradient="bg-gradient-primary"
            onClick={() => onPortalSelect('student')}
            features={[
              "View Attendance",
              "Course Materials",
              "Submit Assignments",
              "Exam Timetable"
            ]}
          />

          <PortalCard
            title="Professor Portal"
            description="Manage your classes, upload materials, and track student progress"
            icon={<Users className="h-12 w-12" />}
            gradient="bg-gradient-secondary"
            onClick={() => onPortalSelect('professor')}
            features={[
              "Upload Attendance",
              "Share Materials",
              "Grade Assignments",
              "View Timetable"
            ]}
          />

          <PortalCard
            title="Admin Portal"
            description="Oversee system operations, manage users, and monitor performance"
            icon={<Shield className="h-12 w-12" />}
            gradient="bg-gradient-accent"
            onClick={() => onPortalSelect('admin')}
            features={[
              "User Management",
              "System Analytics",
              "Course Management",
              "Reports"
            ]}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-white/70">
            <p>&copy; 2024 College Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const PortalCard = ({
  title,
  description,
  icon,
  gradient,
  onClick,
  features
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  onClick: () => void;
  features: string[];
}) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-elegant overflow-hidden">
      <CardContent className="p-0">
        <div className={`${gradient} p-8 text-white`}>
          <div className="flex justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-center mb-3 font-heading">{title}</h3>
          <p className="text-center text-white/90 mb-6">{description}</p>
          
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-white/80">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2" />
                {feature}
              </div>
            ))}
          </div>

          <Button 
            onClick={onClick}
            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300"
            variant="outline"
          >
            Enter Portal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Index;