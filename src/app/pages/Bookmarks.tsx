import { mockProblems } from "../data/mockData";
import { ProblemCard } from "../components/ProblemCard";
import { Bookmark } from "lucide-react";
import { motion } from "motion/react";

export function Bookmarks() {
  const bookmarkedIssues = mockProblems.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Bookmark className="h-8 w-8" />
          Bookmarked Issues
        </h1>
        <p className="text-muted-foreground">Issues you've saved for later</p>
      </motion.div>

      {bookmarkedIssues.length === 0 ? (
        <div className="bg-card rounded-xl border border-border p-12 text-center">
          <Bookmark className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-medium text-foreground mb-2">No bookmarks yet</h2>
          <p className="text-muted-foreground">
            Start bookmarking issues to keep track of them here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bookmarkedIssues.map((issue) => (
            <ProblemCard key={issue.id} {...issue} />
          ))}
        </div>
      )}
    </div>
  );
}
