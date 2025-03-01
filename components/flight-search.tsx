"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Search, MapPin } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function FlightSearch() {
  const [tripType, setTripType] = useState("roundtrip")
  const [departDate, setDepartDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <RadioGroup defaultValue="roundtrip" className="flex space-x-4" onValueChange={setTripType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="roundtrip" id="roundtrip" />
          <Label htmlFor="roundtrip">Round Trip</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="oneway" id="oneway" />
          <Label htmlFor="oneway">One Way</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multicity" id="multicity" />
          <Label htmlFor="multicity">Multi-City</Label>
        </div>
      </RadioGroup>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <Input type="text" placeholder="From: City or Airport" className="pl-10" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <Input type="text" placeholder="To: City or Airport" className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="depart-date">Depart</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !departDate && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departDate ? format(departDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={departDate} onSelect={setDepartDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        {tripType === "roundtrip" && (
          <div>
            <Label htmlFor="return-date">Return</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !returnDate && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        )}

        <div>
          <Label htmlFor="passengers">Passengers</Label>
          <Select defaultValue="1">
            <SelectTrigger id="passengers">
              <SelectValue placeholder="Passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Passenger</SelectItem>
              <SelectItem value="2">2 Passengers</SelectItem>
              <SelectItem value="3">3 Passengers</SelectItem>
              <SelectItem value="4">4 Passengers</SelectItem>
              <SelectItem value="5">5+ Passengers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="class">Class</Label>
          <Select defaultValue="economy">
            <SelectTrigger id="class">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="premium">Premium Economy</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="first">First Class</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="eco-priority" className="rounded text-blue-600" />
          <Label htmlFor="eco-priority" className="text-sm">
            Prioritize eco-friendly routes
          </Label>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Search className="mr-2 h-4 w-4" />
          Search Flights
        </Button>
      </div>
    </div>
  )
}

