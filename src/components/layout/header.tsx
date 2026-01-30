"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { MobileNav } from "@/components/layout/mobile-nav"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  // For the new Hero design (Split), the header sits on a white/light background.
  // So we default to dark text. 
  // However, on scroll, we want a solid glass effect.

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Mark */}
          <div className="relative size-12 flex items-center justify-center rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-all">
             <Image 
               src="/images/logo.jpg" 
               alt="Kenya Ski Federation Logo" 
               fill 
               className="object-cover"
             />
          </div>

          <div className="flex flex-col justify-center">
            <span className={cn("font-bold text-lg leading-none tracking-tight", isScrolled ? "text-foreground" : "text-foreground")}>
              Kenya Ski
            </span>
            <span className={cn("text-xs font-medium tracking-widest uppercase opacity-70", isScrolled ? "text-muted-foreground" : "text-muted-foreground")}>
              Federation
            </span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
              {/* Animated underline */}
              <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 transition-transform origin-left group-hover:scale-x-100", 
                  pathname === item.href ? "scale-x-100" : ""
              )}/>
            </Link>
          ))}
          
          <div className="hidden lg:block w-px h-6 bg-border mx-2" />

          {/* Minimal Support link instead of SaaS button */}
          <Link href="/contact" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Support the Team
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="size-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </Container>

      <MobileNav 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        items={navItems} 
      />
    </header>
  )
}
