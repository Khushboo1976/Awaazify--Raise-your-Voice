import { Link } from "react-router";
import { ThumbsUp, MessageCircle, Share2, Flag, Bookmark, MapPin, TrendingUp, CheckCircle2, Users, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";

interface ProblemCardProps {
  id: string;
  title: string;
  description: string;
  location: string;
  category: string;
  status: "reported" | "verified" | "in_progress" | "resolved";
  meTooCount: number;
  commentCount: number;
  image?: string;
  department?: string;
  isTrending?: boolean;
  isVerified?: boolean;
  postedBy: string;
  timestamp: string;
  clusterSize?: number;
  priorityRank?: number | null;
  isTrustedUser?: boolean;
}

const statusConfig = {
  reported: { label: "Reported", color: "bg-secondary text-secondary-foreground" },
  verified: { label: "Verified", color: "bg-primary text-primary-foreground" },
  in_progress: { label: "In Progress", color: "bg-warning text-warning-foreground" },
  resolved: { label: "Resolved", color: "bg-success text-success-foreground" },
};

export function ProblemCard({
  id,
  title,
  description,
  location,
  category,
  status,
  meTooCount,
  commentCount,
  image,
  department,
  isTrending,
  isVerified,
  postedBy,
  timestamp,
  clusterSize,
  priorityRank,
  isTrustedUser,
}: ProblemCardProps) {
  const [meToo, setMeToo] = useState(false);
  const [meTooCountState, setMeTooCountState] = useState(meTooCount);
  const [bookmarked, setBookmarked] = useState(false);

  const handleMeToo = (e: React.MouseEvent) => {
    e.preventDefault();
    const newMeToo = !meToo;
    setMeToo(newMeToo);
    setMeTooCountState(newMeToo ? meTooCountState + 1 : meTooCountState - 1);

    if (newMeToo) {
      confetti({
        particleCount: 20,
        spread: 30,
        origin: {
          x: (e.clientX / window.innerWidth),
          y: (e.clientY / window.innerHeight)
        },
        colors: ['#E63946'],
        ticks: 60,
      });
      toast.success("Added to issue! Your validation helps prioritize this problem.", {
        duration: 2000,
      });
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setBookmarked(!bookmarked);
  };

  return (
    <Link to={`/problem/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        {image && (
          <div className="relative h-48 overflow-hidden bg-muted">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
              {isTrending && (
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1.5 text-sm shadow-lg">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Trending
                </div>
              )}
              {priorityRank && priorityRank <= 10 && (
                <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full flex items-center gap-1.5 text-sm font-bold shadow-lg">
                  🔥 Top {priorityRank} Issue
                </div>
              )}
            </div>
          </div>
        )}

        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${statusConfig[status].color}`}>
                  {statusConfig[status].label}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-muted text-muted-foreground">
                  {category}
                </span>
                {isVerified && (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                )}
              </div>
              <h3 className="font-semibold text-card-foreground line-clamp-2">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>

            {clusterSize && clusterSize > 1 && (
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium text-primary">
                  {meTooCount} people affected
                </span>
                <span className="text-xs text-muted-foreground">
                  (Part of {clusterSize} related issues)
                </span>
              </div>
            )}

            {isTrustedUser && (
              <div className="flex items-center gap-1.5 text-xs text-success">
                <Shield className="h-3.5 w-3.5" />
                <span>Posted by verified user</span>
              </div>
            )}
          </div>

          {department && (
            <div className="mb-4 text-sm">
              <span className="text-muted-foreground">Responsible: </span>
              <span className="font-medium text-card-foreground">{department}</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleMeToo}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  meToo
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                <ThumbsUp className={`h-4 w-4 ${meToo ? "fill-current" : ""}`} />
                <span className="text-sm font-medium">{meTooCountState}</span>
              </motion.button>
              <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">{commentCount}</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
              <button
                onClick={handleBookmark}
                className={`p-1.5 rounded-lg transition-colors ${
                  bookmarked
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
              </button>
              <button className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                <Flag className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
