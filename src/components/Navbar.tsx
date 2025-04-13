
import { Bell, User } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Navbar = () => {
  const [notifications, setNotifications] = useState(3);

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-border py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <h1 className="text-xl font-display text-aadhya-purple">आध्या</h1>
        </div>
        
        <div className="flex-1 md:flex-initial md:ml-auto">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-aadhya-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
            
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" />
                  <AvatarFallback>SN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-56 mr-4">
                <div className="space-y-2">
                  <h4 className="font-medium">सारा नेल्सन</h4>
                  <p className="text-sm text-muted-foreground">गर्भावस्था का 24 सप्ताह</p>
                  <hr className="my-2" />
                  <div className="space-y-1">
                    <button className="w-full text-left text-sm py-1.5 px-2 rounded-md hover:bg-muted transition-colors">
                      मेरी प्रोफाइल
                    </button>
                    <button className="w-full text-left text-sm py-1.5 px-2 rounded-md hover:bg-muted transition-colors">
                      सेटिंग्स
                    </button>
                    <button className="w-full text-left text-sm py-1.5 px-2 rounded-md hover:bg-destructive/10 text-destructive transition-colors">
                      साइन आउट
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
