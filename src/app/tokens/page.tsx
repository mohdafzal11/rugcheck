import { Layout } from "@/components/layout";
import Link from "next/link";

interface TokenItemProps {
  name: string;
  imageSrc: string;
  label: string;
}

interface VoteItemProps {
  name: string;
  imageSrc: string;
  votes: number;
  status: "good" | "bad" | "mixed";
}

interface TimeItemProps {
  name: string;
  imageSrc: string;
  time: string;
}

interface ViewItemProps {
  name: string;
  imageSrc: string;
  description: string;
  views: number;
}

export default function TokensPage() {
  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center space-y-12 px-4 py-8 mx-auto">
        <div className="w-full max-w-5xl">
          <h1 className="text-5xl font-bold mb-8 text-center">Token Explorer</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-lg p-6 bg-black/30 backdrop-blur-sm hover:border-white/20 transition-all">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold">Recently Verified</h2>
                <svg className="ml-2 h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="space-y-5">
                <TokenItem 
                  name="BLACKSHIBAD" 
                  imageSrc="/token-icons/blackshibad.png" 
                  label="blackshibad.token" 
                />
                <TokenItem 
                  name="DISTRIBUTE" 
                  imageSrc="/token-icons/distribute.png" 
                  label="distribute.token" 
                />
                <TokenItem 
                  name="C2R" 
                  imageSrc="/token-icons/c2r.png" 
                  label="c2r.token" 
                />
                <TokenItem 
                  name="YTM" 
                  imageSrc="/token-icons/ytm.png" 
                  label="ytm.token" 
                />
                <TokenItem 
                  name="IDX" 
                  imageSrc="/token-icons/idx.png" 
                  label="idx.token" 
                />
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 bg-black/30 backdrop-blur-sm hover:border-white/20 transition-all">
              <h2 className="text-2xl font-bold mb-6">Community Votes</h2>
              <div className="space-y-5">
                <VoteItem 
                  name="BLACKSHIBAD" 
                  imageSrc="/token-icons/blackshibad.png" 
                  votes={2} 
                  status="mixed" 
                />
                <VoteItem 
                  name="sharktopus" 
                  imageSrc="/token-icons/sharktopus.png" 
                  votes={1} 
                  status="good" 
                />
                <VoteItem 
                  name="DEEZNUTZ" 
                  imageSrc="/token-icons/deeznutz.png" 
                  votes={1} 
                  status="good" 
                />
                <VoteItem 
                  name="Y2Y" 
                  imageSrc="/token-icons/y2y.png" 
                  votes={1} 
                  status="good" 
                />
                <VoteItem 
                  name="DME-T" 
                  imageSrc="/token-icons/dme-t.png" 
                  votes={1} 
                  status="good" 
                />
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 bg-black/30 backdrop-blur-sm hover:border-white/20 transition-all">
              <h2 className="text-2xl font-bold mb-6">New Tokens</h2>
              <div className="space-y-5">
                <TimeItem 
                  name="RCL" 
                  imageSrc="/token-icons/rcl.png" 
                  time="23:08:09" 
                />
                <TimeItem 
                  name="Aliseal" 
                  imageSrc="/token-icons/aliseal.png" 
                  time="23:08:07" 
                />
                <TimeItem 
                  name="$SLC" 
                  imageSrc="/token-icons/slc.png" 
                  time="23:08:07" 
                />
                <TimeItem 
                  name="OWP" 
                  imageSrc="/token-icons/owp.png" 
                  time="23:08:02" 
                />
                <TimeItem 
                  name="gig" 
                  imageSrc="/token-icons/gig.png" 
                  time="23:08:00" 
                />
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 bg-black/30 backdrop-blur-sm hover:border-white/20 transition-all">
              <h2 className="text-2xl font-bold mb-6">Most Viewed</h2>
              <div className="space-y-5">
                <ViewItem 
                  name="MUBARAK" 
                  imageSrc="/token-icons/mubarak.png" 
                  description="Mubarak on Solana" 
                  views={165}
                />
                <ViewItem 
                  name="AuraFarm" 
                  imageSrc="/token-icons/aurafarm.png" 
                  description="AuraFarming" 
                  views={82}
                />
                <ViewItem 
                  name="pwease" 
                  imageSrc="/token-icons/pwease.png" 
                  description="PWEASE" 
                  views={80}
                />
                <ViewItem 
                  name="WERISTRA" 
                  imageSrc="/token-icons/weristra.png" 
                  description="Weristra AI Supercomputer" 
                  views={62}
                />
                <ViewItem 
                  name="CLEVA" 
                  imageSrc="/token-icons/cleva.png" 
                  description="Cleva AI" 
                  views={61}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function TokenItem({ name, imageSrc, label }: TokenItemProps) {
  return (
    <Link href="#" className="flex justify-between items-center py-3 px-3 rounded-md hover:bg-white/5 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden shadow-md ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
            {name.substring(0, 2)}
          </div>
        </div>
        <span className="font-medium group-hover:text-indigo-400 transition-colors">{name}</span>
      </div>
      <div className="text-xs px-2 py-1 rounded bg-gray-800 group-hover:bg-gray-700 transition-colors">
        {label}
      </div>
    </Link>
  );
}

function VoteItem({ name, imageSrc, votes, status }: VoteItemProps) {
  const barColor = status === "good" ? "bg-gradient-to-r from-green-500 to-green-500" : 
                  status === "bad" ? "bg-gradient-to-r from-red-500 to-red-500" : 
                  "bg-gradient-to-r from-red-500 to-green-500";
  
  return (
    <Link href="#" className="flex justify-between items-center py-3 px-3 rounded-md hover:bg-white/5 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden shadow-md ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
            {name.substring(0, 2)}
          </div>
        </div>
        <span className="font-medium group-hover:text-indigo-400 transition-colors">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium bg-gray-800 px-2 py-1 rounded-md">{votes}</span>
        <div className="flex items-center">
          <span className="mr-1 text-orange-500 text-sm">🔥</span>
          <div className={`h-3 w-20 rounded-full ${barColor} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
          </div>
          <span className="ml-1 text-blue-500 text-sm">🚀</span>
        </div>
      </div>
    </Link>
  );
}

function TimeItem({ name, imageSrc, time }: TimeItemProps) {
  return (
    <Link href="#" className="flex justify-between items-center py-3 px-3 rounded-md hover:bg-white/5 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden shadow-md ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
            {name.substring(0, 2)}
          </div>
        </div>
        <span className="font-medium group-hover:text-indigo-400 transition-colors">{name}</span>
      </div>
      <div className="text-xs font-mono bg-gray-800 px-3 py-1.5 rounded-md group-hover:bg-indigo-900/40 transition-colors">
        {time}
      </div>
    </Link>
  );
}

function ViewItem({ name, imageSrc, description, views }: ViewItemProps) {
  return (
    <Link href="#" className="flex justify-between items-center py-3 px-3 rounded-md hover:bg-white/5 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden shadow-md ring-1 ring-white/10 group-hover:ring-indigo-500/50 transition-all">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
            {name.substring(0, 2)}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-medium group-hover:text-indigo-400 transition-colors">{name}</span>
          <span className="text-xs text-muted-foreground">{description}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium bg-gray-800 px-2 py-1 rounded-md">{views}</span>
        <div className="px-2 py-1 rounded text-xs bg-green-500/90 text-white flex items-center gap-1 shadow-lg shadow-green-500/20">
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Good
        </div>
      </div>
    </Link>
  );
} 