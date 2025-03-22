import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function IntegrationsPage() {
  return (
    <Layout>
      <section className="container py-12 space-y-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold">Integrations & Audits</h1>
          <p className="text-muted-foreground">
            Explore our supported integrations and audits
          </p>
        </div>

        <div className="mx-auto max-w-4xl mt-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Supported Integrations</h2>
            <p className="text-muted-foreground mb-8">
              Each integration undergoes extensive technical scrutiny and comprehensive security checks to ensure reliability and safety.
            </p>

            <Tabs defaultValue="protocols" className="w-full">
              <TabsList className="grid w-full md:w-fit grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="protocols">PROTOCOLS</TabsTrigger>
                <TabsTrigger value="lockers">LOCKERS</TabsTrigger>
                <TabsTrigger value="tooling">TOOLING</TabsTrigger>
              </TabsList>
              
              <TabsContent value="protocols" className="mt-6">
                <div className="space-y-4">
                  {[
                    { name: "Jupiter", status: "PASS" },
                    { name: "Fluxbeam", status: "PASS" },
                    { name: "Meteora", status: "PASS" },
                    { name: "Metora DLMM", status: "PASS" },
                    { name: "Raydium", status: "PASS" },
                    { name: "Raydium CPMM", status: "PASS" },
                    { name: "Raydium CLMM", status: "PASS" },
                    { name: "Pump Fun", status: "PASS" },
                    { name: "Pump Fun AMM", status: "PASS" },
                    { name: "Moonshot", status: "PASS" },
                  ].map((protocol, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                              {/* Placeholder for icon */}
                            </div>
                            <span className="font-medium">{protocol.name}</span>
                          </div>
                          <span className="text-green-500 font-medium">{protocol.status}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="lockers" className="mt-6">
                <div className="space-y-4">
                  {[
                    { name: "Streamflow", status: "PASS" },
                    { name: "Flux Locker", status: "PASS" },
                    { name: "Bonfida Locker", status: "PASS" },
                    { name: "Raydium LP Locker", status: "PASS" },
                    { name: "Meteora LP Locker", status: "PASS" },
                    { name: "Meteora M3M3 Locker", status: "PASS" },
                    { name: "Jupiter Locker", status: "PASS" },
                    { name: "GeePad Locker", status: "PASS" },
                  ].map((locker, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                              {/* Placeholder for icon */}
                            </div>
                            <span className="font-medium">{locker.name}</span>
                          </div>
                          <span className="text-green-500 font-medium">{locker.status}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tooling" className="mt-6">
                <div className="space-y-4">
                  {[
                    { name: "Clerkbeat Tools", status: "PASS" },
                  ].map((tool, i) => (
                    <Card key={i} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                              {/* Placeholder for icon */}
                            </div>
                            <span className="font-medium">{tool.name}</span>
                          </div>
                          <span className="text-green-500 font-medium">{tool.status}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
} 