import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Users, TrendingUp, MapPin, CheckCircle2, MessageCircle, Shield } from "lucide-react";

export function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-primary">Awaazify</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Explore Issues
            </Link>
            <Link to="/login" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgMTE0aDEydjEySDE2em0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYwek0xMiA5MGgxMnYxMkgxMnptMjQgMGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgNjZoMTJ2MTJIMTJ6bTI0IDBoMTJ2MTJIMzZ6bTI0IDBoMTJ2MTJINjB6TTEyIDQyaDEydjEySDE2em0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYwek0xMiAxOGgxMnYxMkgxMnptMjQgMGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Awaazify
            </h1>
            <p className="text-3xl lg:text-4xl font-bold text-white/95 mb-4">
              Raise Your Voice
            </p>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Transform civic problems into community action. Report issues, validate together, drive real change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl text-lg font-bold hover:bg-white/95 transition-all hover:scale-105 shadow-xl"
              >
                Get Started
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/home"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl text-lg font-bold hover:bg-white/30 transition-all hover:scale-105"
              >
                Explore Issues
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to make your voice heard
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Report a Problem</h3>
            <p className="text-muted-foreground text-lg">
              Share civic issues in your area with photo evidence and location details
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 rounded-xl bg-success text-success-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">People Validate</h3>
            <p className="text-muted-foreground text-lg">
              Community members confirm issues using "Me Too" to show impact
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 rounded-xl bg-warning text-warning-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Issues Become Priority</h3>
            <p className="text-muted-foreground text-lg">
              Most validated issues rise to the top and get official attention
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-muted/30 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for transparency, accountability, and real impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Smart Clustering</h3>
              <p className="text-muted-foreground">
                Similar issues automatically group together to show true community impact
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Priority Ranking</h3>
              <p className="text-muted-foreground">
                Issues ranked by community validation, urgency, and affected population
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Trust System</h3>
              <p className="text-muted-foreground">
                Verified users and moderated content ensure quality and authenticity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Civic Heatmap</h3>
              <p className="text-muted-foreground">
                Interactive India map showing issue severity and trends state-by-state
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <MessageCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Community Discussion</h3>
              <p className="text-muted-foreground">
                Engage in conversations, share updates, and track progress together
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Track Resolution</h3>
              <p className="text-muted-foreground">
                Follow issues from report to resolution with transparent status updates
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Heatmap Preview */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-16 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See Issues Across India
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interactive heatmap shows real-time civic issues across every state
          </p>
          <Link
            to="/heatmap"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <MapPin className="h-5 w-5" />
            Explore Heatmap
          </Link>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Voice Makes Issues Visible
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of citizens making their communities better
            </p>
            <Link
              to="/home"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-xl text-lg font-bold hover:bg-white/95 transition-all hover:scale-105"
            >
              Get Started
              <ArrowRight className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-background/70">
            © 2026 Awaazify. Building better communities together.
          </p>
        </div>
      </div>
    </div>
  );
}
