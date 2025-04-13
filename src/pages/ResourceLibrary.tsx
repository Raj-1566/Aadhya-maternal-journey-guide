
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, Clock, BookOpen, Baby, HeartPulse, Home, ShoppingBag } from "lucide-react";
import { useState } from "react";

const ResourceLibrary = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Mock data for videos and resources
  const videos = [
    {
      id: 1,
      title: "पहली तिमाही के परिवर्तनों को समझना",
      thumbnail: "https://images.unsplash.com/photo-1535185384036-28bbc8035f28?q=80&w=720",
      duration: "12:35",
      category: "pregnancy",
      trimester: "first",
      description: "गर्भावस्था के पहले 12 सप्ताह के दौरान होने वाले प्रमुख शारीरिक और भावनात्मक परिवर्तनों के बारे में जानें।"
    },
    {
      id: 2,
      title: "गर्भावस्था के दौरान सक्रिय रहना",
      thumbnail: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?q=80&w=720",
      duration: "15:20",
      category: "health",
      trimester: "all",
      description: "आपकी गर्भावस्था यात्रा के दौरान सुरक्षित व्यायाम और गतिविधि की सिफारिशें।"
    },
    {
      id: 3,
      title: "बच्चे के लिए अपना घर तैयार करना",
      thumbnail: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=720",
      duration: "18:45",
      category: "preparation",
      trimester: "third",
      description: "आपके बच्चे के आने से पहले अपने घर को तैयार करने के आवश्यक चरण।"
    },
    {
      id: 4,
      title: "स्तनपान की मूल बातें",
      thumbnail: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=720",
      duration: "22:10",
      category: "childcare",
      trimester: "third",
      description: "अपने नवजात शिशु को स्तनपान कराने के बारे में आपको जानने की ज़रूरत है सब कुछ।"
    },
    {
      id: 5,
      title: "बच्चे के रोने को समझना",
      thumbnail: "https://images.unsplash.com/photo-1542884689-139467c0c47b?q=80&w=720",
      duration: "14:30",
      category: "childcare",
      trimester: "postpartum",
      description: "अलग-अलग रोने के माध्यम से आपका बच्चा क्या बताने की कोशिश कर रहा है, यह समझें।"
    },
    {
      id: 6,
      title: "दूसरी तिमाही के लक्षणों का प्रबंधन",
      thumbnail: "https://images.unsplash.com/photo-1531079997448-485eb7336f34?q=80&w=720",
      duration: "16:15",
      category: "health",
      trimester: "second",
      description: "पीठ दर्द और पैर की ऐंठन जैसे सामान्य दूसरी तिमाही के लक्षणों को संभालने के लिए टिप्स।"
    },
  ];
  
  const articles = [
    {
      id: 1,
      title: "गर्भावस्था के लिए पोषण गाइड",
      category: "health",
      readTime: "8 मिनट का पठन",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=720",
    },
    {
      id: 2,
      title: "अपनी प्रसव योजना बनाना",
      category: "preparation",
      readTime: "12 मिनट का पठन",
      image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=720",
    },
    {
      id: 3,
      title: "बच्चे की नींद अनुसूची: क्या उम्मीद करें",
      category: "childcare",
      readTime: "10 मिनट का पठन",
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=720",
    },
    {
      id: 4,
      title: "प्रसवोत्तर रिकवरी समयरेखा",
      category: "health",
      readTime: "15 मिनट का पठन",
      image: "https://images.unsplash.com/photo-1544767432-932e2c0f55d8?q=80&w=720",
    },
  ];
  
  const checklists = [
    {
      id: 1,
      title: "पहली तिमाही की टू-डू सूची",
      category: "pregnancy",
      items: 12,
      icon: HeartPulse,
    },
    {
      id: 2,
      title: "बच्चे की आवश्यक वस्तुओं की खरीदारी सूची",
      category: "preparation",
      items: 24,
      icon: ShoppingBag,
    },
    {
      id: 3,
      title: "नर्सरी सेटअप गाइड",
      category: "preparation",
      items: 15,
      icon: Home,
    },
    {
      id: 4,
      title: "नवजात देखभाल की मूल बातें",
      category: "childcare",
      items: 18,
      icon: Baby,
    },
  ];
  
  const filteredVideos = activeFilter === "all" 
    ? videos 
    : videos.filter(video => video.category === activeFilter || video.trimester === activeFilter);

  const categoryMap = {
    "pregnancy": "गर्भावस्था",
    "health": "स्वास्थ्य",
    "preparation": "तैयारी",
    "childcare": "शिशु देखभाल",
    "first": "पहली तिमाही",
    "second": "दूसरी तिमाही",
    "third": "तीसरी तिमाही",
    "postpartum": "प्रसवोत्तर"
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">शिक्षण संसाधन</h1>
        <p className="text-muted-foreground mt-1">आपकी यात्रा के लिए शैक्षिक वीडियो और गाइड</p>
      </div>
      
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="videos">वीडियो</TabsTrigger>
          <TabsTrigger value="articles">लेख</TabsTrigger>
          <TabsTrigger value="checklists">चेकलिस्ट</TabsTrigger>
        </TabsList>
        
        <TabsContent value="videos">
          <div className="mb-6 flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "all" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              सभी वीडियो
            </button>
            <button 
              onClick={() => setActiveFilter("pregnancy")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "pregnancy" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              गर्भावस्था की मूल बातें
            </button>
            <button 
              onClick={() => setActiveFilter("health")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "health" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              स्वास्थ्य और तंदुरुस्ती
            </button>
            <button 
              onClick={() => setActiveFilter("preparation")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "preparation" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              तैयारी
            </button>
            <button 
              onClick={() => setActiveFilter("childcare")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "childcare" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              शिशु देखभाल
            </button>
            <button 
              onClick={() => setActiveFilter("first")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "first" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              पहली तिमाही
            </button>
            <button 
              onClick={() => setActiveFilter("second")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "second" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              दूसरी तिमाही
            </button>
            <button 
              onClick={() => setActiveFilter("third")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "third" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              तीसरी तिमाही
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-14 w-14 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg line-clamp-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
                  <div className="flex mt-3">
                    <span className="bg-aadhya-purple/10 text-aadhya-purple text-xs rounded-full px-2 py-0.5">
                      {categoryMap[video.category]}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">इस फ़िल्टर के लिए कोई वीडियो नहीं मिला। अन्य श्रेणी आज़माएँ।</p>
              <button 
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-6 py-2 bg-aadhya-purple text-white rounded-full text-sm"
              >
                सभी वीडियो देखें
              </button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="articles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5 md:w-2/3 flex flex-col">
                    <h3 className="font-medium text-lg">{article.title}</h3>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="mt-auto pt-4">
                      <span className="bg-aadhya-blue/10 text-aadhya-blue text-xs rounded-full px-2 py-0.5">
                        {categoryMap[article.category]}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-aadhya-teal text-white rounded-full text-sm">
              सभी लेख ब्राउज़ करें
            </button>
          </div>
        </TabsContent>
        
        <TabsContent value="checklists">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklists.map((checklist) => (
              <Card key={checklist.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-aadhya-mint mb-4">
                    <checklist.icon className="h-8 w-8 text-aadhya-teal" />
                  </div>
                  <h3 className="font-medium text-lg">{checklist.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{checklist.items} आइटम</p>
                  <button className="mt-4 px-4 py-2 bg-aadhya-purple/10 text-aadhya-purple rounded-full text-sm w-full">
                    चेकलिस्ट देखें
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-muted rounded-lg p-6 mt-8">
            <h3 className="font-medium text-lg mb-2">कस्टम चेकलिस्ट बनाएं</h3>
            <p className="text-sm text-muted-foreground mb-4">
              अपनी गर्भावस्था या शिशु देखभाल यात्रा के किसी भी चरण के लिए अपनी व्यक्तिगत चेकलिस्ट बनाएं।
            </p>
            <button className="px-6 py-3 bg-aadhya-teal text-white rounded-full text-sm">
              नई चेकलिस्ट बनाएं
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceLibrary;
