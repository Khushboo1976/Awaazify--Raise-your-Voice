import { Shield, CheckCircle2 } from "lucide-react";

interface TrustBadgeProps {
  type: "verified-user" | "verified-issue";
  size?: "sm" | "md";
}

export function TrustBadge({ type, size = "md" }: TrustBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
  };

  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  if (type === "verified-user") {
    return (
      <div className={`inline-flex items-center gap-1.5 rounded-lg bg-success/10 text-success font-medium ${sizeClasses[size]}`}>
        <Shield className={iconSize} />
        <span>Verified User</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-lg bg-primary/10 text-primary font-medium ${sizeClasses[size]}`}>
      <CheckCircle2 className={iconSize} />
      <span>Verified Issue</span>
    </div>
  );
}
