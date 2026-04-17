import { useState } from "react";
import { votersVoices } from "../data/mockData";
import { ThumbsUp, CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";

export function VotersVoice() {
  const [voiceText, setVoiceText] = useState("");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Voters' Voice to Leaders</h1>
        <p className="text-muted-foreground">Share your suggestions and questions with elected representatives</p>
      </motion.div>

      {/* Submit Voice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="font-medium text-foreground mb-4">Your Voice Matters</h2>
        <textarea
          value={voiceText}
          onChange={(e) => setVoiceText(e.target.value)}
          placeholder="Share your suggestions, concerns, or questions for your representatives..."
          className="w-full rounded-lg border border-border bg-input-background p-4 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          rows={4}
        />
        <div className="flex justify-end mt-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            <Send className="h-4 w-4" />
            Submit Voice
          </button>
        </div>
      </motion.div>

      {/* Top 10 Voices */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Top Voices This Month</h2>
        <div className="space-y-4">
          {votersVoices.map((voice, index) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{voice.author}</span>
                      {voice.isVerified && (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{voice.timestamp}</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-4">{voice.text}</p>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span className="font-medium">{voice.engagementCount.toLocaleString()}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
