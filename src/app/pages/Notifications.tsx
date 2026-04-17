import { MessageCircle, ThumbsUp, CheckCircle2, Bell } from "lucide-react";
import { motion } from "motion/react";

const notifications = [
  {
    id: "1",
    type: "comment",
    title: "New comment on your issue",
    description: "Vikram Singh commented on 'Severe pothole causing accidents on MG Road'",
    timestamp: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "metoo",
    title: "Your issue is gaining traction",
    description: "15 more people have said 'Me Too' on your report",
    timestamp: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "status",
    title: "Issue status updated",
    description: "Water supply disruption has been marked as 'In Progress'",
    timestamp: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "comment",
    title: "New comment on your issue",
    description: "Meera Nair commented on 'Street lights not working'",
    timestamp: "2 days ago",
    read: true,
  },
  {
    id: "5",
    type: "status",
    title: "Issue resolved",
    description: "Public park maintenance has been marked as 'Resolved'",
    timestamp: "3 days ago",
    read: true,
  },
];

const iconMap = {
  comment: MessageCircle,
  metoo: ThumbsUp,
  status: CheckCircle2,
};

export function Notifications() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
            <Bell className="h-8 w-8" />
            Notifications
          </h1>
          <p className="text-muted-foreground">Stay updated on your issues and community activity</p>
        </div>
        <button className="text-sm text-primary hover:underline">
          Mark all as read
        </button>
      </motion.div>

      <div className="space-y-3">
        {notifications.map((notification, index) => {
          const Icon = iconMap[notification.type as keyof typeof iconMap];

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow cursor-pointer ${
                !notification.read ? "bg-primary/5" : ""
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  !notification.read ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={`font-medium ${!notification.read ? "text-foreground" : "text-muted-foreground"}`}>
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
