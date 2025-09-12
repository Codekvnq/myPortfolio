import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { TreePine, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return;
    
    setIsLoading(true);
    // OTP verification logic will be handled by Supabase integration
    
    // Simulate API call
    setTimeout(() => {
      console.log("OTP verification attempt:", otp);
      setIsLoading(false);
      // On success, redirect to dashboard
      // On failure, show error and allow retry
    }, 2000);
  };

  const handleResend = async () => {
    setIsResending(true);
    // Resend OTP logic will be handled by Supabase integration
    
    setTimeout(() => {
      setIsResending(false);
      console.log("OTP resent");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">FamilyTree</span>
          </div>
        </div>

        <Card className="shadow-heritage border-border/50">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Verify Your Account</CardTitle>
            <CardDescription>
              We've sent a 6-digit verification code to your email address
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                variant="heritage" 
                size="lg"
                disabled={otp.length !== 6 || isLoading}
              >
                {isLoading ? "Verifying..." : "Verify Account"}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <div className="text-sm text-muted-foreground">
                Didn't receive the code?
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleResend}
                disabled={isResending}
                className="text-primary"
              >
                {isResending ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Resending...
                  </>
                ) : (
                  "Resend Code"
                )}
              </Button>
            </div>

            <div className="mt-6 text-center">
              <div className="text-xs text-muted-foreground">
                This verification step ensures the security of your family data
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link 
            to="/signup" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to signup
          </Link>
        </div>
      </div>
    </div>
  );
}