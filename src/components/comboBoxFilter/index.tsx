'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from 'lucide-react'

type tComboBoxFilter = {
  placeholder:string,
  itemSelected: string,
  selectItemFunction: (item:string) => void,
  itenslist:string[],
  typePlaceHolder: string
}

export default function ComboBoxFilter({itemSelected,itenslist,placeholder, typePlaceHolder,selectItemFunction}:tComboBoxFilter) {
  const [open, setOpen] = useState(false)

  return (
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild id='filter' className='w-fit'>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] h-10 justify-between border-2 border-neutral-400 focus-within:border-neutral-700 text10 font-bold"
        >
          {itemSelected
            ? itenslist.find((item) => item === itemSelected)
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={typePlaceHolder} />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {itenslist.map((item) => (
                <CommandItem
                  key={item}
                  value={item}
                  onSelect={() => {
                    selectItemFunction(item)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      itemSelected === item ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
