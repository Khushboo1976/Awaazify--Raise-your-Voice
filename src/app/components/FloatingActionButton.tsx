import { Link, useLocation } from "react-router";
import { Plus } from "lucide-react";
import { motion } from "motion/react";

export function FloatingActionButton() {
  const location = useLocation();

  // Don't show on landing, login, or post pages
  if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/post") {
    return null;
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-20 right-6 lg:bottom-8 lg:right-8 z-50"
    >
      <Link
        to="/post"
        className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl hover:bg-primary/90 transition-all hover:scale-110 group"
      >
        <Plus className="h-8 w-8 group-hover:rotate-90 transition-transform" />
      </Link>
    </motion.div>
  );
}
