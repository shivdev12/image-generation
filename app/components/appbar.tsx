import Link from "next/link"
import { MountainIcon } from "./mountainIcon"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Appbar()
{
    return (
        <div>
             <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="size-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="relative ml-auto flex-1 md:grow-0">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <Button variant="outline"  className="ml-4 rounded-md bg-purple-600 text-white" onClick={()=>{
          console.log("button clicked")
        }}>
          <span>Create</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8 ml-4">
              <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="px-4 py-2">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
        </div>
    )
}