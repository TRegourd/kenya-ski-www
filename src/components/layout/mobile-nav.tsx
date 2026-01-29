"use client"

import * as React from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  items: { name: string; href: string }[]
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background p-6 shadow-xl border-l sm:max-w-sm"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-bold">Menu</span>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="size-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            
            <nav className="flex flex-col gap-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-2 py-3 text-lg font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t">
                <Button className="w-full" size="lg">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
