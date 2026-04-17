import { dashboardStats, categories, mockProblems } from "../data/mockData";
import { TrendingUp, TrendingDown, Users, CheckCircle2, Clock } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "motion/react";

const trendData = [
  { month: "Oct", issues: 145 },
  { month: "Nov", issues: 178 },
  { month: "Dec", issues: 156 },
  { month: "Jan", issues: 192 },
  { month: "Feb", issues: 167 },
  { month: "Mar", issues: 203 },
  { month: "Apr", issues: 187 },
];

const categoryData = categories.map(cat => ({
  name: cat.name,
  value: cat.count,
}));

const statusData = [
  { name: "Reported", value: 234 },
  { name: "Verified", value: 156 },
  { name: "In Progress", value: 89 },
  { name: "Resolved", value: 108 },
];

const COLORS = ['#E63946', '#2ECC71', '#F4A261', '#457B9D', '#A8DADC'];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of civic issues and trends</p>
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Issues</span>
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">{dashboardStats.totalIssues}</p>
          <p className="text-xs text-success flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +12% from last month
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Resolved This Month</span>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">{dashboardStats.resolvedThisMonth}</p>
          <p className="text-xs text-success flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +8% from last month
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Active Users</span>
            <Users className="h-4 w-4 text-chart-4" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">{dashboardStats.activeUsers.toLocaleString()}</p>
          <p className="text-xs text-destructive flex items-center gap-1">
            <TrendingDown className="h-3 w-3" />
            -3% from last month
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Avg Resolution Time</span>
            <Clock className="h-4 w-4 text-warning" />
          </div>
          <p className="text-3xl font-bold text-foreground mb-1">{dashboardStats.avgResolutionTime}</p>
          <p className="text-xs text-success flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            15% faster than last month
          </p>
        </motion.div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <h2 className="text-lg font-bold text-foreground mb-4">Issue Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DEE2E6" />
              <XAxis dataKey="month" stroke="#6C757D" />
              <YAxis stroke="#6C757D" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #DEE2E6',
                  borderRadius: '8px',
                }}
              />
              <Line type="monotone" dataKey="issues" stroke="#E63946" strokeWidth={2} dot={{ fill: '#E63946' }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <h2 className="text-lg font-bold text-foreground mb-4">Issues by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Status Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="text-lg font-bold text-foreground mb-4">Status Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statusData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#DEE2E6" />
            <XAxis dataKey="name" stroke="#6C757D" />
            <YAxis stroke="#6C757D" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #DEE2E6',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="value" fill="#E63946" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Top Issues */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="text-lg font-bold text-foreground mb-4">Top Issues This Week</h2>
        <div className="space-y-3">
          {mockProblems.slice(0, 5).map((problem, index) => (
            <div key={problem.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground line-clamp-1">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.location}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-foreground">{problem.meTooCount}</p>
                <p className="text-xs text-muted-foreground">affected</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
