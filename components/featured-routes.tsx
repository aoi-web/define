"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Fuel } from "lucide-react"

// Sample data for featured routes
const routes = [
  {
    id: 1,
    from: "New York",
    fromCode: "JFK",
    to: "London",
    toCode: "LHR",
    image: "/placeholder.svg?height=200&width=300",
    ecoSaving: "15%",
    price: "$499",
    fuelEfficiency: "High",
    co2Reduction: "1.2 tons",
  },
  {
    id: 2,
    from: "Los Angeles",
    fromCode: "LAX",
    to: "Tokyo",
    toCode: "HND",
    image: "/placeholder.svg?height=200&width=300",
    ecoSaving: "12%",
    price: "$799",
    fuelEfficiency: "Medium",
    co2Reduction: "2.4 tons",
  },
  {
    id: 3,
    from: "Chicago",
    fromCode: "ORD",
    to: "Paris",
    toCode: "CDG",
    image: "/placeholder.svg?height=200&width=300",
    ecoSaving: "18%",
    price: "$549",
    fuelEfficiency: "Very High",
    co2Reduction: "1.8 tons",
  },
  {
    id: 4,
    from: "San Francisco",
    fromCode: "SFO",
    to: "Sydney",
    toCode: "SYD",
    image: "/placeholder.svg?height=200&width=300",
    ecoSaving: "10%",
    price: "$999",
    fuelEfficiency: "Medium",
    co2Reduction: "3.1 tons",
  },
]

export default function FeaturedRoutes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {routes.map((route) => (
        <Card key={route.id} className="overflow-hidden">
          <div className="relative h-40">
            <Image
              src={route.image || "/placeholder.svg"}
              alt={`${route.from} to ${route.to}`}
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-green-600 hover:bg-green-700">
                <Leaf className="mr-1 h-3 w-3" />
                {route.ecoSaving} Fuel Saving
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold">
                <span className="text-gray-500">{route.fromCode}</span>
                <ArrowRight className="inline mx-2 h-4 w-4 text-gray-400" />
                <span className="text-gray-500">{route.toCode}</span>
              </div>
              <div className="text-xl font-bold text-blue-600">{route.price}</div>
            </div>
            <div className="text-sm mb-3">
              {route.from} to {route.to}
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <div className="flex items-center mr-4">
                <Fuel className="mr-1 h-4 w-4 text-blue-500" />
                <span>Efficiency: {route.fuelEfficiency}</span>
              </div>
              <div className="flex items-center">
                <Leaf className="mr-1 h-4 w-4 text-green-500" />
                <span>Saves {route.co2Reduction}</span>
              </div>
            </div>
            <Button className="w-full" variant="outline" asChild>
              <Link href={`/flights?from=${route.fromCode}&to=${route.toCode}`}>View Route Details</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

