import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function VerifyPage() {
  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center space-y-12 px-4 mx-auto">
        <div className="w-full mt-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Connect Wallet</h1>
          <p className="text-xl mb-8 text-muted-foreground">You need to login to continue</p>
          
          <Button className="bg-indigo-600 hover:bg-indigo-700 mt-4 h-12 text-lg">
            Select Wallet
          </Button>
          
          <p className="mt-8 text-muted-foreground">
            Login to check more tokens with a higher rate limit.
          </p>
        </div>

        <div className="w-full max-w-xl mt-12">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Verify Token</CardTitle>
              <CardDescription>
                Submit your token for verification on RugCheck
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="token-address">Token Address</Label>
                <Input id="token-address" placeholder="Enter token address" className="h-12 rounded-md border-white/10 focus-visible:border-white/20 bg-[#1e1e24]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-name">Token Name</Label>
                <Input id="token-name" placeholder="Enter token name" className="h-12 rounded-md border-white/10 focus-visible:border-white/20 bg-[#1e1e24]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-symbol">Token Symbol</Label>
                <Input id="token-symbol" placeholder="Enter token symbol" className="h-12 rounded-md border-white/10 focus-visible:border-white/20 bg-[#1e1e24]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-description">Token Description</Label>
                <Input id="token-description" placeholder="Enter token description" className="h-12 rounded-md border-white/10 focus-visible:border-white/20 bg-[#1e1e24]" />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-lg font-bold">
                Submit for Verification
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
} 