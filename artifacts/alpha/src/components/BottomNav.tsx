import { Home, Search, ShoppingCart, Receipt, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: "Home", path: "/home", testId: "nav-home" },
    { icon: Search, label: "Search", path: "/search", testId: "nav-search" },
    { icon: ShoppingCart, label: "Cart", path: "/cart", testId: "nav-cart", badge: 2 },
    { icon: Receipt, label: "Orders", path: "/orders", testId: "nav-orders" },
    { icon: User, label: "Profile", path: "/profile", testId: "nav-profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-[#000000] border-t border-border flex items-center justify-around px-2 pb-safe z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path === "/home" && location.pathname === "/");
        return (
          <button
            key={item.path}
            data-testid={item.testId}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center w-full h-full transition-all duration-200 ease-out active:scale-95 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div className="relative">
              <item.icon className={`w-6 h-6 mb-1 ${isActive ? "drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" : ""}`} />
              {item.badge && (
                <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
