import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  User, 
  Lock, 
  GraduationCap, 
  Users, 
  Shield,
  Eye,
  EyeOff,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import vitLogo from "@/assets/vit-logo.png";

interface LoginPageProps {
  onLogin: (role: 'student' | 'professor' | 'admin') => void;
}

type UserRole = 'student' | 'professor' | 'admin';

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!credentials.username || !credentials.password) {
      toast({
        title: "Error",
        description: "Please enter both username and password",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: `Welcome to College Management System!`,
      });
      onLogin(selectedRole);
    }, 2000);
  };

  const roleOptions = [
    {
      id: 'student' as UserRole,
      label: 'Student',
      icon: GraduationCap,
      gradient: 'bg-gradient-primary',
      description: 'Access courses, assignments, and academic records'
    },
    {
      id: 'professor' as UserRole,
      label: 'Professor',
      icon: Users,
      gradient: 'bg-gradient-secondary',
      description: 'Manage classes, upload materials, and grade students'
    },
    {
      id: 'admin' as UserRole,
      label: 'Administrator',
      icon: Shield,
      gradient: 'bg-gradient-accent',
      description: 'System management and user administration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Logo */}
      <div 
        className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${vitLogo})` }}
      />
      
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>

      <div className="w-full max-w-md mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white font-heading">College</h1>
          </div>
        </div>

        <div className="flex justify-center">
            <Card className="w-full shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground font-heading">
                  Sign In
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Select Your Role</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {roleOptions.map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedRole === role.id
                            ? 'border-primary bg-primary/10 shadow-sm'
                            : 'border-border hover:border-primary/50 bg-muted/50'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-1">
                          <role.icon className={`h-5 w-5 ${
                            selectedRole === role.id ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                          <span className={`text-xs font-medium ${
                            selectedRole === role.id ? 'text-primary' : 'text-muted-foreground'
                          }`}>
                            {role.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username / Student ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username or ID"
                        value={credentials.username}
                        onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={credentials.password}
                        onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>


                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </Button>
                </form>

                {/* Demo Credentials */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Demo Credentials</span>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p><strong>Student:</strong> student123 / password</p>
                    <p><strong>Professor:</strong> prof001 / password</p>
                    <p><strong>Admin:</strong> admin / password</p>
                  </div>
                </div>

              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;