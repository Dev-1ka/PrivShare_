
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, MapPin, Terminal, Check } from "lucide-react";

const CustomLocationCard = () => {
  const [recipient, setRecipient] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const { toast } = useToast();

  const handleShare = () => {
    if (!recipient) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a recipient email or username",
      });
      return;
    }

    if (!latitude || !longitude || !isValidCoordinates(latitude, longitude)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter valid coordinates",
      });
      return;
    }

    setIsSharing(true);
    
    // Simulate encryption and sharing process
    setTimeout(() => {
      setIsSharing(false);
      setIsShared(true);
      
      toast({
        title: "Custom Location Shared",
        description: `Your custom location has been encrypted and shared with ${recipient}`,
        action: (
          <div className="h-8 w-8 bg-privshare-dark-green rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-privshare-neon-green" />
          </div>
        ),
      });
      
      // Reset the state after 3 seconds
      setTimeout(() => {
        setIsShared(false);
        setRecipient("");
        setLatitude("");
        setLongitude("");
      }, 3000);
    }, 1500);
  };

  const isValidCoordinates = (lat: string, lng: string) => {
    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);
    return !isNaN(latNum) && !isNaN(lngNum) && 
           latNum >= -90 && latNum <= 90 && 
           lngNum >= -180 && lngNum <= 180;
  };

  return (
    <Card className="w-full max-w-md mx-auto cyber-card">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-2">
          <div className="h-12 w-12 bg-black/50 rounded-full flex items-center justify-center border border-privshare-neon-green/50 shadow-[0_0_10px_rgba(0,255,221,0.3)]">
            <MapPin className="h-6 w-6 text-privshare-neon-green" />
          </div>
        </div>
        <CardTitle className="text-xl text-center font-digital text-privshare-neon-green cyber-glow">
          {'</'} Share Custom Location {'>'}
        </CardTitle>
        <CardDescription className="text-center font-mono text-privshare-neon-green/70">
          Share any location by entering coordinates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="font-mono text-xs text-privshare-neon-green/60 mb-1">
            $ sudo share --custom-location --target
          </div>
          <Input
            type="text"
            placeholder="Email or username to share with"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="cyber-input"
            disabled={isSharing || isShared}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <div className="font-mono text-xs text-privshare-neon-green/60 mb-1">
              $ latitude
            </div>
            <Input
              type="text"
              placeholder="Latitude (e.g. 37.7749)"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="cyber-input"
              disabled={isSharing || isShared}
            />
          </div>
          <div className="space-y-2">
            <div className="font-mono text-xs text-privshare-neon-green/60 mb-1">
              $ longitude
            </div>
            <Input
              type="text"
              placeholder="Longitude (e.g. -122.4194)"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="cyber-input"
              disabled={isSharing || isShared}
            />
          </div>
        </div>
        
        {isShared && (
          <div className="bg-privshare-dark-green/30 text-privshare-neon-green p-3 rounded-md flex items-center space-x-2 animate-fadeIn border border-privshare-neon-green/30">
            <Check className="h-5 w-5 flex-shrink-0" />
            <span className="font-mono text-sm">Custom Location Encrypted & Sent Successfully</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full cyber-button relative overflow-hidden font-mono group"
          disabled={isSharing || isShared || !recipient || !latitude || !longitude || !isValidCoordinates(latitude, longitude)}
          onClick={handleShare}
        >
          {isSharing ? (
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 border-2 border-privshare-neon-green border-t-transparent rounded-full animate-spin"></div>
              <span>{'>'} Encrypting & Sharing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              {isShared ? 
                <Check className="h-5 w-5" /> : 
                <Terminal className="h-5 w-5 group-hover:animate-pulse" />
              }
              <span>{isShared ? "Shared Successfully" : "Encrypt & Share"}</span>
              {!isShared && <Lock className="h-4 w-4 ml-1" />}
            </div>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomLocationCard;
