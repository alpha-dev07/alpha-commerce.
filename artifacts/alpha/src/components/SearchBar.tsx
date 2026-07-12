import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="w-5 h-5 text-muted-foreground" />
      </div>
      <input
        type="text"
        placeholder="Search for groceries, fruits..."
        className="w-full h-12 pl-10 pr-4 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        data-testid="input-search"
      />
    </div>
  );
}
