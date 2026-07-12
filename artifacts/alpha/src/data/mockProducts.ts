export interface Product {
  id: string;
  name: string;
  price: number;
  imageColor: string;
  unit: string;
  category: string;
}

export const mockProducts: Product[] = [
  { id: "1", name: "Fresh Milk", price: 2.49, imageColor: "bg-blue-900/50", unit: "1 L", category: "dairy" },
  { id: "2", name: "Whole Wheat Bread", price: 3.99, imageColor: "bg-amber-900/50", unit: "1 Loaf", category: "groceries" },
  { id: "3", name: "Organic Bananas", price: 4.50, imageColor: "bg-yellow-900/50", unit: "1 kg", category: "fruits" },
  { id: "4", name: "Potato Chips", price: 1.99, imageColor: "bg-red-900/50", unit: "150g", category: "snacks" },
  { id: "5", name: "Orange Juice", price: 3.49, imageColor: "bg-orange-900/50", unit: "1 L", category: "beverages" },
  { id: "6", name: "Toothpaste", price: 2.99, imageColor: "bg-teal-900/50", unit: "100g", category: "personal care" },
  { id: "7", name: "Eggs", price: 3.20, imageColor: "bg-orange-800/50", unit: "12 Pack", category: "dairy" },
  { id: "8", name: "Apples", price: 5.10, imageColor: "bg-red-800/50", unit: "1 kg", category: "fruits" },
];

export const featuredProducts = mockProducts.slice(0, 4);
export const bestSellers = mockProducts.slice(4, 8);
