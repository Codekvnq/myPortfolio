import { Button } from "@/components/ui/button";
import { TreePine, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center space-x-2">
        <TreePine className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold text-foreground">FamilyVerse</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          About
        </a>
        <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
          Support
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
          <Link to="/login">
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Link>
        </Button>
        <Button variant="heritage" size="sm" asChild>
          <Link to="/signup">
            <User className="h-4 w-4 mr-2" />
            Sign Up
          </Link>
        </Button>
      </div>
    </nav>
  );
};