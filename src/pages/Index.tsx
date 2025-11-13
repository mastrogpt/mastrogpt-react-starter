import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import openserverlessLogo from "@/assets/openserverless-logo.png";
import { toast } from "sonner";

const Index = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setIsLoading(true);
    
    // Simulate backend call
    setTimeout(() => {
      toast.success(`Hello ${name}! Backend connection successful! 🎉`);
      setIsLoading(false);
      setName("");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-md px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="animate-in fade-in zoom-in duration-500">
            <img
              src={openserverlessLogo}
              alt="Apache OpenServerless Logo"
              className="h-24 w-auto"
            />
          </div>

          {/* Welcome Card */}
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="rounded-2xl border bg-card p-8 shadow-elegant">
              <h1 className="mb-2 text-2xl font-bold text-foreground">
                Welcome
              </h1>
              <p className="mb-6 text-muted-foreground">
                Tell me your name to test backend
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-base transition-all focus:ring-2 focus:ring-primary"
                    disabled={isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full bg-gradient-to-r from-primary to-accent text-base font-semibold shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100"
                  disabled={isLoading}
                >
                  {isLoading ? "Testing..." : "Test Backend"}
                </Button>
              </form>
            </div>
          </div>

          {/* Info Text */}
          <p className="animate-in fade-in duration-1000 delay-300 text-center text-sm text-muted-foreground">
            Powered by Apache OpenServerless
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
