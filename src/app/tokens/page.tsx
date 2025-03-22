import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TokensPage() {
  return (
    <Layout>
      <section className="container py-12 space-y-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">Tokens</h1>
          <p className="text-muted-foreground">Browse and verify Solana tokens</p>
        </div>

        <Tabs defaultValue="recently-verified" className="w-full">
          <TabsList className="grid w-full md:w-fit grid-cols-3 md:grid-cols-4">
            <TabsTrigger value="recently-verified">Recently Verified</TabsTrigger>
            <TabsTrigger value="community-votes">Community Votes</TabsTrigger>
            <TabsTrigger value="new-tokens">New Tokens</TabsTrigger>
            <TabsTrigger value="most-viewed">Most Viewed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recently-verified" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "DISTRIBUTE", domain: "distribute.token" },
                { name: "C2R", domain: "c2r.token" },
                { name: "YTM", domain: "ytm.token" },
                { name: "IDX", domain: "idx.token" },
                { name: "DME-T", domain: "dme-t.token" },
              ].map((token, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          {/* Placeholder for token icon */}
                        </div>
                        <span className="font-medium">{token.name}</span>
                      </div>
                      <div className="text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">
                        {token.domain}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="community-votes" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "LAI", votes: 2, status: "good" },
                { name: "$ROGERS", votes: 1, status: "good" },
                { name: "NHI", votes: 1, status: "good" },
                { name: "MINOR", votes: 1, status: "bad" },
              ].map((token, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          {/* Placeholder for token icon */}
                        </div>
                        <span className="font-medium">{token.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{token.votes}</span>
                        <div className={`h-4 w-16 rounded ${token.status === 'good' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="new-tokens" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "JOY", time: "00:47:04" },
                { name: "letcoin", time: "00:47:01" },
              ].map((token, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          {/* Placeholder for token icon */}
                        </div>
                        <span className="font-medium">{token.name}</span>
                      </div>
                      <div className="text-xs">
                        {token.time}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="most-viewed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "PETER", description: "Peter Bergmann", views: 97, status: "good" },
                { name: "GREASE", description: "ELON NEW RESTAURANT", views: 79, status: "good" },
                { name: "CREATE", description: "Creation Markets", views: 77, status: "good" },
              ].map((token, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          {/* Placeholder for token icon */}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{token.name}</span>
                          <span className="text-xs text-muted-foreground">{token.description}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{token.views}</span>
                        <div className="px-2 py-1 rounded text-xs bg-green-500 text-white">
                          Good
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
} 