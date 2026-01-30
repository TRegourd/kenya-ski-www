import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react"
import { Container } from "@/components/ui/container"


export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl">Kenya Ski Federation</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The official governing body for Alpine and Nordic skiing in Kenya. 
              Developing champions from the ground up.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Federation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
               <li className="flex items-center text-muted-foreground space-x-2">
                 <MapPin className="size-4" />
                 <span>300100-2299 Eldoret, Kenya</span>
               </li>
               <li className="flex items-center text-muted-foreground space-x-2">
                 <Mail className="size-4" />
                 <Link href="/contact" className="hover:text-foreground">Email Us</Link>
               </li>
            </ul>
          </div>

        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kenya Ski Federation. All rights reserved.
          </p>
          <div className="flex gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground"><Twitter className="size-5" /></Link>
            <Link href="#" className="hover:text-foreground"><Instagram className="size-5" /></Link>
            <Link href="#" className="hover:text-foreground"><Facebook className="size-5" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
