import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Leaf, Plane, Search, Fuel, Clock, Info } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RouteMap from "@/components/route-map"

export default function RoutesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-blue-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Eco-Optimized Flight Routes</h1>
              <p className="text-lg text-gray-600">
                Discover our fuel-efficient flight paths that reduce emissions while getting you to your destination
                safely and on time.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="relative">
                    <Label htmlFor="from">From</Label>
                    <Input id="from" placeholder="Departure city or airport" />
                  </div>
                  <div className="relative">
                    <Label htmlFor="to">To</Label>
                    <Input id="to" placeholder="Arrival city or airport" />
                  </div>
                </div>
                <Button className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Find Eco Routes
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <h2 className="text-2xl font-bold mb-6">Popular Routes</h2>
                <div className="space-y-4">
                  {[
                    { from: "New York", to: "London", fromCode: "JFK", toCode: "LHR", saving: "15%" },
                    { from: "Los Angeles", to: "Tokyo", fromCode: "LAX", toCode: "HND", saving: "12%" },
                    { from: "Chicago", to: "Paris", fromCode: "ORD", toCode: "CDG", saving: "18%" },
                    { from: "San Francisco", to: "Sydney", fromCode: "SFO", toCode: "SYD", saving: "10%" },
                    { from: "Miami", to: "Madrid", fromCode: "MIA", toCode: "MAD", saving: "14%" },
                  ].map((route, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">
                              {route.from} to {route.to}
                            </div>
                            <div className="text-sm text-gray-500">
                              {route.fromCode} <ArrowRight className="inline h-3 w-3" /> {route.toCode}
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            <Leaf className="mr-1 h-3 w-3" />
                            {route.saving}
                          </Badge>
                        </div>
                        <Button variant="link" className="p-0 h-auto mt-2" asChild>
                          <Link href={`/routes/${route.fromCode}-${route.toCode}`}>View details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-6">Route Visualization</h2>
                <Card>
                  <CardContent className="p-6">
                    <Tabs defaultValue="map">
                      <TabsList className="mb-4">
                        <TabsTrigger value="map">Map View</TabsTrigger>
                        <TabsTrigger value="comparison">Efficiency Comparison</TabsTrigger>
                      </TabsList>
                      <TabsContent value="map">
                        <div className="aspect-video relative bg-gray-100 rounded-md overflow-hidden">
                          <RouteMap />
                        </div>
                        <div className="mt-4 text-sm text-gray-600">
                          <p>The map shows optimized flight paths that consider:</p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Jet stream utilization</li>
                            <li>Weather pattern avoidance</li>
                            <li>Optimal cruising altitude</li>
                            <li>Air traffic congestion</li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="comparison">
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="bg-red-50 border-red-200">
                              <CardContent className="p-4">
                                <h3 className="font-bold mb-2">Standard Route</h3>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span>Fuel Consumption:</span>
                                    <span>100%</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>CO2 Emissions:</span>
                                    <span>100%</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Flight Time:</span>
                                    <span>Standard</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="bg-green-50 border-green-200">
                              <CardContent className="p-4">
                                <h3 className="font-bold mb-2">Eco Route</h3>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span>Fuel Consumption:</span>
                                    <span className="text-green-600 font-medium">-15%</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>CO2 Emissions:</span>
                                    <span className="text-green-600 font-medium">-18%</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Flight Time:</span>
                                    <span>+5% (minimal increase)</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-md flex items-start">
                            <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <p className="text-sm">
                              Our eco routes typically add only 10-20 minutes to a long-haul flight while saving
                              hundreds of gallons of fuel and significantly reducing carbon emissions.
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">How Our Route Optimization Works</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                          <Plane className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Advanced Algorithms</h3>
                        <p className="text-gray-600">
                          Our proprietary algorithms analyze thousands of variables to find the most fuel-efficient
                          route.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                          <Fuel className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Real-time Adjustments</h3>
                        <p className="text-gray-600">
                          We continuously monitor weather and air traffic to make real-time adjustments for optimal
                          efficiency.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                          <Clock className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Time Optimization</h3>
                        <p className="text-gray-600">
                          We balance fuel efficiency with time considerations to ensure minimal impact on your schedule.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Fly Smarter?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Book your next flight with our eco-optimized routes and make a positive impact on the environment without
              compromising on convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Search Flights Now
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Our Technology
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

