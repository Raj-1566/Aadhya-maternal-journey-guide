
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart } from "@/components/ui/chart";
import { HeartPulse, Weight, Thermometer, Droplets, ArrowUpCircle } from "lucide-react";

const HealthHistory = () => {
  // Mock data for health history
  const healthMetrics = [
    { 
      id: 1, 
      name: "रक्तचाप", 
      icon: HeartPulse, 
      color: "text-aadhya-pink",
      current: "118/75 mmHg", 
      change: "सामान्य", 
      changeType: "stable"
    },
    { 
      id: 2, 
      name: "वजन", 
      icon: Weight, 
      color: "text-aadhya-purple",
      current: "145 lbs", 
      change: "+0.5 lbs", 
      changeType: "increase"
    },
    { 
      id: 3, 
      name: "तापमान", 
      icon: Thermometer, 
      color: "text-aadhya-teal",
      current: "98.6°F", 
      change: "सामान्य", 
      changeType: "stable"
    },
    { 
      id: 4, 
      name: "पानी का सेवन", 
      icon: Droplets, 
      color: "text-aadhya-blue",
      current: "48 oz", 
      change: "+8 oz", 
      changeType: "increase"
    },
  ];
  
  const bloodPressureData = {
    labels: ["जन", "फर", "मार्च", "अप्रै", "मई"],
    datasets: [
      {
        label: "सिस्टोलिक",
        data: [120, 122, 118, 121, 118],
        borderColor: "rgb(155, 111, 191)",
        backgroundColor: "rgba(155, 111, 191, 0.1)",
      },
      {
        label: "डायस्टोलिक",
        data: [80, 82, 78, 77, 75],
        borderColor: "rgb(244, 180, 208)",
        backgroundColor: "rgba(244, 180, 208, 0.1)",
      },
    ],
  };
  
  const weightData = {
    labels: ["जन", "फर", "मार्च", "अप्रै", "मई"],
    datasets: [
      {
        label: "वजन (lbs)",
        data: [132, 136, 140, 143, 145],
        borderColor: "rgb(70, 181, 181)",
        backgroundColor: "rgba(70, 181, 181, 0.1)",
      },
    ],
  };
  
  const bloodTestResults = [
    { id: 1, name: "हीमोग्लोबिन", value: "12.5 g/dL", normal: "11.6-15 g/dL", status: "normal" },
    { id: 2, name: "आयरन", value: "68 μg/dL", normal: "50-170 μg/dL", status: "normal" },
    { id: 3, name: "ग्लूकोज़", value: "105 mg/dL", normal: "70-110 mg/dL", status: "normal" },
    { id: 4, name: "विटामिन डी", value: "28 ng/mL", normal: "30-100 ng/mL", status: "low" },
  ];
  
  const prenatalVisits = [
    { 
      id: 1, 
      date: "5 फरवरी, 2025", 
      week: "12", 
      doctor: "डॉ. एमिली जॉनसन", 
      notes: "पहली तिमाही की जांच। अल्ट्रासाउंड स्वस्थ विकास दिखाता है। प्रीनेटल विटामिन निर्धारित किए गए।" 
    },
    { 
      id: 2, 
      date: "20 मार्च, 2025", 
      week: "18", 
      doctor: "डॉ. एमिली जॉनसन", 
      notes: "एनाटॉमी स्कैन पूरा हुआ। सभी माप सामान्य हैं। यदि चाहें तो लिंग का खुलासा किया गया।" 
    },
    { 
      id: 3, 
      date: "1 मई, 2025", 
      week: "24", 
      doctor: "डॉ. एमिली जॉनसन", 
      notes: "ग्लूकोज टॉलरेंस टेस्ट। रक्तचाप और भ्रूण की हृदय धड़कन सामान्य है। प्रसव योजना विकल्पों पर चर्चा की गई।" 
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">स्वास्थ्य इतिहास</h1>
        <p className="text-muted-foreground mt-1">अपने स्वास्थ्य मेट्रिक्स को ट्रैक और मॉनिटर करें</p>
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
          <TabsTrigger value="charts">स्वास्थ्य चार्ट</TabsTrigger>
          <TabsTrigger value="blood-tests">रक्त परीक्षण</TabsTrigger>
          <TabsTrigger value="prenatal-visits">प्रसव पूर्व विज़िट</TabsTrigger>
        </TabsList>
        
        <TabsContent value="charts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>रक्तचाप</CardTitle>
                <CardDescription>पिछले 5 महीने</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={bloodPressureData} 
                  className="h-72"
                  config={{}}
                >
                  <></>
                </LineChart>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>वजन (lbs)</CardTitle>
                <CardDescription>पिछले 5 महीने</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart 
                  data={weightData} 
                  className="h-72"
                  config={{}}
                >
                  <></>
                </LineChart>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="blood-tests">
          <Card>
            <CardHeader>
              <CardTitle>रक्त परीक्षण परिणाम</CardTitle>
              <CardDescription>आपकी अंतिम जांच से नवीनतम प्रयोगशाला परिणाम</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bloodTestResults.map((test) => (
                  <div key={test.id} className="flex justify-between items-center py-2 border-b border-border">
                    <div>
                      <p className="font-medium">{test.name}</p>
                      <p className="text-sm text-muted-foreground">सामान्य सीमा: {test.normal}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{test.value}</p>
                      <p className={`text-xs ${
                        test.status === "normal" ? "text-green-500" : "text-amber-500"
                      }`}>
                        {test.status === "normal" ? "सामान्य" : "कम - सप्लीमेंट की सिफारिश की गई"}
                      </p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    आपके नवीनतम रक्त परीक्षण परिणाम समग्र रूप से अच्छे स्वास्थ्य को दर्शाते हैं। विटामिन डी के स्तर थोड़े कम हैं - 
                    आपके डॉक्टर ने 1000 IU की दैनिक खुराक की सिफारिश की है। 
                    गर्भावस्था के इस चरण में अन्य सभी परिणाम सामान्य सीमा के भीतर हैं।
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="prenatal-visits">
          <Card>
            <CardHeader>
              <CardTitle>प्रसव पूर्व विज़िट इतिहास</CardTitle>
              <CardDescription>आपके डॉक्टर अपॉइंटमेंट का रिकॉर्ड</CardDescription>
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
                          सप्ताह {visit.week}
                        </span>
                      </h4>
                      <p className="text-sm text-muted-foreground">{visit.doctor}</p>
                    </div>
                    <p className="text-sm mt-2">{visit.notes}</p>
                  </div>
                ))}
                
                <div className="flex justify-center mt-4">
                  <button className="aadhya-button-primary">
                    नया रिकॉर्ड जोड़ें
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
