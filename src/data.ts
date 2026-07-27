export const projects = [
  {
    title: "DeepTrade - Stock Market Prediction",
    desc: "ML-based stock market prediction system using Python, LSTM neural networks, and technical indicators for trend forecasting and buy/sell signal generation.",
    tags: ["Python", "LSTM", "Pandas", "scikit-learn"],
    metric: "ML",
    metricLabel: "Prediction",
    hue: 295,
    github: "https://github.com/vrushabhmahajan15",
    demo: null,
  },
  {
    title: "Global EV Market Insight Dashboard",
    desc: "Interactive Power BI dashboard with global EV sales analysis, market trends, KPI tracking, YoY growth, BEV vs PHEV comparison, and geographical insights.",
    tags: ["Power BI", "DAX", "Data Modeling", "Excel"],
    metric: "BI",
    metricLabel: "Dashboard",
    hue: 200,
    github: null,
    demo: "https://drive.google.com/file/d/1LTo5GG1GkzMHqJSsOsq6vhbdZbQvuRzk/view?usp=sharing",
  },
  {
    title: "IPL Data Analysis using Python",
    desc: "Comprehensive IPL data analysis using Python, Pandas, Matplotlib, and Seaborn to extract insights on teams, players, toss impact, batting, and bowling.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    metric: "EDA",
    metricLabel: "Analysis",
    hue: 240,
    github: "https://github.com/vrushabhmahajan15",
    demo: null,
  },
  {
    title: "Business Analytics at Codec Technologies",
    desc: "Analyzed large datasets with SQL and Excel; developed Power BI dashboards for revenue growth, market share, customer acquisition, and stakeholder KPIs.",
    tags: ["SQL", "Power BI", "Excel", "Business Intelligence"],
    metric: "KPI",
    metricLabel: "Dashboards",
    hue: 340,
    github: null,
    demo: null,
  },
];

export const skills = [
  { name: "Python", level: 80, group: "Languages" },
  { name: "SQL", level: 85, group: "Languages" },
  { name: "DAX", level: 75, group: "Languages" },
  { name: "HTML / CSS", level: 70, group: "Languages" },
  { name: "Pandas", level: 82, group: "ML / AI" },
  { name: "NumPy", level: 78, group: "ML / AI" },
  { name: "Matplotlib", level: 80, group: "ML / AI" },
  { name: "LSTM / Deep Learning", level: 75, group: "ML / AI" },
  { name: "SQL Queries", level: 88, group: "Data Eng" },
  { name: "Microsoft Excel", level: 85, group: "Data Eng" },
  { name: "ETL Workflows", level: 78, group: "Data Eng" },
  { name: "Data Cleaning", level: 72, group: "Data Eng" },
  { name: "Power BI", level: 70, group: "Visualization" },
  { name: "Matplotlib", level: 90, group: "Visualization" },
  { name: "Seaborn", level: 78, group: "Visualization" },
  { name: "Dashboard Design", level: 65, group: "Visualization" },
];

export const timeline = [
  {
    year: "2026",
    role: "Data Science",
    org: "Profound Edutech, Nashik",
    note: "Completed a 6-month Data Science training program focused on analysis, visualization, machine learning fundamentals, and real-world analytical projects using Python, SQL, and Power BI.",
  },
  {
    year: "Dec 2025 - Jan 2026",
    role: "Data Analytics Intern",
    org: "Codec Technologies Pvt. Ltd.",
    note: "AICTE & ICAC approved internship. Analyzed datasets with SQL and Excel and built Power BI dashboards for KPI tracking.",
  },
  {
    year: "Oct 2025",
    role: "Data Science Intern",
    org: "TechnoHacks Solutions Pvt. Ltd.",
    note: "1-month Data Science internship with practical exposure to real-world data science workflows at an ISO 9001:2015 certified company.",
  },
  {
    year: "Aug 2025",
    role: "Hackathon Participant",
    org: "SUNHACKS 2K25 - Sandip University",
    note: "International level hackathon organized by the School of Computer Sciences & Engineering and sponsored by ESDS, ITS, and others.",
  },
  {
    year: "Sep 2025",
    role: "Workshop Participant",
    org: "INKSIGHT 2025 - Webmaster's Club",
    note: "Online workshop, From Idea to Publication, organized by Sandip University Webmaster's Club.",
  },
  {
    year: "2022 - 2026",
    role: "B.Tech - Computer Science & Engineering",
    org: "Sandip University, Nashik",
    note: "Roll No. 220105131289. Focused on data analytics, BI tools, and software engineering.",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte - 2026",
  },
  { name: "Automate Development Tasks with GitHub Actions", issuer: "Microsoft Learn - Jan 2026" },
  { name: "Get Started with Copilot in Power BI", issuer: "Microsoft Learn - Jan 2026" },
  { name: "Discover Data Analysis", issuer: "Microsoft Learn - Jan 2026" },
  { name: "Visualize Real-Time Data with Azure Stream Analytics & Power BI", issuer: "Microsoft Learn - Jan 2026" },
  { name: "Unlocking AI for Everyone (Beginner) - NSQF Level 2", issuer: "Microsoft / Skill India / NCVET - Apr 2026" },
  { name: "Introduction to Data Science", issuer: "Cisco Networking Academy - Jan 2026" },
  { name: "Data Science Internship Completion", issuer: "TechnoHacks Solutions Pvt. Ltd. - Oct 2025" },
  { name: "Data Analytics Internship - AICTE & ICAC Approved", issuer: "Codec Technologies Pvt. Ltd. - Jan 2026" },
  { name: "SUNHACKS 2K25 - International Hackathon Participation", issuer: "Sandip University, Nashik - Aug 2025" },
  { name: "INKSIGHT 2025 Workshop - From Idea to Publication", issuer: "Webmaster's Club, Sandip University - Sep 2025" },
  { name: "Data Science Certification Course", issuer: "Profound Edutech, Nashik" },
];
