import { Button } from "@/components/ui/button";
import { TreePine, Users, Shield, Search } from "lucide-react";
import heroImage from "@/assets/family-tree-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover Your
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Family Heritage</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build, explore, and share your family tree with powerful tools designed to preserve your legacy for generations to come.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Your Tree
                <TreePine className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Demo
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-family-sage-light">
                  <Users className="h-5 w-5 text-family-sage" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Unlimited Members</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-trust-blue-light">
                  <Shield className="h-5 w-5 text-trust-blue" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-heritage-brown-light">
                  <Search className="h-5 w-5 text-heritage-brown" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Smart Search</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-heritage">
              <img 
                src={heroImage} 
                alt="Beautiful family tree representing heritage and connections"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">1,247 families connected today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};