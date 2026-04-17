import { motion } from "motion/react";
import { Trophy, TrendingUp, Award, Medal } from "lucide-react";
import { Badge } from "../components/Badge";

const leaderboardData = [
  {
    id: "1",
    name: "Rajesh Kumar",
    avatar: "RK",
    points: 2450,
    issues: 45,
    validations: 120,
    badge: "civic-hero" as const,
    rank: 1,
  },
  {
    id: "2",
    name: "Priya Sharma",
    avatar: "PS",
    points: 2180,
    issues: 38,
    validations: 95,
    badge: "active-citizen" as const,
    rank: 2,
  },
  {
    id: "3",
    name: "Amit Patel",
    avatar: "AP",
    points: 1920,
    issues: 32,
    validations: 85,
    badge: "problem-solver" as const,
    rank: 3,
  },
  {
    id: "4",
    name: "Neha Gupta",
    avatar: "NG",
    points: 1650,
    issues: 28,
    validations: 72,
    badge: "voice-amplifier" as const,
    rank: 4,
  },
  {
    id: "5",
    name: "Suresh Reddy",
    avatar: "SR",
    points: 1420,
    issues: 24,
    validations: 65,
    badge: "trending-reporter" as const,
    rank: 5,
  },
];

export function Leaderboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Community Leaderboard</h1>
        <p className="text-muted-foreground">Top civic champions making a difference</p>
      </motion.div>

      {/* Points Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-primary/5 to-success/5 rounded-xl border border-border p-6"
      >
        <h2 className="text-lg font-bold text-foreground mb-4">How to Earn Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Report Issue</p>
              <p className="text-sm text-muted-foreground">+10 points</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
              <Award className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="font-medium text-foreground">Validate Issue</p>
              <p className="text-sm text-muted-foreground">+5 points</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
              <Medal className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="font-medium text-foreground">Issue Resolved</p>
              <p className="text-sm text-muted-foreground">+25 points</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        {/* 2nd Place */}
        <div className="flex flex-col items-center pt-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-2xl font-bold text-white mb-2">
              {leaderboardData[1].avatar}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
              2
            </div>
          </div>
          <p className="font-medium text-foreground mt-3 text-center">{leaderboardData[1].name}</p>
          <p className="text-sm text-muted-foreground">{leaderboardData[1].points} pts</p>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
          <Trophy className="h-8 w-8 text-yellow-500 mb-2" />
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-3xl font-bold text-white mb-2 ring-4 ring-yellow-400/20">
              {leaderboardData[0].avatar}
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
          </div>
          <p className="font-bold text-foreground mt-3 text-center">{leaderboardData[0].name}</p>
          <p className="text-sm text-primary font-medium">{leaderboardData[0].points} pts</p>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center pt-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-2xl font-bold text-white mb-2">
              {leaderboardData[2].avatar}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">
              3
            </div>
          </div>
          <p className="font-medium text-foreground mt-3 text-center">{leaderboardData[2].name}</p>
          <p className="text-sm text-muted-foreground">{leaderboardData[2].points} pts</p>
        </div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-xl border border-border overflow-hidden"
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">All Rankings</h2>
        </div>
        <div className="divide-y divide-border">
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 text-center">
                  <span className={`text-2xl font-bold ${
                    user.rank === 1 ? "text-yellow-500" :
                    user.rank === 2 ? "text-gray-400" :
                    user.rank === 3 ? "text-amber-600" :
                    "text-muted-foreground"
                  }`}>
                    {user.rank}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{user.name}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span>{user.issues} issues</span>
                    <span>•</span>
                    <span>{user.validations} validations</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Badge type={user.badge} size="sm" showLabel={false} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{user.points}</p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
