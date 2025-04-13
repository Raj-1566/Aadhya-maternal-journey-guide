
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
      title: "Understanding First Trimester Changes",
      thumbnail: "https://images.unsplash.com/photo-1535185384036-28bbc8035f28?q=80&w=720",
      duration: "12:35",
      category: "pregnancy",
      trimester: "first",
      description: "Learn about the major physical and emotional changes during the first 12 weeks of pregnancy."
    },
    {
      id: 2,
      title: "Staying Active During Pregnancy",
      thumbnail: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?q=80&w=720",
      duration: "15:20",
      category: "health",
      trimester: "all",
      description: "Safe exercises and activity recommendations throughout your pregnancy journey."
    },
    {
      id: 3,
      title: "Preparing Your Home for Baby",
      thumbnail: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=720",
      duration: "18:45",
      category: "preparation",
      trimester: "third",
      description: "Essential steps to prepare your home before your baby arrives."
    },
    {
      id: 4,
      title: "Breastfeeding Basics",
      thumbnail: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=720",
      duration: "22:10",
      category: "childcare",
      trimester: "third",
      description: "Everything you need to know about breastfeeding your newborn."
    },
    {
      id: 5,
      title: "Understanding Baby's Cries",
      thumbnail: "https://images.unsplash.com/photo-1542884689-139467c0c47b?q=80&w=720",
      duration: "14:30",
      category: "childcare",
      trimester: "postpartum",
      description: "Learn to decode what your baby is trying to communicate through different cries."
    },
    {
      id: 6,
      title: "Managing Second Trimester Symptoms",
      thumbnail: "https://images.unsplash.com/photo-1531079997448-485eb7336f34?q=80&w=720",
      duration: "16:15",
      category: "health",
      trimester: "second",
      description: "Tips for handling common second trimester symptoms like back pain and leg cramps."
    },
  ];
  
  const articles = [
    {
      id: 1,
      title: "Nutrition Guide for Pregnancy",
      category: "health",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=720",
    },
    {
      id: 2,
      title: "Creating Your Birth Plan",
      category: "preparation",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=720",
    },
    {
      id: 3,
      title: "Baby Sleep Schedules: What to Expect",
      category: "childcare",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=720",
    },
    {
      id: 4,
      title: "Postpartum Recovery Timeline",
      category: "health",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1544767432-932e2c0f55d8?q=80&w=720",
    },
  ];
  
  const checklists = [
    {
      id: 1,
      title: "First Trimester To-Dos",
      category: "pregnancy",
      items: 12,
      icon: HeartPulse,
    },
    {
      id: 2,
      title: "Baby Essentials Shopping List",
      category: "preparation",
      items: 24,
      icon: ShoppingBag,
    },
    {
      id: 3,
      title: "Nursery Setup Guide",
      category: "preparation",
      items: 15,
      icon: Home,
    },
    {
      id: 4,
      title: "Newborn Care Basics",
      category: "childcare",
      items: 18,
      icon: Baby,
    },
  ];
  
  const filteredVideos = activeFilter === "all" 
    ? videos 
    : videos.filter(video => video.category === activeFilter || video.trimester === activeFilter);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-aadhya-purple">Learning Resources</h1>
        <p className="text-muted-foreground mt-1">Educational videos and guides for your journey</p>
      </div>
      
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="checklists">Checklists</TabsTrigger>
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
              All Videos
            </button>
            <button 
              onClick={() => setActiveFilter("pregnancy")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "pregnancy" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Pregnancy Basics
            </button>
            <button 
              onClick={() => setActiveFilter("health")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "health" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Health & Wellness
            </button>
            <button 
              onClick={() => setActiveFilter("preparation")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "preparation" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Preparation
            </button>
            <button 
              onClick={() => setActiveFilter("childcare")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "childcare" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Childcare
            </button>
            <button 
              onClick={() => setActiveFilter("first")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "first" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              First Trimester
            </button>
            <button 
              onClick={() => setActiveFilter("second")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "second" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Second Trimester
            </button>
            <button 
              onClick={() => setActiveFilter("third")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "third" 
                  ? "bg-aadhya-purple text-white" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Third Trimester
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
                      {video.category.charAt(0).toUpperCase() + video.category.slice(1)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No videos found for this filter. Try another category.</p>
              <button 
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-6 py-2 bg-aadhya-purple text-white rounded-full text-sm"
              >
                View All Videos
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
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-aadhya-teal text-white rounded-full text-sm">
              Browse All Articles
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
                  <p className="text-sm text-muted-foreground mt-1">{checklist.items} items</p>
                  <button className="mt-4 px-4 py-2 bg-aadhya-purple/10 text-aadhya-purple rounded-full text-sm w-full">
                    View Checklist
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-muted rounded-lg p-6 mt-8">
            <h3 className="font-medium text-lg mb-2">Create Custom Checklist</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Make your own personalized checklist for any stage of your pregnancy or childcare journey.
            </p>
            <button className="px-6 py-3 bg-aadhya-teal text-white rounded-full text-sm">
              Create New Checklist
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceLibrary;
