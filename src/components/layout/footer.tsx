import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { Container } from "@/components/ui/container"
import { NewsletterForm } from "./newsletter-form"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl">Kenya</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Modern marketing template for forward-thinking startups and agencies.
              Built with Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Testimonials</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground mb-2">
                Subscribe to our newsletter for the latest updates.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kenya Template. All rights reserved.
          </p>
          <div className="flex gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground"><Twitter className="size-5" /></Link>
            <Link href="#" className="hover:text-foreground"><Github className="size-5" /></Link>
            <Link href="#" className="hover:text-foreground"><Linkedin className="size-5" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
