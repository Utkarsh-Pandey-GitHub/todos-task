"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo({date,setDate}:{date:Date|undefined,setDate:React.Dispatch<React.SetStateAction<Date|undefined>>}) {
  

  return (
    <Popover >
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "max-w-[150px] justify-start text-left font-normal text-black m-0 px-1 py-0.5 border-opacity-0 rounded-lg h-fit bg-opacity-40",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="sm:mr-2 h-4 w-fit" />
          <div className="hidden sm:block">

          {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0  ">
        
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className=""
        />
      </PopoverContent>
    </Popover>
  )
}
