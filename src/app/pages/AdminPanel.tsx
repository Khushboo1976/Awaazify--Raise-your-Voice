import { mockProblems, dashboardStats } from "../data/mockData";
import { CheckCircle2, XCircle, Flag, TrendingUp, Users, Clock } from "lucide-react";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const topIssues = mockProblems.slice(0, 10);

const activityData = [
  { region: "Bangalore", issues: 234 },
  { region: "Mumbai", issues: 198 },
  { region: "Delhi", issues: 187 },
  { region: "Chennai", issues: 156 },
  { region: "Kolkata", issues: 142 },
];

export function AdminPanel() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
        <p className="text-muted-foreground">Moderate content and manage top issues</p>
      </motion.div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Pending Review</span>
            <Clock className="h-4 w-4 text-warning" />
          </div>
          <p className="text-3xl font-bold text-foreground">23</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Flagged Content</span>
            <Flag className="h-4 w-4 text-destructive" />
          </div>
          <p className="text-3xl font-bold text-foreground">8</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Active Users Today</span>
            <Users className="h-4 w-4 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground">1,247</p>
        </motion.div>
      </div>

      {/* Top 20 Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Top 20 Issues for Review</h2>
        <div className="space-y-3">
          {topIssues.map((issue, index) => (
            <div
              key={issue.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground line-clamp-1">{issue.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                  <span>{issue.location}</span>
                  <span>•</span>
                  <span>{issue.meTooCount} affected</span>
                  <span>•</span>
                  <span className="capitalize">{issue.status.replace("_", " ")}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors">
                  <CheckCircle2 className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Most Active Regions</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#DEE2E6" />
            <XAxis dataKey="region" stroke="#6C757D" />
            <YAxis stroke="#6C757D" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #DEE2E6',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="issues" fill="#E63946" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
