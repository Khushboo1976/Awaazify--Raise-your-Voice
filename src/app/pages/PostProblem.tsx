import { useState } from "react";
import { Upload, MapPin, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function PostProblem() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState<"low" | "medium" | "high" | "critical">("medium");
  const [showSimilar, setShowSimilar] = useState(false);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setShowSimilar(value.length > 10);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/success");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Report an Issue</h1>
        <p className="text-muted-foreground">Help improve your community by reporting civic problems</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-card rounded-xl border border-border p-6 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Issue Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Brief description of the issue"
            className="w-full rounded-lg border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>

        {/* Similar Issues Warning */}
        {showSimilar && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-warning/10 border border-warning/20 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-2">Similar issues found</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-card rounded-lg p-3 cursor-pointer hover:bg-muted transition-colors">
                    <p className="font-medium text-foreground mb-1">Pothole on MG Road causing accidents</p>
                    <p className="text-muted-foreground">234 people affected • Verified</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  <p className="text-xs text-muted-foreground">
                    💡 Joining existing issues helps show the true scale of the problem
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Join Existing Issue
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSimilar(false)}
                      className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors"
                    >
                      Continue as New
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide detailed information about the issue"
            className="w-full rounded-lg border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            rows={5}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
          >
            <option value="">Select a category</option>
            <option value="road">Road</option>
            <option value="water">Water</option>
            <option value="electricity">Electricity</option>
            <option value="garbage">Garbage</option>
            <option value="safety">Safety</option>
          </select>
        </div>

        {/* Severity Selector */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Severity Level *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={() => setSeverity("low")}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                severity === "low"
                  ? "bg-success text-success-foreground ring-2 ring-success"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Low
            </button>
            <button
              type="button"
              onClick={() => setSeverity("medium")}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                severity === "medium"
                  ? "bg-warning text-warning-foreground ring-2 ring-warning"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Medium
            </button>
            <button
              type="button"
              onClick={() => setSeverity("high")}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                severity === "high"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              High
            </button>
            <button
              type="button"
              onClick={() => setSeverity("critical")}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                severity === "critical"
                  ? "bg-destructive text-destructive-foreground ring-2 ring-destructive"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              🔥 Critical
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Select the urgency level based on the impact and immediacy of the issue
          </p>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Location *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Street, area, city, state"
              className="w-full rounded-lg border border-border bg-input-background pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>
        </div>

        {/* Upload Media */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Upload Photo/Video
          </label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, MP4 up to 10MB
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Submit Issue
          </button>
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
          >
            Cancel
          </button>
        </div>
      </motion.form>
    </div>
  );
}
