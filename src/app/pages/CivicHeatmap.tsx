import { useState } from "react";
import { stateData, categories } from "../data/mockData";
import { motion, AnimatePresence } from "motion/react";
import { X, TrendingUp } from "lucide-react";

const severityColors = {
  critical: "#8B0000",
  high: "#E63946",
  medium: "#F4A261",
  low: "#2ECC71",
  resolved: "#90EE90",
};

const severityLabels = {
  critical: "Critical (Top 10)",
  high: "High",
  medium: "Medium",
  low: "Low",
  resolved: "Resolved",
};

export function CivicHeatmap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const getStateData = (stateName: string) => {
    return stateData.find(s => s.state === stateName);
  };

  const selectedStateData = selectedState ? getStateData(selectedState) : null;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">India Civic Heatmap</h1>
        <p className="text-muted-foreground">Interactive map showing issue severity across states</p>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="text-sm font-medium text-foreground mb-3">Severity Level</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(severityLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: severityColors[key as keyof typeof severityColors] }}
              />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-card rounded-xl border border-border p-6"
        >
          <h2 className="text-lg font-bold text-foreground mb-4">Click on a state to view details</h2>

          {/* Simplified India Map Representation */}
          <div className="grid grid-cols-3 gap-2">
            {stateData.map((state) => (
              <motion.button
                key={state.state}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedState(state.state)}
                onMouseEnter={() => setHoveredState(state.state)}
                onMouseLeave={() => setHoveredState(null)}
                className="relative p-4 rounded-lg border-2 transition-all"
                style={{
                  backgroundColor: severityColors[state.severity as keyof typeof severityColors],
                  borderColor: selectedState === state.state ? '#212529' : 'transparent',
                  color: '#ffffff',
                }}
              >
                <div className="text-xs font-medium mb-1">{state.state}</div>
                <div className="text-lg font-bold">{state.issueCount}</div>
                <div className="text-xs opacity-90">issues</div>

                {/* Hover Tooltip */}
                {hoveredState === state.state && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 left-1/2 -translate-x-1/2 top-full mt-2 bg-foreground text-background px-3 py-2 rounded-lg shadow-lg text-xs whitespace-nowrap"
                  >
                    <div className="font-medium">{state.state}</div>
                    <div>Issues: {state.issueCount}</div>
                    <div>Top: {state.topCategory}</div>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* State Details Panel */}
        <AnimatePresence mode="wait">
          {selectedStateData ? (
            <motion.div
              key={selectedState}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-card rounded-xl border border-border p-6 relative"
            >
              <button
                onClick={() => setSelectedState(null)}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>

              <h2 className="text-2xl font-bold text-foreground mb-4">{selectedStateData.state}</h2>

              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Total Issues</span>
                  <p className="text-3xl font-bold text-foreground">{selectedStateData.issueCount}</p>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground">Severity Level</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: severityColors[selectedStateData.severity as keyof typeof severityColors] }}
                    />
                    <span className="font-medium text-foreground capitalize">{selectedStateData.severity}</span>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground">Top Category</span>
                  <p className="text-lg font-medium text-foreground">{selectedStateData.topCategory}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm font-medium text-foreground mb-3">Category Breakdown</h3>
                  <div className="space-y-2">
                    {categories.slice(0, 3).map((cat, index) => (
                      <div key={cat.name} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{cat.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${(cat.count / 200) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground w-8 text-right">{cat.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-sm font-medium text-foreground mb-3">🔥 Trending Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {['pothole', 'water supply', 'street light', 'garbage'].map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">+18%</strong> issues this month
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-card rounded-xl border border-border p-6 flex items-center justify-center"
            >
              <p className="text-muted-foreground text-center">
                Select a state to view detailed information
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Critical States</p>
          <p className="text-2xl font-bold text-foreground">
            {stateData.filter(s => s.severity === 'critical').length}
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">High Priority</p>
          <p className="text-2xl font-bold text-foreground">
            {stateData.filter(s => s.severity === 'high').length}
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Issues</p>
          <p className="text-2xl font-bold text-foreground">
            {stateData.reduce((sum, s) => sum + s.issueCount, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-card rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">States Monitored</p>
          <p className="text-2xl font-bold text-foreground">{stateData.length}</p>
        </div>
      </motion.div>
    </div>
  );
}
