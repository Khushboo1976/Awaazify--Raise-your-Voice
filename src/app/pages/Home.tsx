import { useState } from "react";
import { ProblemCard } from "../components/ProblemCard";
import { mockProblems } from "../data/mockData";
import { Filter, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const highPriorityIssues = mockProblems.filter(p => p.isTrending || p.meTooCount > 200);
  const nearYouIssues = mockProblems.slice(0, 3);
  const newlyAddedIssues = mockProblems.slice(-3);

  const filteredProblems = mockProblems.filter(problem => {
    const categoryMatch = selectedCategory === "all" || problem.category === selectedCategory;
    const statusMatch = selectedStatus === "all" || problem.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground"
      >
        <h1 className="text-3xl lg:text-4xl font-bold mb-3">Your Voice Makes Issues Visible</h1>
        <p className="text-lg lg:text-xl opacity-95 mb-2 max-w-2xl">
          Report civic issues, validate community problems, and drive change in your area.
        </p>
        <p className="text-sm opacity-90 mb-6 max-w-2xl">
          💡 Help others by confirming issues - your validation helps prioritize real problems
        </p>
        <Link
          to="/post"
          className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
        >
          Report an Issue
        </Link>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          Filters:
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="all">All Categories</option>
          <option value="Road">Road</option>
          <option value="Water">Water</option>
          <option value="Electricity">Electricity</option>
          <option value="Garbage">Garbage</option>
          <option value="Safety">Safety</option>
        </select>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="all">All Status</option>
          <option value="reported">Reported</option>
          <option value="verified">Verified</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {/* High Priority Issues */}
      {selectedCategory === "all" && selectedStatus === "all" && highPriorityIssues.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">🔥 High Priority Issues</h2>
              <p className="text-sm text-muted-foreground">Community-validated problems needing urgent attention</p>
            </div>
            <span className="text-sm font-medium text-primary">{highPriorityIssues.length} issues</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {highPriorityIssues.map((problem) => (
              <motion.div
                key={problem.id}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.01 }}
              >
                <ProblemCard {...problem} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Near You */}
      {selectedCategory === "all" && selectedStatus === "all" && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-foreground">Near You</h2>
            <span className="text-sm text-muted-foreground">{nearYouIssues.length} issues</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {nearYouIssues.map((problem) => (
              <ProblemCard key={problem.id} {...problem} />
            ))}
          </div>
        </section>
      )}

      {/* Newly Added */}
      {selectedCategory === "all" && selectedStatus === "all" && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-foreground">Newly Added</h2>
            <span className="text-sm text-muted-foreground">{newlyAddedIssues.length} issues</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {newlyAddedIssues.map((problem) => (
              <ProblemCard key={problem.id} {...problem} />
            ))}
          </div>
        </section>
      )}

      {/* Filtered Results */}
      {(selectedCategory !== "all" || selectedStatus !== "all") && (
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-foreground">Filtered Results</h2>
            <span className="text-sm text-muted-foreground">{filteredProblems.length} issues</span>
          </div>
          {filteredProblems.length === 0 ? (
            <div className="bg-card rounded-xl border border-border p-16 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No issues yet in your area</h3>
                <p className="text-muted-foreground mb-6">
                  Be the first to report a problem in this category and make a difference in your community.
                </p>
                <Link
                  to="/post"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Be the First to Report
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProblems.map((problem) => (
                <ProblemCard key={problem.id} {...problem} />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
