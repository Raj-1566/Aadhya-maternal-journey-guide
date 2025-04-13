
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart } from "@/components/ui/chart";
import { HeartPulse, Weight, Thermometer, Droplets, ArrowUpCircle } from "lucide-react";

const HealthHistory = () => {
  // Mock data for health history
  const healthMetrics = [
    { 
      id: 1, 
      name: "Blood Pressure", 
      icon: HeartPulse, 
      color: "text-aadhya-pink",
      current: "118/75 mmHg", 
      change: "Normal", 
      changeType: "stable"
    },
    { 
      id: 2, 
      name: "Weight", 
      icon: Weight, 
      color: "text-aadhya-purple",
      current: "145 lbs", 
      change: "+0.5 lbs", 
      changeType: "increase"
    },
    { 
      id: 3, 
      name: "Temperature", 
      icon: Thermometer, 
      color: "text-aadhya-teal",
      current: "98.6°F", 
      change: "Normal", 
      changeType: "stable"
    },
    { 
      id: 4, 
      name: "Water Intake", 
      icon: Droplets, 
      color: "text-aadhya-blue",
      current: "48 oz", 
      change: "+8 oz", 
      changeType: "increase"
    },
  ];
  
  const bloodPressureData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Systolic",
        data: [120, 122, 118, 121, 118],
        borderColor: "rgb(155, 111, 191)",
        backgroundColor: "rgba(155, 111, 191, 0.1)",
      },
      {
        label: "Diastolic",
        data: [80, 82, 78, 77, 75],
        borderColor: "rgb(244, 180, 208)",
        backgroundColor: "rgba(244, 180, 208, 0.1)",
      },
    ],
  };
  
  const weightData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Weight (lbs)",
        data: [132, 136, 140, 143, 145],
        borderColor: "rgb(70, 181, 181)",
        backgroundColor: "rgba(70, 181, 181, 0.1)",
      },
    ],
  };
  
  const bloodTestResults = [
    { id: 1, name: "Hemoglobin", value: "12.5 g/dL", normal: "11.6-15 g/dL", status: "normal" },
    { id: 2, name: "Iron", value: "68 μg/dL", normal: "50-170 μg/dL", status: "normal" },
    { id: 3, name: "Glucose", value: "105 mg/dL", normal: "70-110 mg/dL", status: "normal" },
    { id: 4, name: "Vitamin D", value: "28 ng/mL", normal: "30-100 ng/mL", status: "low" },
  ];
  
  const prenatalVisits = [
    { 
      id: 1, 
      date: "Feb 5, 2025", 
      week: "12", 
      doctor: "Dr. Emily Johnson", 
      notes: "First trimester screening. Ultrasound shows healthy development. Prescribed prenatal vitamins." 
    },
    { 
      id: 2, 
      date: "Mar 20, 2025", 
      week: "18", 
      doctor: "Dr. Emily Johnson", 
      notes: "Anatomy scan completed. All measurements normal. Gender revealed if desired." 
    },
    { 
      id: 3, 
      date: "May 1, 2025", 
      week: "24", 
      doctor: "Dr. Emily Johnson", 
      notes: "Glucose tolerance test. Blood pressure and fetal heartbeat normal. Discussed birth plan options." 
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">Health History</h1>
        <p className="text-muted-foreground mt-1">Track and monitor your health metrics</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {healthMetrics.map((metric) => (
          <Card key={metric.id}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`${metric.color}`}>
                  <metric.icon className="h-10 w-10" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.name}</p>
                  <h3 className="text-2xl font-bold">{metric.current}</h3>
                  <div className="flex items-center mt-1 text-sm">
                    {metric.changeType === "increase" ? (
                      <ArrowUpCircle className="h-4 w-4 mr-1 text-aadhya-teal" />
                    ) : (
                      <span className="h-4 w-4 mr-1">•</span>
                    )}
                    <span>{metric.change}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Tabs defaultValue="charts" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="charts">Health Charts</TabsTrigger>
          <TabsTrigger value="blood-tests">Blood Tests</TabsTrigger>
          <TabsTrigger value="prenatal-visits">Prenatal Visits</TabsTrigger>
        </TabsList>
        
        <TabsContent value="charts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Blood Pressure</CardTitle>
                <CardDescription>Last 5 months</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={bloodPressureData} 
                  className="h-72"
                  config={{}} // Add empty config object to satisfy the type requirement
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Weight (lbs)</CardTitle>
                <CardDescription>Last 5 months</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={weightData} 
                  className="h-72"
                  config={{}} // Add empty config object to satisfy the type requirement
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="blood-tests">
          <Card>
            <CardHeader>
              <CardTitle>Blood Test Results</CardTitle>
              <CardDescription>Latest lab results from your last checkup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bloodTestResults.map((test) => (
                  <div key={test.id} className="flex justify-between items-center py-2 border-b border-border">
                    <div>
                      <p className="font-medium">{test.name}</p>
                      <p className="text-sm text-muted-foreground">Normal range: {test.normal}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{test.value}</p>
                      <p className={`text-xs ${
                        test.status === "normal" ? "text-green-500" : "text-amber-500"
                      }`}>
                        {test.status === "normal" ? "Normal" : "Low - Supplement recommended"}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    Your latest blood test results show overall good health. Vitamin D levels are slightly low - 
                    your doctor has recommended a daily supplement of 1000 IU. 
                    All other results are within normal range for your stage of pregnancy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="prenatal-visits">
          <Card>
            <CardHeader>
              <CardTitle>Prenatal Visit History</CardTitle>
              <CardDescription>Record of your doctor appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {prenatalVisits.map((visit) => (
                  <div key={visit.id} className="relative pl-6 pb-6 border-l border-aadhya-purple last:border-0 last:pb-0">
                    <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-aadhya-purple"></div>
                    <div className="mb-1">
                      <h4 className="font-medium flex items-center">
                        {visit.date}
                        <span className="ml-2 px-2 py-0.5 bg-aadhya-purple/10 text-aadhya-purple text-xs rounded-full">
                          Week {visit.week}
                        </span>
                      </h4>
                      <p className="text-sm text-muted-foreground">{visit.doctor}</p>
                    </div>
                    <p className="text-sm mt-2">{visit.notes}</p>
                  </div>
                ))}
                
                <div className="flex justify-center mt-4">
                  <button className="aadhya-button-primary">
                    Add New Record
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HealthHistory;
