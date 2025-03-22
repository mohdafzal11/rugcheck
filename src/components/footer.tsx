import Link from 'next/link'
import { Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-4">
      <div className="mx-auto text-center">
        <div className="inline-flex flex-wrap justify-center items-center gap-4">
          <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
            RugCheck
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">
            ABOUT
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/tokens" className="text-sm text-white/60 hover:text-white transition-colors">
            TOKENS
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/launch-tools" className="text-sm text-white/60 hover:text-white transition-colors">
            LAUNCH TOOLS
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/api" className="text-sm text-white/60 hover:text-white transition-colors">
            API
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/integrations" className="text-sm text-white/60 hover:text-white transition-colors">
            INTEGRATIONS
          </Link>
          <Link href="https://twitter.com/rugcheckxyz" className="text-sm text-white/60 hover:text-white transition-colors">
            <Twitter className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
} 