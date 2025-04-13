
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hospital, Phone, Clock, MapPin, ClipboardList, BookOpen, AlertTriangle, Heart } from "lucide-react";

const HospitalSupport = () => {
  // Mock data for hospital support
  const hospitalInfo = {
    name: "Mercy General Hospital",
    address: "2340 Medical Center Drive, Springfield, IL 62701",
    phone: "(555) 123-4567",
    emergencyPhone: "(555) 987-6543",
    hours: "24/7 Emergency Services",
    website: "https://mercygeneral.example.com",
    mapLink: "https://maps.example.com/mercygeneral",
  };
  
  const careTeam = [
    { 
      id: 1, 
      name: "Dr. Emily Johnson", 
      specialty: "OB-GYN",
      phone: "(555) 234-5678",
      email: "dr.johnson@example.com",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150"
    },
    { 
      id: 2, 
      name: "Dr. Michael Chen", 
      specialty: "Maternal-Fetal Medicine",
      phone: "(555) 345-6789",
      email: "dr.chen@example.com",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150"
    },
    { 
      id: 3, 
      name: "Nurse Lisa Williams", 
      specialty: "Maternity Nurse",
      phone: "(555) 456-7890",
      email: "nurse.williams@example.com",
      photo: "https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?q=80&w=150"
    },
  ];
  
  const hospitalBagItems = [
    { id: 1, category: "For You", items: [
      { id: 101, name: "Insurance card & ID", checked: true },
      { id: 102, name: "Birth plan (multiple copies)", checked: true },
      { id: 103, name: "Comfortable nightgown or pajamas", checked: false },
      { id: 104, name: "Slippers and socks", checked: false },
      { id: 105, name: "Toiletries and personal care items", checked: false },
      { id: 106, name: "Phone charger", checked: true },
      { id: 107, name: "Light snacks and drinks", checked: false },
    ]},
    { id: 2, category: "For Baby", items: [
      { id: 201, name: "Going-home outfit", checked: true },
      { id: 202, name: "Blankets", checked: false },
      { id: 203, name: "Diapers and wipes", checked: false },
      { id: 204, name: "Car seat (installed)", checked: true },
    ]},
    { id: 3, category: "For Partner", items: [
      { id: 301, name: "Change of clothes", checked: false },
      { id: 302, name: "Toiletries", checked: false },
      { id: 303, name: "Snacks and drinks", checked: false },
      { id: 304, name: "Entertainment (books, tablet, etc.)", checked: false },
    ]},
  ];
  
  const laborSigns = [
    { id: 1, sign: "Contractions", description: "Regular, painful contractions that become stronger and closer together." },
    { id: 2, sign: "Water Breaking", description: "Clear or pinkish fluid leaking or gushing from the vagina." },
    { id: 3, sign: "Bloody Show", description: "Pink or blood-tinged mucous discharge." },
    { id: 4, sign: "Lower Back Pain", description: "Persistent lower back pain and cramping that doesn't go away with position changes." },
  ];
  
  const emergencySigns = [
    { id: 1, sign: "Heavy Bleeding", description: "Soaking through a pad in less than an hour." },
    { id: 2, sign: "Severe Abdominal Pain", description: "Persistent, severe pain in your abdomen." },
    { id: 3, sign: "Decreased Fetal Movement", description: "Noticeable reduction in your baby's movements." },
    { id: 4, sign: "Severe Headache or Vision Changes", description: "Persistent headache, blurred vision, or seeing spots." },
    { id: 5, sign: "High Fever", description: "Temperature over 100.4°F (38°C)." },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">Hospital Support</h1>
        <p className="text-muted-foreground mt-1">Your hospital resources and birth planning</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hospital Information */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Your Hospital</CardTitle>
            <CardDescription>Where you'll deliver your baby</CardDescription>
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
                  <h3 className="font-medium">Contact Numbers</h3>
                  <p className="text-sm">Main: {hospitalInfo.phone}</p>
                  <p className="text-sm">Emergency: {hospitalInfo.emergencyPhone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-aadhya-blue mt-1" />
                <div>
                  <h3 className="font-medium">Hours</h3>
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
                  <span>View on Map</span>
                </a>
                
                <a 
                  href={hospitalInfo.website} 
                  target="_blank" 
                  className="flex items-center text-aadhya-teal hover:underline"
                >
                  <span>Visit Website</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Care Team */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Your Care Team</CardTitle>
            <CardDescription>The professionals caring for you</CardDescription>
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
                        Email
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
          <TabsTrigger value="hospital-bag">Hospital Bag Checklist</TabsTrigger>
          <TabsTrigger value="labor-signs">When to Go to Hospital</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Signs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hospital-bag">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ClipboardList className="h-5 w-5 mr-2 text-aadhya-purple" />
                <span>Hospital Bag Checklist</span>
              </CardTitle>
              <CardDescription>Items to prepare for your delivery</CardDescription>
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
                      Prepare your bag by Week 36 (or earlier) and keep it easily accessible.
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
                <span>When to Go to the Hospital</span>
              </CardTitle>
              <CardDescription>Signs that labor has begun</CardDescription>
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
                  <h3 className="font-medium text-aadhya-teal">General Guidelines:</h3>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>First-time mothers: Head to the hospital when contractions are 5 minutes apart, lasting 1 minute each, for 1 hour (5-1-1 rule).</li>
                    <li>If your water breaks, go to the hospital even if you're not having contractions.</li>
                    <li>Always call your healthcare provider before heading to the hospital.</li>
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
                <span>Pregnancy Emergency Signs</span>
              </CardTitle>
              <CardDescription>When to seek immediate medical attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm font-medium text-destructive">
                    If you experience any of these symptoms, call your healthcare provider 
                    immediately or go to the emergency room.
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
                    Always trust your instincts. If something doesn't feel right, it's better 
                    to get checked out and be reassured than to ignore potential warning signs.
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
