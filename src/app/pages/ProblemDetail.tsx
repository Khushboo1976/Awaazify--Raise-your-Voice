import { useParams, Link } from "react-router";
import { mockProblems, mockComments, issueTimeline } from "../data/mockData";
import {
  ArrowLeft, ThumbsUp, MessageCircle, Share2, Flag, Bookmark,
  MapPin, Calendar, User, CheckCircle2, Users, TrendingUp, Shield, AlertCircle,
  Send, Tag, ExternalLink
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { toast } from "sonner";

const statusConfig = {
  reported: { label: "Reported", color: "bg-secondary text-secondary-foreground" },
  verified: { label: "Verified", color: "bg-primary text-primary-foreground" },
  in_progress: { label: "In Progress", color: "bg-warning text-warning-foreground" },
  resolved: { label: "Resolved", color: "bg-success text-success-foreground" },
};

export function ProblemDetail() {
  const { id } = useParams();
  const problem = mockProblems.find(p => p.id === id);
  const [meToo, setMeToo] = useState(false);
  const [meTooCount, setMeTooCount] = useState(problem?.meTooCount || 0);
  const [bookmarked, setBookmarked] = useState(false);
  const [stillAnIssue, setStillAnIssue] = useState<boolean | null>(null);
  const [comment, setComment] = useState("");

  if (!problem) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Issue not found</h2>
        <p className="text-muted-foreground mb-6">The issue you're looking for doesn't exist.</p>
        <Link to="/home" className="text-primary hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  const handleMeToo = () => {
    const newMeToo = !meToo;
    setMeToo(newMeToo);
    setMeTooCount(newMeToo ? meTooCount + 1 : meTooCount - 1);

    if (newMeToo) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E63946'],
      });
      toast.success("Your voice has been added! This helps prioritize the issue.", {
        duration: 2500,
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Back Button */}
      <Link to="/home" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to issues
      </Link>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border overflow-hidden"
      >
        {/* Image */}
        {problem.image && (
          <div className="relative h-96 bg-muted">
            <img src={problem.image} alt={problem.title} className="w-full h-full object-cover" />
            {problem.isTrending && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending
              </div>
            )}
          </div>
        )}

        <div className="p-6 lg:p-8">
          {/* Status and Category */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${statusConfig[problem.status].color}`}>
              {statusConfig[problem.status].label}
            </span>
            <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-muted text-muted-foreground">
              {problem.category}
            </span>
            {problem.isVerified && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 text-success text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                Verified Issue
              </div>
            )}
            {!problem.isVerified && problem.status === "reported" && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/10 text-warning text-sm font-medium">
                <AlertCircle className="h-4 w-4" />
                Under Review
              </div>
            )}
            {problem.priorityRank && problem.priorityRank <= 10 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive text-destructive-foreground text-sm font-bold">
                🔥 Top {problem.priorityRank} Priority
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            {problem.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {problem.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {problem.timestamp}
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {problem.postedBy}
              {problem.isTrustedUser && (
                <Shield className="h-3.5 w-3.5 text-success" title="Verified User" />
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground leading-relaxed mb-6">
            {problem.description}
          </p>

          {/* Department */}
          {problem.department && (
            <div className="bg-muted rounded-lg p-4 mb-6">
              <span className="text-sm text-muted-foreground">Responsible Department:</span>
              <p className="font-medium text-foreground">{problem.department}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-border">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleMeToo}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                meToo
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <ThumbsUp className={`h-5 w-5 ${meToo ? "fill-current" : ""}`} />
              Me Too ({meTooCount})
            </motion.button>
            <button
              onClick={() => toast.success("Forwarded to Municipal Corporation")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors font-medium"
            >
              <Send className="h-5 w-5" />
              Forward to Authority
            </button>
            <button
              onClick={() => toast.success("Authority tagged in this issue")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
            >
              <Tag className="h-5 w-5" />
              Tag Authority
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
              <Share2 className="h-5 w-5" />
              Share
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors ${
                bookmarked
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Bookmark className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`} />
              {bookmarked ? "Saved" : "Save"}
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors">
              <Flag className="h-5 w-5" />
              Report
            </button>
          </div>

          {/* Authority Contact */}
          {problem.department && (
            <div className="bg-success/5 border border-success/20 rounded-lg p-4 my-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-success" />
                    Responsible Authority
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    This issue has been automatically forwarded to <strong>{problem.department}</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-success text-success-foreground text-sm font-medium hover:bg-success/90 transition-colors">
                      Track Progress
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors">
                      Contact Department
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cluster Info */}
          {problem.clusterSize && problem.clusterSize > 1 && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 my-6">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground mb-2">Part of a Larger Issue Cluster</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    This issue is part of a cluster affecting <strong className="text-primary">{meTooCount} people</strong> across <strong>{problem.clusterSize} related reports</strong>.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    💡 Multiple similar reports have been grouped together to show the true scale of this problem.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Community Feedback */}
          <div className="bg-muted rounded-lg p-4 my-6">
            <h3 className="font-medium text-foreground mb-3">Is this still an issue?</h3>
            <div className="flex gap-3">
              <button
                onClick={() => setStillAnIssue(true)}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  stillAnIssue === true
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-card/80"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setStillAnIssue(false)}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  stillAnIssue === false
                    ? "bg-success text-success-foreground"
                    : "bg-card text-foreground hover:bg-card/80"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Issue Timeline */}
          <div className="my-8">
            <h3 className="font-medium text-foreground mb-4">Issue Timeline</h3>
            <div className="space-y-4">
              {issueTimeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.completed
                          ? "bg-success text-success-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.completed && <CheckCircle2 className="h-5 w-5" />}
                    </div>
                    {index < issueTimeline.length - 1 && (
                      <div className={`w-0.5 h-12 ${item.completed ? "bg-success" : "bg-border"}`} />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className={`font-medium ${item.completed ? "text-foreground" : "text-muted-foreground"}`}>
                      {item.status}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Comments Section */}
      <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Comments ({mockComments.length})
        </h2>

        {/* Add Comment */}
        <div className="mb-6">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts or updates..."
            className="w-full rounded-lg border border-border bg-input-background p-3 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            rows={3}
          />
          <div className="flex justify-end mt-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Post Comment
            </button>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {mockComments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 p-4 rounded-lg bg-muted/50"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                {comment.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-foreground">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                </div>
                <p className="text-sm text-foreground">{comment.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
