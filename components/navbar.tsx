"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Plane, Menu, X, Phone, User } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">EcoFlight</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/flights" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Flights
          </Link>
          <Link href="/routes" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Eco Routes
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="flex items-center text-sm font-medium text-blue-600">
            <Phone className="mr-2 h-4 w-4" />
            <span>Support</span>
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Plane className="h-6 w-6 text-blue-600" />
                  <span className="text-xl font-bold">EcoFlight</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/flights"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Flights
                </Link>
                <Link
                  href="/routes"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Eco Routes
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="mt-auto border-t pt-4 flex flex-col gap-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

