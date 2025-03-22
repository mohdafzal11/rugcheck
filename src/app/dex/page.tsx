import { Layout } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DexPage() {
  return (
    <Layout>
      <section className="container py-12 space-y-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">DEX</h1>
          <p className="text-muted-foreground">
            Access decentralized exchange functionality
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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