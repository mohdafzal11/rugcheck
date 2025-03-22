"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center text-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/tokens"
            className="flex items-center text-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            TOKENS
          </Link>
          <Link
            href="/verify"
            className="flex items-center text-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            VERIFY
            <span className="ml-2 bg-blue-600 text-white text-xs px-1 rounded">NEW</span>
          </Link>
          <Link
            href="/integrations"
            className="flex items-center text-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            INTEGRATIONS
            <span className="ml-2 bg-blue-600 text-white text-xs px-1 rounded">NEW</span>
          </Link>
          <Link
            href="/dex"
            className="flex items-center text-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            DEX
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 