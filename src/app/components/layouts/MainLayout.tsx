import { Outlet, Link, useLocation } from "react-router";
import {
  Home, LayoutDashboard, Map, Grid3x3, Megaphone,
  Bookmark, User, Settings, Bell, Search, Menu, Plus, X, Trophy
} from "lucide-react";
import { useState } from "react";
import { FloatingActionButton } from "../FloatingActionButton";

const navigation = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Civic Heatmap", path: "/heatmap", icon: Map },
  { name: "Categories", path: "/categories", icon: Grid3x3 },
  { name: "Leaderboard", path: "/leaderboard", icon: Trophy },
  { name: "Voters' Voice", path: "/voters-voice", icon: Megaphone },
  { name: "Bookmarks", path: "/bookmarks", icon: Bookmark },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];

const mobileNav = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Map", path: "/heatmap", icon: Map },
  { name: "Post", path: "/post", icon: Plus },
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Profile", path: "/profile", icon: User },
];

export function MainLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar border-r border-sidebar-border px-6 py-8">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-2xl font-bold text-primary">Awaazify</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`group flex gap-x-3 rounded-lg p-3 transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="sticky top-0 z-40 lg:hidden">
        <div className="flex h-16 items-center gap-x-4 bg-sidebar border-b border-sidebar-border px-4">
          <button
            type="button"
            className="text-sidebar-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-primary">Awaazify</h1>
          <button
            type="button"
            className="text-sidebar-foreground"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
          </button>
          <Link to="/notifications" className="text-sidebar-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
              3
            </span>
          </Link>
        </div>
        {searchOpen && (
          <div className="bg-sidebar border-b border-sidebar-border px-4 py-3">
            <input
              type="search"
              placeholder="Search issues, categories, locations..."
              className="w-full rounded-lg bg-input-background px-4 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-sidebar">
            <div className="flex h-16 items-center justify-between px-6">
              <h1 className="text-xl font-bold text-primary">Awaazify</h1>
              <button onClick={() => setMobileMenuOpen(false)} className="text-sidebar-foreground">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-4 py-4">
              <ul className="flex flex-col gap-y-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex gap-x-3 rounded-lg p-3 transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`}
                      >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden lg:block lg:pl-64">
        <div className="sticky top-0 z-40 flex h-16 items-center gap-x-4 bg-sidebar border-b border-sidebar-border px-6">
          <div className="flex flex-1 gap-x-4">
            <div className="relative flex-1 max-w-2xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search issues, categories, locations..."
                className="w-full rounded-lg bg-input-background pl-10 pr-4 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Link to="/notifications" className="relative text-sidebar-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/profile" className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
              JD
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:pl-64 pb-20 lg:pb-0">
        <div className="px-4 py-6 lg:px-8 lg:py-8">
          <Outlet />
        </div>
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-sidebar border-t border-sidebar-border">
        <div className="flex justify-around items-center h-16 px-2">
          {mobileNav.map((item) => {
            const isActive = location.pathname === item.path;
            const isPostButton = item.path === "/post";

            if (isPostButton) {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex flex-col items-center justify-center -mt-8"
                >
                  <div className="rounded-full bg-primary p-4 shadow-lg">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-3 ${
                  isActive ? "text-primary" : "text-sidebar-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
