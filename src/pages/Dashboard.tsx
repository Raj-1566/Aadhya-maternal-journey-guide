
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, HeartPulse, Baby, Hospital, Video, BookOpen } from "lucide-react";

const Dashboard = () => {
  // Mock data for the dashboard
  const pregnancyWeek = 24;
  const totalWeeks = 40;
  const progress = (pregnancyWeek / totalWeeks) * 100;
  const dueDate = "August 12, 2025";
  
  const upcomingAppointments = [
    { id: 1, title: "OB-GYN Checkup", date: "May 15, 2025", time: "10:30 AM", doctor: "Dr. Emily Johnson" },
    { id: 2, title: "Ultrasound", date: "May 28, 2025", time: "2:00 PM", doctor: "Dr. Michael Chen" },
  ];
  
  const recentMeasurements = [
    { id: 1, name: "Blood Pressure", value: "118/75 mmHg", date: "May 1, 2025" },
    { id: 2, name: "Weight", value: "145 lbs", date: "May 1, 2025" },
    { id: 3, name: "Fetal Heart Rate", value: "150 bpm", date: "May 1, 2025" },
  ];
  
  const quickLinks = [
    { id: 1, title: "My Health Records", icon: HeartPulse, color: "bg-aadhya-pink/20 text-aadhya-pink", path: "/health" },
    { id: 2, title: "Baby Development", icon: Baby, color: "bg-aadhya-blue/20 text-aadhya-blue", path: "/resources" },
    { id: 3, title: "Hospital Bag Checklist", icon: Hospital, color: "bg-aadhya-purple/20 text-aadhya-purple", path: "/hospital" },
    { id: 4, title: "Pregnancy Videos", icon: Video, color: "bg-aadhya-teal/20 text-aadhya-teal", path: "/resources" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">Hello, Sarah</h1>
        <p className="text-muted-foreground mt-1">Welcome to your pregnancy journey</p>
      </div>
      
      {/* Pregnancy Timeline */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Your Pregnancy Timeline</CardTitle>
          <CardDescription>Week {pregnancyWeek} of {totalWeeks}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={progress} className="h-3" />
            
            <div className="flex justify-between text-sm">
              <div>
                <p className="font-medium">First Trimester</p>
                <p className="text-muted-foreground">Weeks 1-12</p>
              </div>
              <div>
                <p className="font-medium">Second Trimester</p>
                <p className="text-muted-foreground">Weeks 13-26</p>
              </div>
              <div>
                <p className="font-medium">Third Trimester</p>
                <p className="text-muted-foreground">Weeks 27-40</p>
              </div>
            </div>
            
            <div className="mt-4 bg-muted p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">Expected Due Date</p>
              <p className="font-medium text-lg flex justify-center items-center mt-1">
                <Calendar className="mr-2 h-5 w-5 text-aadhya-purple" /> {dueDate}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Helpful resources for your journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={link.path} 
                  className="flex flex-col items-center p-4 rounded-lg transition-all hover:shadow-md cursor-pointer"
                >
                  <div className={`p-3 rounded-full ${link.color} mb-3`}>
                    <link.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-center">{link.title}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your next check-ups</CardDescription>
            </div>
            <a href="/appointments" className="text-sm text-aadhya-teal hover:underline">
              View All
            </a>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-start space-x-4 p-3 rounded-lg border border-border">
                    <div className="bg-aadhya-blue/20 p-3 rounded-full text-aadhya-teal">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{appointment.title}</h4>
                      <p className="text-sm text-muted-foreground">{appointment.date} • {appointment.time}</p>
                      <p className="text-sm">{appointment.doctor}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-6 text-muted-foreground">No upcoming appointments</p>
            )}
          </CardContent>
        </Card>
        
        {/* Recent Health Measurements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Health Metrics</CardTitle>
              <CardDescription>Recent measurements</CardDescription>
            </div>
            <a href="/health" className="text-sm text-aadhya-teal hover:underline">
              View All
            </a>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMeasurements.map((measurement) => (
                <div key={measurement.id} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{measurement.name}</span>
                  <div className="text-right">
                    <span className="font-medium">{measurement.value}</span>
                    <p className="text-xs text-muted-foreground">{measurement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* This Week's Development */}
        <Card>
          <CardHeader>
            <CardTitle>This Week's Development</CardTitle>
            <CardDescription>Week {pregnancyWeek}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-aadhya-mint/50 p-4 rounded-full">
                <Baby className="h-8 w-8 text-aadhya-teal" />
              </div>
              <div>
                <h4 className="font-medium">Your baby is the size of a cantaloupe</h4>
                <p className="text-sm text-muted-foreground">About 12 inches, 1.3 pounds</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your baby's hearing is rapidly developing. They may even be able to hear your voice now!
              Their brain is also developing rapidly, and they're practicing breathing movements.
            </p>
            <a 
              href="/resources" 
              className="flex items-center text-sm text-aadhya-teal hover:underline"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Read more about week 24
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
