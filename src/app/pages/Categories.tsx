import { categories, mockProblems } from "../data/mockData";
import { motion } from "motion/react";
import { Link } from "react-router";

export function Categories() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Categories</h1>
        <p className="text-muted-foreground">Browse issues by category</p>
      </motion.div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const categoryIssues = mockProblems.filter(p => p.category === category.name);

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{category.name}</h2>
              <p className="text-3xl font-bold text-primary mb-4">{category.count}</p>
              <p className="text-sm text-muted-foreground mb-4">active issues</p>

              <div className="space-y-2">
                {categoryIssues.slice(0, 3).map(issue => (
                  <Link
                    key={issue.id}
                    to={`/problem/${issue.id}`}
                    className="block text-sm text-foreground hover:text-primary transition-colors line-clamp-1"
                  >
                    • {issue.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
