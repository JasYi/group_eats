import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          FoodDelivery
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-foreground hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/browse"
                className="text-foreground hover:text-primary">
                Restaurants
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground hover:text-primary">
                Orders
              </Link>
            </li>
            <li>
              <Link href="#" className="text-foreground hover:text-primary">
                <ShoppingBag className="inline-block" size={20} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">Restaurants</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#">Cart</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
