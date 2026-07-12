import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home", { replace: true });
  };

  return (
    <div className="min-h-[100dvh] w-full bg-background flex flex-col items-center justify-center p-6" data-testid="page-register">
      <div className="w-full max-w-sm flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter">
            al<span className="text-primary">pha</span>
          </h1>
          <p className="text-muted-foreground text-sm">Create an account for fast delivery</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-muted-foreground ml-1" htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full h-12 px-4 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              data-testid="input-register-name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-muted-foreground ml-1" htmlFor="email">Email or Phone</label>
            <input
              id="email"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone"
              className="w-full h-12 px-4 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              data-testid="input-register-email"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-muted-foreground ml-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full h-12 px-4 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              data-testid="input-register-password"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 mt-2 rounded-xl bg-primary text-primary-foreground font-bold active:scale-[0.98] transition-transform"
            data-testid="btn-register-submit"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline" data-testid="link-to-login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
