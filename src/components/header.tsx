"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { MobileNav } from "./mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-center px-4">
        <div className="flex w-full justify-center items-center relative">
          {/* Left side (mobile nav + logo on mobile) */}
          <div className="md:absolute md:left-0 flex items-center">
            <div className="md:hidden">
              <MobileNav />
            </div>
            <Link href="/" className="flex items-center gap-2 md:hidden">
              <div className="relative h-8 w-8">
                <Image 
                  src="/logo.jpg" 
                  alt="RugCheck Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-xl">RugCheck</span>
            </Link>
          </div>
          
          {/* Center nav with logo on the left */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <Link href="/" className="flex items-center gap-2 mr-4">
              <div className="relative h-8 w-8">
                <Image 
                  src="/logo.jpg" 
                  alt="RugCheck Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-xl">RugCheck</span>
            </Link>
            
            <nav className="flex items-center gap-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">
                HOME
              </Link>
              <Link href="/tokens" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">
                TOKENS
              </Link>
              <Link href="/verify" className="text-white/60 hover:text-white transition-colors relative text-sm tracking-wide">
                VERIFY
                <span className="absolute -top-1.5 -right-6 bg-blue-600 text-white text-[10px] px-1 rounded leading-3">NEW</span>
              </Link>
              <Link href="/integrations" className="text-white/60 hover:text-white transition-colors relative text-sm tracking-wide">
                INTEGRATIONS
                <span className="absolute -top-1.5 -right-6 bg-blue-600 text-white text-[10px] px-1 rounded leading-3">NEW</span>
              </Link>
              <Link href="/dex" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">
                DEX
              </Link>
            </nav>
          </div>
          
          {/* Right side (buttons only) */}
          <div className="md:absolute md:right-0 flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-purple-700 hover:bg-purple-800 text-white px-4 text-base">
              Select Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 