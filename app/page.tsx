import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Clock, CreditCard, Globe, ChevronRight } from "lucide-react"
import FlightSearch from "@/components/flight-search"
import FeaturedRoutes from "@/components/featured-routes"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10" />
          <div
            className="relative h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
          >
            <div className="container relative z-20 mx-auto px-4 py-24 h-full flex flex-col justify-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Fly Smarter, <span className="text-green-400">Greener</span>, Faster
                </h1>
                <p className="mt-6 max-w-2xl text-xl text-white/90">
                  Book flights with optimized routes for maximum fuel efficiency, saving you money while reducing
                  environmental impact.
                </p>
              </div>

              <Card className="mt-8 w-full max-w-4xl bg-white/95 backdrop-blur">
                <CardContent className="p-6">
                  <Tabs defaultValue="flights" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="flights">Flights</TabsTrigger>
                      <TabsTrigger value="hotels">Hotels</TabsTrigger>
                      <TabsTrigger value="packages">Packages</TabsTrigger>
                    </TabsList>
                    <TabsContent value="flights">
                      <FlightSearch />
                    </TabsContent>
                    <TabsContent value="hotels">
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Hotel booking coming soon</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="packages">
                      <div className="text-center py-8">
                        <p className="text-muted-foreground">Package deals coming soon</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose EcoFlight?</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                We're revolutionizing air travel with smart technology that prioritizes efficiency and sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Eco-Friendly Routes</h3>
                  <p className="text-gray-600">
                    Our algorithm calculates the most fuel-efficient flight paths, reducing carbon emissions by up to
                    15%.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Time Optimization</h3>
                  <p className="text-gray-600">
                    We balance efficiency with speed, ensuring you reach your destination without unnecessary delays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
                  <p className="text-gray-600">
                    Efficient routes mean lower fuel costs, and we pass those savings directly to you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Routes */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Popular Eco-Routes</h2>
                <p className="mt-2 text-lg text-gray-600">Our most fuel-efficient and popular flight paths</p>
              </div>
              <Link href="/routes" className="text-blue-600 hover:text-blue-800 flex items-center">
                View all routes <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <FeaturedRoutes />
          </div>
        </section>

        {/* Global Coverage */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Global Coverage, Local Expertise</h2>
                <p className="text-xl text-blue-100 mb-8">
                  With partners in over 190 countries, we optimize flight paths across the globe while understanding
                  local conditions and requirements.
                </p>
                <div className="grid grid-cols-2 gap-6 text-lg">
                  <div className="flex items-center">
                    <div className="mr-2 text-green-400">✓</div>
                    <span>6,500+ Airports</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 text-green-400">✓</div>
                    <span>350+ Airlines</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 text-green-400">✓</div>
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 text-green-400">✓</div>
                    <span>Real-time Updates</span>
                  </div>
                </div>
                <Button className="mt-8 bg-white text-blue-900 hover:bg-blue-50">Explore Our Network</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="h-64 w-64 text-blue-500 opacity-20" />
                </div>
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/placeholder.svg?height=400&width=600')" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Fly Smarter?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of travelers who are reducing their carbon footprint while enjoying seamless travel
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Book a Flight Now
              </Button>
              <Button variant="outline">
                Learn About Our Technology
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}