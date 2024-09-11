import { useState } from "react"
import { Search, CalendarIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

export default function EnhancedFilterComponent() {
  const [date, setDate] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  const handleReset = () => {
    // Reset all filters here
    setDate({ from: undefined, to: undefined })
    // Reset other state variables as needed
  }

  const handleApplyFilters = () => {
    // Apply filters logic here
    console.log("Filters applied")
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-[#111] text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Content Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute  left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search keywords..." className="pl-8 bg-[#111]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category" className="bg-[#111]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-[#111] text-white">
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="articles">Articles</SelectItem>
                  <SelectItem value="blogs">Blogs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Date Range</Label>
              <Popover>
                <PopoverTrigger asChild className="bg-[#111]">
                  <Button
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${
                      !date.from && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#111] text-white" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date.from}
                    selected={date}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {["Technology", "Health", "Finance", "Sports", "Entertainment", "Science"].map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox id={tag.toLowerCase()} className="border-white" />
                  <Label htmlFor={tag.toLowerCase()}>{tag}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sort-by">Sort By</Label>
            <Select>
              <SelectTrigger id="sort-by" className="bg-[#111]">
                <SelectValue placeholder="Select sorting option" />
              </SelectTrigger>
              <SelectContent className="bg-[#111] text-white">
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" className="bg-[#111]" onClick={handleReset}>Reset Filters</Button>
            <Button className="bg-[#eee] text-black hover:bg-[#ccc]" onClick={handleApplyFilters}>Apply Filters</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}