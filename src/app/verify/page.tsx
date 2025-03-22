import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function VerifyPage() {
  return (
    <Layout>
      <section className="container py-12 space-y-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">Connect Wallet</h1>
          <p className="text-muted-foreground">You need to login to continue</p>
          
          <Button className="bg-indigo-600 hover:bg-indigo-700 mt-4">
            Select Wallet
          </Button>
          
          <p className="mt-8 text-muted-foreground">
            Login to check more tokens with a higher rate limit.
          </p>
        </div>

        <div className="mx-auto max-w-xl mt-12">
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
                <Input id="token-address" placeholder="Enter token address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-name">Token Name</Label>
                <Input id="token-name" placeholder="Enter token name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-symbol">Token Symbol</Label>
                <Input id="token-symbol" placeholder="Enter token symbol" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-description">Token Description</Label>
                <Input id="token-description" placeholder="Enter token description" />
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Submit for Verification
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
} 