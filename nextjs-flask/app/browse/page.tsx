import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import RestaurantGrid from "@/components/restaurant-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Browse() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Find your favorite restaurants
        </h1>
        <SearchBar />
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <RestaurantGrid />
          </TabsContent>
          <TabsContent value="featured">
            <RestaurantGrid filter="featured" />
          </TabsContent>
          <TabsContent value="nearby">
            <RestaurantGrid filter="nearby" />
          </TabsContent>
          <TabsContent value="popular">
            <RestaurantGrid filter="popular" />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
