
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShareLocationCard from "@/components/ShareLocationCard";
import CustomLocationCard from "@/components/CustomLocationCard";
import DecryptLocationCard from "@/components/DecryptLocationCard";
import SecurityFeatures from "@/components/SecurityFeatures";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Key, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-privshare-terminal-black">
      <Navbar />
      <Hero />
      
      <div className="py-12 bg-black/50 backdrop-filter backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-privshare-neon-green font-digital">
              {'>'} PrivShare Services {'<'}
            </h2>
            <p className="mt-4 text-lg text-privshare-neon-green/60 max-w-2xl mx-auto font-mono">
              $ sudo privshare --help
            </p>
          </div>
          
          <Tabs defaultValue="share-current" className="w-full max-w-4xl mx-auto">
            <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 bg-black/80 border border-privshare-neon-green/20 p-1 rounded-lg overflow-hidden mb-6">
              <TabsTrigger 
                value="share-current"
                className="data-[state=active]:bg-privshare-neon-green/10 text-privshare-neon-green/70 data-[state=active]:text-privshare-neon-green data-[state=active]:shadow-[0_0_10px_rgba(0,255,221,0.2)] font-mono py-3"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Share Current Location
              </TabsTrigger>
              <TabsTrigger 
                value="share-custom"
                className="data-[state=active]:bg-privshare-neon-green/10 text-privshare-neon-green/70 data-[state=active]:text-privshare-neon-green data-[state=active]:shadow-[0_0_10px_rgba(0,255,221,0.2)] font-mono py-3"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Share Custom Location
              </TabsTrigger>
              <TabsTrigger 
                value="decrypt"
                className="data-[state=active]:bg-privshare-neon-green/10 text-privshare-neon-green/70 data-[state=active]:text-privshare-neon-green data-[state=active]:shadow-[0_0_10px_rgba(0,255,221,0.2)] font-mono py-3"
              >
                <Key className="h-4 w-4 mr-2" />
                Decrypt Location
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="share-current" className="mt-0">
              <ShareLocationCard />
            </TabsContent>
            
            <TabsContent value="share-custom" className="mt-0">
              <CustomLocationCard />
            </TabsContent>
            
            <TabsContent value="decrypt" className="mt-0">
              <DecryptLocationCard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <SecurityFeatures />
      
      <footer className="bg-privshare-terminal-black border-t border-privshare-neon-green/20">
        <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-privshare-neon-green/50 font-mono">
            <span className="mr-2">{'>_'}</span>
            &copy; {new Date().getFullYear()} PrivShare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
