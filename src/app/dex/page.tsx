import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DexPage() {
  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center space-y-12 px-4 mx-auto">
        <div className="w-full mt-4 text-center">
          <h1 className="text-5xl font-bold mb-6">DEX</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Access decentralized exchange functionality
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Swap</CardTitle>
              <CardDescription>
                Swap tokens on the Solana blockchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect your wallet to access swap functionality.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Liquidity</CardTitle>
              <CardDescription>
                Provide liquidity to earn fees
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect your wallet to provide or remove liquidity.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Pools</CardTitle>
              <CardDescription>
                Explore active liquidity pools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                View pools with the highest volume and liquidity.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                View trading analytics and charts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect your wallet to view personalized analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
} 