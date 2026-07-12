import { useState } from "react";
import type { Product } from "../data/mockProducts";
import { Plus, Minus } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(1);
  };

  const handleIncrement = () => {
    setCount(c => c + 1);
  };

  const handleDecrement = () => {
    setCount(c => c - 1);
  };

  return (
    <div 
      className="w-36 flex-shrink-0 flex flex-col gap-2 rounded-2xl p-2 bg-card border border-border"
      data-testid={`product-card-${product.id}`}
    >
      <div className={`w-full aspect-square rounded-xl ${product.imageColor} relative overflow-hidden`}>
        {/* Placeholder image representation */}
      </div>
      
      <div className="flex flex-col px-1 flex-grow">
        <span className="text-xs text-muted-foreground">{product.unit}</span>
        <span className="text-sm font-semibold truncate mt-0.5">{product.name}</span>
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-sm font-bold text-primary">${product.price.toFixed(2)}</span>
          
          {count === 0 ? (
            <button 
              onClick={handleAdd}
              className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center active:scale-90 transition-transform"
              data-testid={`btn-add-${product.id}`}
            >
              <Plus className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center bg-primary rounded-lg h-8 px-1 text-primary-foreground">
              <button 
                onClick={handleDecrement}
                className="w-6 h-full flex items-center justify-center active:scale-90"
                data-testid={`btn-dec-${product.id}`}
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="text-xs font-bold w-4 text-center">{count}</span>
              <button 
                onClick={handleIncrement}
                className="w-6 h-full flex items-center justify-center active:scale-90"
                data-testid={`btn-inc-${product.id}`}
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
