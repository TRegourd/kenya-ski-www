"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { MobileNav } from "@/components/layout/mobile-nav"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
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
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">K</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">Kenya</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm">Get Started</Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="size-5" />
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
