
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, Unlock, Terminal, Check } from "lucide-react";

const DecryptLocationCard = () => {
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedLocation, setDecryptedLocation] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const { toast } = useToast();

  const handleDecrypt = () => {
    if (!encryptedText) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter an encrypted location message",
      });
      return;
    }

    setIsDecrypting(true);
    
    // Simulate decryption process
    setTimeout(() => {
      setIsDecrypting(false);
      
      // For demo purposes, we'll just show a mock location
      // In a real app, this would actually decrypt the message
      const mockLocation = {
        latitude: "37.7749° N",
        longitude: "122.4194° W",
        address: "San Francisco, CA, USA"
      };
      
      setDecryptedLocation(`${mockLocation.latitude}, ${mockLocation.longitude}\n${mockLocation.address}`);
      
      toast({
        title: "Location Decrypted",
        description: "The location has been successfully decrypted",
        action: (
          <div className="h-8 w-8 bg-privshare-dark-green rounded-full flex items-center justify-center">
            <Check className="h-5 w-5 text-privshare-neon-green" />
          </div>
        ),
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto cyber-card">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-2">
          <div className="h-12 w-12 bg-black/50 rounded-full flex items-center justify-center border border-privshare-neon-green/50 shadow-[0_0_10px_rgba(0,255,221,0.3)]">
            <Key className="h-6 w-6 text-privshare-neon-green" />
          </div>
        </div>
        <CardTitle className="text-xl text-center font-digital text-privshare-neon-green cyber-glow">
          {'</'} Decrypt Shared Location {'>'}
        </CardTitle>
        <CardDescription className="text-center font-mono text-privshare-neon-green/70">
          Decrypt a location that was shared with you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="font-mono text-xs text-privshare-neon-green/60 mb-1">
            $ sudo decrypt --location --input
          </div>
          <Textarea
            placeholder="Paste encrypted location message here"
            value={encryptedText}
            onChange={(e) => setEncryptedText(e.target.value)}
            className="cyber-input min-h-[100px]"
            disabled={isDecrypting}
          />
        </div>
        
        {decryptedLocation && (
          <div className="bg-privshare-dark-green/30 text-privshare-neon-green p-3 rounded-md space-y-2 animate-fadeIn border border-privshare-neon-green/30">
            <div className="font-mono text-xs text-privshare-neon-green/60">
              $ cat decrypted_location.txt
            </div>
            <pre className="font-mono text-sm whitespace-pre-wrap break-words">
              {decryptedLocation}
            </pre>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full cyber-button relative overflow-hidden font-mono group"
          disabled={isDecrypting || !encryptedText}
          onClick={handleDecrypt}
        >
          {isDecrypting ? (
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 border-2 border-privshare-neon-green border-t-transparent rounded-full animate-spin"></div>
              <span>{'>'} Decrypting...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              {decryptedLocation ? <Check className="h-5 w-5" /> : <Terminal className="h-5 w-5 group-hover:animate-pulse" />}
              <span>{decryptedLocation ? "Decrypted Successfully" : "Decrypt Location"}</span>
              {!decryptedLocation && <Unlock className="h-4 w-4 ml-1" />}
            </div>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DecryptLocationCard;
