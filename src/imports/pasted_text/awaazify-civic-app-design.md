Design a complete, production-ready civic web application UI called:

“Awaazify – Raise Your Voice”

This is a civic intelligence platform where users report public problems, validate them via a “Me Too” system, interact through comments, and view prioritized issues. The system includes clustering-based aggregation, ranking-based prioritization, admin moderation, and an interactive India Civic Heatmap.

---

🎯 DESIGN STYLE

* Clean, modern civic-tech SaaS UI
* Minimal but data-rich
* Card-based layout
* Rounded corners (12–16px)
* Soft shadows
* Clear visual hierarchy

COLORS:

* Primary: #E63946 (red)
* Success: #2ECC71 (green)
* Warning: #F4A261 (yellow/orange)
* Background: #F8F9FA
* Text: #212529

TYPOGRAPHY:

* Inter / Poppins
* Strong headings, readable body

---

🌐 GLOBAL LAYOUT

TOP NAVBAR:

* Logo (Awaazify)
* Global search (issues, categories, locations)
* Notification icon
* Profile avatar

SIDEBAR (Desktop):

* Home
* Dashboard
* Civic Heatmap
* Categories
* Voters’ Voice
* Bookmarks
* Profile
* Settings

MOBILE:

* Bottom navigation:

  * Home
  * Map
  * Post (+ button)
  * Notifications
  * Profile

---

👋 1. ONBOARDING (FIRST-TIME USER)

* 2–3 screens:

  * What Awaazify does
  * “Me Too” concept
  * How issues become Top 10

* CTA: Get Started

---

🔐 2. AUTHENTICATION

* Welcome screen (Google / Phone / Email)

* OTP/Login input

* Error states

* Session handling:

  * Session expired screen

* Profile setup:

  * Name
  * State + City
  * Profile image

---

🏠 3. HOME / FEED

SECTIONS:

* High Priority Issues
* Near You
* Newly Added

🔎 SEARCH + FILTER:

* Keyword search
* Filters:

  * Category
  * Status
  * Time

EMPTY STATE:

* “No issues yet in your area”

---

📦 PROBLEM CARD

* Image/video
* Title
* Location
* Category
* 👥 “X people affected”

🏷 STATUS:

* Reported
* Verified
* In Progress
* Resolved

🏛 Department Tag:

* “Responsible: Municipal Dept”

⭐ TRUST:

* Verified badge
* Trusted user badge

📊 SIGNALS:

* Trending badge
* Most discussed tag

ACTIONS:

* 👍 Me Too (toggle + animation)
* 💬 Comment
* 🔗 Share
* 🚩 Report
* ⭐ Bookmark

---

📄 4. PROBLEM DETAIL PAGE

* Full media
* Title, category, location
* Description
* Posted by + timestamp

📌 ISSUE TIMELINE:

* Reported → Verified → In Progress → Resolved

🔗 CLUSTER INFO:

* “Part of a larger issue affecting X people”

📊 COMMUNITY FEEDBACK:

* “Is this still an issue?” (Yes/No)

ACTIONS:

* Me Too
* Comment
* Share
* Report

💬 COMMENTS:

* Avatar
* Text
* Timestamp
* Report option

---

📝 5. POST PROBLEM

* Title
* Description
* Category
* Location
* Upload media

🔍 DUPLICATE DETECTION (IMPORTANT):

* Show similar issues while typing
* Option:

  * Join existing issue
  * Create new

✅ FEEDBACK:

* “Added to existing cluster”
* “New issue created”

⚠️ ABUSE CONTROL:

* Posting cooldown message

---

📂 6. CATEGORY PAGE

* Category grid:

  * Road, Water, Electricity, Garbage, Safety
* Clicking shows filtered issues

---

📊 7. DASHBOARD

* Top issues
* Category stats
* Trend graphs
* Region insights

---

🗺 8. CIVIC HEATMAP (INDIA MAP)

INTERACTIVE MAP:

🎨 COLOR LEGEND (VISIBLE):

* Light Green → Resolved
* Green → Low
* Yellow → Medium
* Red → High
* Dark Red → Critical (Top 10)

HOVER:

* Tooltip:

  * State
  * Issue count
  * Top category

CLICK:
→ State detail view:

STATE VIEW:

* Total issues
* Top problems
* Category breakdown
* 🔥 Keywords (tags)
* Local clusters

LOADING STATE:

* Map skeleton loader

---

🗳 9. VOTERS’ VOICE TO LEADERS

* Input box (suggestion/question)
* Submit button

TOP 10 VOICES:

* Summary
* Engagement count
* Verified badge

---

👤 10. PROFILE

* User info
* My posts
* My Me Too activity
* Saved issues
* Edit/delete posts

---

⭐ 11. BOOKMARK PAGE

* Saved issues list

---

🔔 12. NOTIFICATIONS

Types:

* Comments
* Me Too updates
* Status updates

---

⚙️ 13. SETTINGS

* Profile settings
* Notification preferences
* Privacy settings
* Terms & Privacy links

---

🛡 14. ADMIN PANEL

* Top 20 issues list
* Approve/reject Top 10
* Flagged content moderation

📊 ANALYTICS:

* Most active regions
* Top categories
* Trends

---

⚠️ ERROR & EDGE STATES

* No data
* No results
* Network error
* Upload failed

---

✨ UX MICRO-INTERACTIONS

* Me Too animation (+1 effect)
* Smooth transitions
* Skeleton loaders
* Real-time updates

---

🌍 ACCESSIBILITY & FUTURE

* High contrast support
* Multi-language ready (English/Hindi)

---

🎯 GOAL

Design a complete, real-world civic platform that is:

* Clean
* Interactive
* Data-driven
* Scalable
* Professional

---

Return:

* Full UI screens
* Design system
* Reusable components
