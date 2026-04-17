import { Trophy, Flame, Star, Award, Target, Zap } from "lucide-react";

interface BadgeProps {
  type: "civic-hero" | "active-citizen" | "problem-solver" | "voice-amplifier" | "trending-reporter" | "verified-reporter";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const badgeConfig = {
  "civic-hero": {
    icon: Trophy,
    label: "Civic Hero",
    color: "from-yellow-500 to-orange-500",
    description: "100+ issues reported or validated",
  },
  "active-citizen": {
    icon: Flame,
    label: "Active Citizen",
    color: "from-primary to-destructive",
    description: "Active for 30+ days",
  },
  "problem-solver": {
    icon: Target,
    label: "Problem Solver",
    color: "from-success to-success/70",
    description: "Helped resolve 10+ issues",
  },
  "voice-amplifier": {
    icon: Zap,
    label: "Voice Amplifier",
    color: "from-warning to-warning/70",
    description: "50+ Me Too validations",
  },
  "trending-reporter": {
    icon: Star,
    label: "Trending Reporter",
    color: "from-chart-4 to-chart-5",
    description: "Reported 5+ trending issues",
  },
  "verified-reporter": {
    icon: Award,
    label: "Verified Reporter",
    color: "from-success to-chart-2",
    description: "Phone verified + trusted user",
  },
};

export function Badge({ type, size = "md", showLabel = true }: BadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${config.color} flex items-center justify-center shadow-lg text-white`}
        title={config.description}
      >
        <Icon className={iconSizes[size]} />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-center text-muted-foreground max-w-[80px]">
          {config.label}
        </span>
      )}
    </div>
  );
}
