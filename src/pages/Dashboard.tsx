
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, HeartPulse, Baby, Hospital, Video, BookOpen } from "lucide-react";

const Dashboard = () => {
  // Mock data for the dashboard
  const pregnancyWeek = 24;
  const totalWeeks = 40;
  const progress = (pregnancyWeek / totalWeeks) * 100;
  const dueDate = "12 अगस्त, 2025";
  
  const upcomingAppointments = [
    { id: 1, title: "ओबी-जीवाईएन चेकअप", date: "15 मई, 2025", time: "सुबह 10:30", doctor: "डॉ. एमिली जॉनसन" },
    { id: 2, title: "अल्ट्रासाउंड", date: "28 मई, 2025", time: "दोपहर 2:00", doctor: "डॉ. माइकल चेन" },
  ];
  
  const recentMeasurements = [
    { id: 1, name: "रक्तचाप", value: "118/75 mmHg", date: "1 मई, 2025" },
    { id: 2, name: "वजन", value: "145 lbs", date: "1 मई, 2025" },
    { id: 3, name: "भ्रूण हृदय गति", value: "150 bpm", date: "1 मई, 2025" },
  ];
  
  const quickLinks = [
    { id: 1, title: "मेरा स्वास्थ्य रिकॉर्ड", icon: HeartPulse, color: "bg-aadhya-pink/20 text-aadhya-pink", path: "/health" },
    { id: 2, title: "शिशु विकास", icon: Baby, color: "bg-aadhya-blue/20 text-aadhya-blue", path: "/resources" },
    { id: 3, title: "अस्पताल बैग चेकलिस्ट", icon: Hospital, color: "bg-aadhya-purple/20 text-aadhya-purple", path: "/hospital" },
    { id: 4, title: "गर्भावस्था वीडियो", icon: Video, color: "bg-aadhya-teal/20 text-aadhya-teal", path: "/resources" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">नमस्ते, सारा</h1>
        <p className="text-muted-foreground mt-1">आपकी गर्भावस्था यात्रा में आपका स्वागत है</p>
      </div>
      
      {/* Pregnancy Timeline */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>आपकी गर्भावस्था समयरेखा</CardTitle>
          <CardDescription>सप्ताह {pregnancyWeek} / {totalWeeks}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={progress} className="h-3" />
            
            <div className="flex justify-between text-sm">
              <div>
                <p className="font-medium">पहली तिमाही</p>
                <p className="text-muted-foreground">सप्ताह 1-12</p>
              </div>
              <div>
                <p className="font-medium">दूसरी तिमाही</p>
                <p className="text-muted-foreground">सप्ताह 13-26</p>
              </div>
              <div>
                <p className="font-medium">तीसरी तिमाही</p>
                <p className="text-muted-foreground">सप्ताह 27-40</p>
              </div>
            </div>
            
            <div className="mt-4 bg-muted p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">अनुमानित डिलीवरी तिथि</p>
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
            <CardTitle>त्वरित लिंक</CardTitle>
            <CardDescription>आपकी यात्रा के लिए उपयोगी संसाधन</CardDescription>
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
              <CardTitle>आगामी अपॉइंटमेंट</CardTitle>
              <CardDescription>आपके अगले चेकअप</CardDescription>
            </div>
            <a href="/appointments" className="text-sm text-aadhya-teal hover:underline">
              सभी देखें
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
              <p className="text-center py-6 text-muted-foreground">कोई आगामी अपॉइंटमेंट नहीं</p>
            )}
          </CardContent>
        </Card>
        
        {/* Recent Health Measurements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>स्वास्थ्य मेट्रिक्स</CardTitle>
              <CardDescription>हालिया मापन</CardDescription>
            </div>
            <a href="/health" className="text-sm text-aadhya-teal hover:underline">
              सभी देखें
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
            <CardTitle>इस सप्ताह का विकास</CardTitle>
            <CardDescription>सप्ताह {pregnancyWeek}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-aadhya-mint/50 p-4 rounded-full">
                <Baby className="h-8 w-8 text-aadhya-teal" />
              </div>
              <div>
                <h4 className="font-medium">आपका बच्चा खरबूजे के आकार का है</h4>
                <p className="text-sm text-muted-foreground">लगभग 12 इंच, 1.3 पाउंड</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              आपके बच्चे की सुनने की क्षमता तेजी से विकसित हो रही है। वे अब आपकी आवाज़ भी सुन सकते हैं!
              उनका मस्तिष्क भी तेजी से विकसित हो रहा है, और वे सांस लेने के आंदोलनों का अभ्यास कर रहे हैं।
            </p>
            <a 
              href="/resources" 
              className="flex items-center text-sm text-aadhya-teal hover:underline"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              सप्ताह 24 के बारे में और पढ़ें
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
