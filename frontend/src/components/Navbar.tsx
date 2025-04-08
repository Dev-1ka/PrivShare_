
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Lock, Terminal, Menu, X } from "lucide-react";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-privshare-terminal-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-privshare-neon-green/30 shadow-[0_0_10px_rgba(0,255,221,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Terminal className="h-6 w-6 text-privshare-neon-green mr-1" />
              <Lock className="h-6 w-6 text-privshare-neon-green" />
              <span className="ml-2 text-lg font-digital text-privshare-neon-green cyber-glow">PrivShare</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="inline-flex items-center px-1 pt-1 text-sm font-mono text-privshare-neon-green/70 hover:text-privshare-neon-green border-b-2 border-transparent hover:border-privshare-neon-green transition-colors duration-200"
                >
                  {`> ${link.name}`}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="sm:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-privshare-neon-green hover:text-privshare-neon-green/70 hover:bg-transparent"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className={cn("sm:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-sm border-t border-privshare-neon-green/20">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block pl-3 pr-4 py-2 text-base font-mono text-privshare-neon-green/70 hover:text-privshare-neon-green hover:bg-privshare-neon-green/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {`> ${link.name}`}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
