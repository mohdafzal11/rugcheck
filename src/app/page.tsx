import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"


export default function Home() {
  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center space-y-12 px-4 mx-auto">
        {/* Recently Verified section */}
        <div className="w-full mt-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Recently Verified</h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {[
              { name: "DISTRIBUTE", icon: "/token-icons/distribute.png" },
              { name: "C2R", icon: "/token-icons/c2r.png" },
              { name: "YTM", icon: "/token-icons/ytm.png" },
              { name: "IDX", icon: "/token-icons/idx.png" },
              { name: "DME-T", icon: "/token-icons/dme-t.png" },
              { name: "HARU", icon: "/token-icons/haru.png" },
            ].map((token, i) => (
              <Link href="#" key={i} className="flex flex-col items-center">
                <div className="relative h-10 w-10 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                    {/* Image placeholder */}
                    <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                  </div>
                </div>
                <span className="text-base font-medium underline">{token.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main section - RugCheck */}
        <div className="flex flex-col items-center justify-center text-center pt-8 pb-14 w-full max-w-3xl mx-auto">
          <h1 className="text-7xl font-bold mb-4">RugCheck</h1>
          <p className="text-2xl mb-12">
            Check Solana token markets
          </p>
          
          <div className="w-full max-w-md mb-8">
            <Input 
              type="text" 
              placeholder="Token Address" 
              className="h-12 rounded-md border-white/10 focus-visible:border-white/20 bg-[#1e1e24] mb-4 text-lg"
            />
            <Button className="h-12 w-full font-bold text-lg">
              Check
            </Button>
          </div>
          
          {/* Token domains notification */}
          <Link href="#" className="w-full max-w-md rounded-md border border-green-800 bg-green-950 p-4 text-green-500 hover:bg-green-900/30 transition-colors">
            <div className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <p className="text-base font-medium">Token domains are now available - Claim Now!</p>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
