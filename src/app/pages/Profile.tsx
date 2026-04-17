import { mockProblems } from "../data/mockData";
import { MapPin, Calendar, ThumbsUp, MessageCircle, Edit, Award } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Badge } from "../components/Badge";

export function Profile() {
  const userPosts = mockProblems.slice(0, 3);
  const userMeToos = mockProblems.slice(3, 6);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-foreground">John Doe</h1>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors">
                <Edit className="h-4 w-4" />
                Edit Profile
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Bangalore, Karnataka
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Joined March 2025
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-foreground">{userPosts.length}</p>
                <p className="text-sm text-muted-foreground">Issues Posted</p>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-foreground">{userMeToos.length}</p>
                <p className="text-sm text-muted-foreground">Me Too</p>
              </div>
              <div className="bg-muted rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Saved</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-primary">567</p>
                <p className="text-sm text-muted-foreground">Impact Score</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Your Badges</h2>
          <Link to="/leaderboard" className="text-sm text-primary hover:underline flex items-center gap-1">
            <Award className="h-4 w-4" />
            View Leaderboard
          </Link>
        </div>
        <div className="flex flex-wrap gap-6">
          <Badge type="verified-reporter" size="md" />
          <Badge type="active-citizen" size="md" />
          <Badge type="problem-solver" size="md" />
        </div>
      </motion.div>

      {/* Community Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 p-6"
      >
        <h2 className="text-xl font-bold text-foreground mb-4">Your Community Impact</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">You contributed to</span>
            <span className="text-2xl font-bold text-primary">8 issues</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total people helped</span>
            <span className="text-2xl font-bold text-primary">1,234</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Issues resolved with your support</span>
            <span className="text-2xl font-bold text-success">2</span>
          </div>
          <div className="pt-3 mt-3 border-t border-primary/20">
            <p className="text-sm text-muted-foreground italic">
              💡 Your voice makes issues visible and drives real change in your community!
            </p>
          </div>
        </div>
      </motion.div>

      {/* My Activity */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">My Activity</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
              My Posts
            </button>
            <button className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors">
              Me Too Activity
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {userPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Link to={`/problem/${post.id}`} className="group">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-1 rounded bg-muted text-xs">{post.category}</span>
                    <span>{post.location}</span>
                    <span>{post.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {post.meTooCount}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {post.commentCount}
                    </div>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Edit className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
