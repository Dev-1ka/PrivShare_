
import { Button } from "@/components/ui/button";
import { Shield, Lock, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-privshare-matrix-black py-16 sm:py-24 matrix-bg">
      <div className="absolute inset-0 opacity-30">
        <div className="matrix-rain"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-black/30 p-3 border border-privshare-neon-green/50 shadow-[0_0_15px_rgba(0,255,221,0.3)]">
              <Lock className="h-8 w-8 text-privshare-neon-green animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-privshare-neon-green sm:text-5xl animate-slideUp font-digital cyber-glow">
            <Terminal className="inline h-8 w-8 mr-2" />
            <span className="font-mono tracking-widest">&lt;</span>PrivShare<span className="font-mono tracking-widest">/&gt;</span>
          </h1>
          <p className="mt-2 text-xl font-semibold text-privshare-neon-green/80 animate-slideUp font-mono" style={{ animationDelay: "0.1s" }}>
            Share Smart. Share Safe.
          </p>
          <p className="mt-6 text-lg leading-8 text-privshare-neon-green/60 animate-slideUp font-mono" style={{ animationDelay: "0.2s" }}>
            [<span className="text-privshare-neon-green">root@secure</span>] $ We never store your location. Your data stays with you.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <Link to="/how-it-works">
              <Button className="cyber-button group">
                <span className="group-hover:animate-pulse">{'>'}</span> Learn how it works <span className="group-hover:animate-pulse">{'<'}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
