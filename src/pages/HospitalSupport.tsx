
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hospital, Phone, Clock, MapPin, ClipboardList, BookOpen, AlertTriangle, Heart } from "lucide-react";

const HospitalSupport = () => {
  // Mock data for hospital support
  const hospitalInfo = {
    name: "मर्सी जनरल अस्पताल",
    address: "2340 मेडिकल सेंटर ड्राइव, स्प्रिंगफील्ड, IL 62701",
    phone: "(555) 123-4567",
    emergencyPhone: "(555) 987-6543",
    hours: "24/7 आपातकालीन सेवाएँ",
    website: "https://mercygeneral.example.com",
    mapLink: "https://maps.example.com/mercygeneral",
  };
  
  const careTeam = [
    { 
      id: 1, 
      name: "डॉ. एमिली जॉनसन", 
      specialty: "ओबी-जीवाईएन",
      phone: "(555) 234-5678",
      email: "dr.johnson@example.com",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150"
    },
    { 
      id: 2, 
      name: "डॉ. माइकल चेन", 
      specialty: "मातृ-भ्रूण चिकित्सा",
      phone: "(555) 345-6789",
      email: "dr.chen@example.com",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150"
    },
    { 
      id: 3, 
      name: "नर्स लिसा विलियम्स", 
      specialty: "प्रसूति नर्स",
      phone: "(555) 456-7890",
      email: "nurse.williams@example.com",
      photo: "https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?q=80&w=150"
    },
  ];
  
  const hospitalBagItems = [
    { id: 1, category: "आपके लिए", items: [
      { id: 101, name: "बीमा कार्ड और आईडी", checked: true },
      { id: 102, name: "जन्म योजना (कई प्रतियां)", checked: true },
      { id: 103, name: "आरामदायक नाइटगाउन या पजामा", checked: false },
      { id: 104, name: "चप्पल और मोज़े", checked: false },
      { id: 105, name: "टॉयलेट्री और व्यक्तिगत देखभाल वस्तुएं", checked: false },
      { id: 106, name: "फोन चार्जर", checked: true },
      { id: 107, name: "हल्के स्नैक्स और पेय", checked: false },
    ]},
    { id: 2, category: "बच्चे के लिए", items: [
      { id: 201, name: "घर जाने के लिए कपड़े", checked: true },
      { id: 202, name: "कंबल", checked: false },
      { id: 203, name: "डायपर और वाइप्स", checked: false },
      { id: 204, name: "कार सीट (स्थापित)", checked: true },
    ]},
    { id: 3, category: "साथी के लिए", items: [
      { id: 301, name: "कपड़ों का बदलाव", checked: false },
      { id: 302, name: "टॉयलेट्री", checked: false },
      { id: 303, name: "स्नैक्स और पेय", checked: false },
      { id: 304, name: "मनोरंजन (किताबें, टैबलेट, आदि)", checked: false },
    ]},
  ];
  
  const laborSigns = [
    { id: 1, sign: "संकुचन", description: "नियमित, दर्दनाक संकुचन जो मजबूत और अधिक नज़दीक होते जाते हैं।" },
    { id: 2, sign: "पानी का टूटना", description: "योनि से साफ या गुलाबी तरल का रिसना या बहना।" },
    { id: 3, sign: "रक्तमय दिखावट", description: "गुलाबी या रक्त-रंजित श्लेष्म स्राव।" },
    { id: 4, sign: "पीठ के निचले हिस्से में दर्द", description: "पीठ के निचले हिस्से में लगातार दर्द और ऐंठन जो स्थिति बदलने से दूर नहीं होती।" },
  ];
  
  const emergencySigns = [
    { id: 1, sign: "भारी रक्तस्राव", description: "एक घंटे से कम समय में पैड को भिगोना।" },
    { id: 2, sign: "गंभीर पेट दर्द", description: "पेट में लगातार, गंभीर दर्द।" },
    { id: 3, sign: "भ्रूण की हलचल में कमी", description: "आपके बच्चे की हरकतों में उल्लेखनीय कमी।" },
    { id: 4, sign: "गंभीर सिरदर्द या दृष्टि में परिवर्तन", description: "लगातार सिरदर्द, धुंधली दृष्टि, या धब्बे देखना।" },
    { id: 5, sign: "उच्च बुखार", description: "100.4°F (38°C) से अधिक तापमान।" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">अस्पताल सहायता</h1>
        <p className="text-muted-foreground mt-1">आपके अस्पताल संसाधन और जन्म की योजना</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hospital Information */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>आपका अस्पताल</CardTitle>
            <CardDescription>जहां आप अपने बच्चे को जन्म देंगी</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Hospital className="h-5 w-5 text-aadhya-purple mt-1" />
                <div>
                  <h3 className="font-medium">{hospitalInfo.name}</h3>
                  <p className="text-sm text-muted-foreground">{hospitalInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-aadhya-teal mt-1" />
                <div>
                  <h3 className="font-medium">संपर्क नंबर</h3>
                  <p className="text-sm">मुख्य: {hospitalInfo.phone}</p>
                  <p className="text-sm">आपातकालीन: {hospitalInfo.emergencyPhone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-aadhya-blue mt-1" />
                <div>
                  <h3 className="font-medium">समय</h3>
                  <p className="text-sm">{hospitalInfo.hours}</p>
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <a 
                  href={hospitalInfo.mapLink} 
                  target="_blank" 
                  className="flex items-center text-aadhya-teal hover:underline"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>मानचित्र पर देखें</span>
                </a>
                
                <a 
                  href={hospitalInfo.website} 
                  target="_blank" 
                  className="flex items-center text-aadhya-teal hover:underline"
                >
                  <span>वेबसाइट पर जाएँ</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Care Team */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>आपकी देखभाल टीम</CardTitle>
            <CardDescription>आपकी देखभाल करने वाले पेशेवर</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {careTeam.map((member) => (
                <div key={member.id} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                    <div className="flex mt-1 text-sm">
                      <a href={`tel:${member.phone}`} className="text-aadhya-teal hover:underline mr-3">
                        {member.phone}
                      </a>
                      <a href={`mailto:${member.email}`} className="text-aadhya-teal hover:underline">
                        ईमेल
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="hospital-bag" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="hospital-bag">अस्पताल बैग चेकलिस्ट</TabsTrigger>
          <TabsTrigger value="labor-signs">अस्पताल कब जाना है</TabsTrigger>
          <TabsTrigger value="emergency">आपातकालीन संकेत</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hospital-bag">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardList className="h-5 w-5 mr-2 text-aadhya-purple" />
                <span>अस्पताल बैग चेकलिस्ट</span>
              </CardTitle>
              <CardDescription>आपके प्रसव के लिए तैयार करने की वस्तुएं</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {hospitalBagItems.map((category) => (
                  <div key={category.id}>
                    <h3 className="font-medium text-lg mb-3">{category.category}</h3>
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <div key={item.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`item-${item.id}`}
                            defaultChecked={item.checked}
                            className="h-4 w-4 rounded border-gray-300 text-aadhya-purple focus:ring-aadhya-teal"
                          />
                          <label htmlFor={`item-${item.id}`} className="ml-2 text-sm">
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 inline mr-1" />
                    <span>
                      सप्ताह 36 तक (या उससे पहले) अपना बैग तैयार करें और इसे आसानी से पहुंच के भीतर रखें।
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="labor-signs">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-aadhya-blue" />
                <span>अस्पताल कब जाना है</span>
              </CardTitle>
              <CardDescription>प्रसव शुरू होने के संकेत</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {laborSigns.map((sign) => (
                  <div key={sign.id} className="p-4 border border-border rounded-lg">
                    <h3 className="font-medium">{sign.sign}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{sign.description}</p>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium text-aadhya-teal">सामान्य दिशानिर्देश:</h3>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>पहली बार माँ बनने वाली: जब संकुचन 5 मिनट के अंतर पर हों, प्रत्येक 1 मिनट तक रहे, 1 घंटे तक (5-1-1 नियम), तब अस्पताल जाएँ।</li>
                    <li>अगर आपका पानी टूट जाता है, तो भले ही आपको संकुचन न हो रहे हों, अस्पताल जाएँ।</li>
                    <li>अस्पताल जाने से पहले हमेशा अपने स्वास्थ्य सेवा प्रदाता को कॉल करें।</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emergency">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span>गर्भावस्था के आपातकालीन संकेत</span>
              </CardTitle>
              <CardDescription>कब तत्काल चिकित्सा ध्यान देना चाहिए</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm font-medium text-destructive">
                    अगर आप इनमें से किसी भी लक्षण का अनुभव करती हैं, तो तुरंत अपने स्वास्थ्य सेवा प्रदाता को कॉल करें 
                    या आपातकालीन कक्ष में जाएँ।
                  </p>
                </div>
                
                {emergencySigns.map((sign) => (
                  <div key={sign.id} className="p-4 border border-border rounded-lg">
                    <h3 className="font-medium flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2 text-destructive" />
                      {sign.sign}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{sign.description}</p>
                  </div>
                ))}
                
                <div className="mt-4 p-4 bg-muted rounded-lg flex items-start">
                  <Heart className="h-5 w-5 text-aadhya-pink mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm">
                    हमेशा अपनी अंतर्ज्ञान पर भरोसा करें। अगर कुछ सही महसूस नहीं होता है, तो जांच कराना 
                    और आश्वस्त होना बेहतर है, बजाय संभावित चेतावनी संकेतों को अनदेखा करने के।
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HospitalSupport;
