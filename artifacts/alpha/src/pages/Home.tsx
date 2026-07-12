import { SearchBar } from "../components/SearchBar";
import { PromoBanner } from "../components/PromoBanner";
import { CategoryCard } from "../components/CategoryCard";
import { ProductCard } from "../components/ProductCard";
import { BottomNav } from "../components/BottomNav";
import { mockCategories } from "../data/mockCategories";
import { featuredProducts, bestSellers } from "../data/mockProducts";
import { Bell } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background pb-20 animate-in fade-in duration-300" data-testid="page-home">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50 pt-safe">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Delivering to</span>
            <span className="text-sm font-semibold flex items-center gap-1">
              Home - 10001 <span className="text-primary text-xs">▼</span>
            </span>
          </div>
          <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center active:scale-90 transition-transform">
            <Bell className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <div className="px-4 pb-3">
          <SearchBar />
        </div>
      </div>

      <div className="flex flex-col gap-6 px-4 py-4">
        <PromoBanner />

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Shop by Category</h3>
          </div>
          <div className="grid grid-cols-3 gap-y-6 gap-x-3">
            {mockCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Featured */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Featured</h3>
            <button className="text-sm font-medium text-primary active:opacity-70 transition-opacity">See all</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
            {featuredProducts.map(product => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Best Sellers */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Best Sellers</h3>
            <button className="text-sm font-medium text-primary active:opacity-70 transition-opacity">See all</button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar">
            {bestSellers.map(product => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
