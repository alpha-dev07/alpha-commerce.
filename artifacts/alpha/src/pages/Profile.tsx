import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { BottomNav } from "../components/BottomNav";
import { User, Mail, LogOut, ChevronRight, Package, MapPin, CreditCard, Bell, Shield } from "lucide-react";

export function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch {
      setLoggingOut(false);
    }
  };

  const menuItems = [
    { icon: Package, label: "My Orders", testId: "menu-orders" },
    { icon: MapPin, label: "Saved Addresses", testId: "menu-addresses" },
    { icon: CreditCard, label: "Payment Methods", testId: "menu-payments" },
    { icon: Bell, label: "Notifications", testId: "menu-notifications" },
    { icon: Shield, label: "Privacy & Security", testId: "menu-privacy" },
  ];

  return (
    <div className="min-h-[100dvh] w-full bg-background pb-20 animate-in fade-in duration-300" data-testid="page-profile">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50 pt-safe">
        <div className="flex items-center px-4 py-4">
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-4">
        {/* User Card */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-base font-bold truncate" data-testid="text-profile-name">
              {user?.displayName ?? "Alpha User"}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5 truncate" data-testid="text-profile-email">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              {user?.email}
            </span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col rounded-2xl bg-card border border-border overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              data-testid={item.testId}
              className={`flex items-center gap-3 px-4 py-4 active:bg-secondary transition-colors text-left ${
                index < menuItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <item.icon className="w-5 h-5 text-muted-foreground shrink-0" />
              <span className="flex-1 text-sm font-medium">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          data-testid="btn-logout"
          className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl border border-destructive/40 bg-destructive/10 text-destructive font-semibold text-sm active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <LogOut className="w-4 h-4" />
          {loggingOut ? "Signing out..." : "Sign Out"}
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
