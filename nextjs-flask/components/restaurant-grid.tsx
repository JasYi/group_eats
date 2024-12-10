import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, ShoppingBag } from "lucide-react";

// Mock data for restaurants
const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "20-30 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    nearby: false,
    popular: true,
  },
  {
    id: 2,
    name: "Sushi Haven",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "25-35 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    nearby: true,
    popular: true,
  },
  {
    id: 3,
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.3,
    deliveryTime: "30-40 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    nearby: true,
    popular: false,
  },
  {
    id: 4,
    name: "Taco Town",
    cuisine: "Mexican",
    rating: 4.6,
    deliveryTime: "15-25 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    nearby: false,
    popular: true,
  },
  {
    id: 5,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.4,
    deliveryTime: "25-35 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    nearby: false,
    popular: false,
  },
  {
    id: 6,
    name: "Noodle Nook",
    cuisine: "Chinese",
    rating: 4.2,
    deliveryTime: "20-30 min",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    nearby: true,
    popular: false,
  },
];

interface RestaurantGridProps {
  filter?: "featured" | "nearby" | "popular";
}

export default function RestaurantGrid({ filter }: RestaurantGridProps) {
  const filteredRestaurants = filter
    ? restaurants.filter((restaurant) => restaurant[filter])
    : restaurants;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <Card key={restaurant.id} className="overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>{restaurant.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="mb-2">
              {restaurant.cuisine}
            </Badge>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" size={16} />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1" size={16} />
                <span>{restaurant.deliveryTime}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <ShoppingBag className="mr-2" size={16} />
              Order Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
