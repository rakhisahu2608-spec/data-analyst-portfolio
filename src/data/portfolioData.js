export const portfolioData = {
  personal: {
    name: "Rakhi Sahu",
    role: "Data Analyst",
    title: "Data Analyst & Business Intelligence Specialist",
    headline: "Turning Data into Insights and Insights into Decisions.",
    bio: "Data Analyst passionate about deciphering complex datasets, engineering robust analytical pipelines, and crafting intuitive executive dashboards. Specializing in Python, SQL, Power BI, and statistical modeling to solve critical business problems and drive data-informed decisions.",
    githubUsername: "rakhisahu2608-spec",
    githubUrl: "https://github.com/rakhisahu2608-spec",
    linkedinUrl: "https://linkedin.com/in/rakhi-sahu",
    email: "rakhisahu.analytics@gmail.com",
    location: "India (Open to Remote Worldwide)",
    status: "Available for Data Analyst Roles & Projects"
  },

  telemetry: [
    { label: "Data Records Analyzed", value: "2.4M+", change: "+14% MoM", positive: true },
    { label: "BI Dashboards Engineered", value: "15+", change: "Production Ready", positive: true },
    { label: "Query Speed Optimization", value: "45%", change: "Avg. Latency Cut", positive: true },
    { label: "Data Model Accuracy", value: "99.8%", change: "Audit Verified", positive: true }
  ],

  about: {
    story: "My journey into data analysis began with a fascination for uncovering patterns beneath chaotic numbers. I bridge the gap between raw data tables and strategic boardroom decisions. Whether optimizing insurance claim pipelines, dissecting customer buying behaviors in e-commerce, or writing performant SQL queries, my focus is always on actionable business impact.",
    pillars: [
      {
        title: "High-Precision Data Cleaning",
        desc: "Raw data is inherently messy. I ensure integrity through automated deduplication, outlier detection, and strict schema validation.",
        icon: "ShieldCheck"
      },
      {
        title: "Actionable Business Analytics",
        desc: "Analytics is worthless without decisions. Every chart, metric, and statistical test is tied directly to revenue, risk, or efficiency.",
        icon: "TrendingUp"
      },
      {
        title: "Executive Data Storytelling",
        desc: "Translating multi-table relational models into clear visual narratives that C-level executives can understand and act upon in seconds.",
        icon: "PieChart"
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming & Analysis",
        items: [
          { name: "Python", level: 90, tag: "Primary Language", note: "Automation, EDA, statistical computing" },
          { name: "Pandas", level: 92, tag: "Data Wrangling", note: "Dataframes, indexing, time-series" },
          { name: "NumPy", level: 88, tag: "Scientific Computing", note: "Vectorized operations, matrix math" },
          { name: "Applied Statistics", level: 85, tag: "Methodology", note: "Hypothesis testing, regression, distributions" }
        ]
      },
      {
        id: "databases",
        name: "Databases & Querying",
        items: [
          { name: "SQL (Structured Query Language)", level: 92, tag: "Core", note: "Complex Joins, CTEs, Window Functions" },
          { name: "MySQL", level: 88, tag: "RDBMS", note: "Relational schema design, stored procedures" },
          { name: "PostgreSQL", level: 82, tag: "RDBMS", note: "Aggregations, query optimization, indexing" },
          { name: "Data Modeling", level: 86, tag: "Architecture", note: "Star schema, snowflake schema, entity relations" }
        ]
      },
      {
        id: "visualization",
        name: "Data Visualization & BI",
        items: [
          { name: "Power BI", level: 94, tag: "BI Platform", note: "DAX calculations, relational modeling, custom themes" },
          { name: "Advanced Excel", level: 90, tag: "Spreadsheets", note: "Power Query, Pivot Tables, VLOOKUP/XLOOKUP" },
          { name: "Matplotlib & Seaborn", level: 86, tag: "Python Viz", note: "Statistical distribution plots, heatmaps" },
          { name: "Plotly", level: 84, tag: "Interactive Viz", note: "Dynamic charts, geo-mapping, multi-axis graphs" }
        ]
      },
      {
        id: "methodologies",
        name: "Core Competencies",
        items: [
          { name: "Exploratory Data Analysis (EDA)", level: 94, tag: "Analysis", note: "Feature correlation, anomaly detection" },
          { name: "Data Cleaning & Preprocessing", level: 95, tag: "Data Prep", note: "Missing value imputation, normalization" },
          { name: "Dashboard Development", level: 92, tag: "UI/UX", note: "Interactive KPI tracking, drill-down metrics" },
          { name: "Business Storytelling", level: 89, tag: "Communication", note: "Executive presentations, actionable summaries" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "insurance-claims",
      title: "Insurance Claims Analysis Dashboard",
      subtitle: "Power BI Executive Dashboard & Risk Analytics",
      category: "Power BI",
      description: "An end-to-end Power BI analysis dashboard designed to monitor claim frequency, loss ratios, approval velocity, and policyholder risk segments across diverse demographics.",
      github: "https://github.com/rakhisahu2608-spec/insurance-claims-dashboard",
      demo: "#analytics-playground",
      featured: true,
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel"],
      highlights: [
        "Constructed custom DAX measures for Loss Ratio, Claim Settlement Cycle Time, and Severity Index.",
        "Uncovered 18% concentration of fraudulent claim anomalies using statistical outlier boundaries.",
        "Engineered intuitive cross-filtering drill-downs for regional policy underwriters."
      ]
    },
    {
      id: "ecommerce-analytics",
      title: "E-Commerce Sales & Customer Intelligence",
      subtitle: "End-to-End Python & SQL Business Analytics",
      category: "Python & SQL",
      description: "Comprehensive data analysis pipeline examining 100k+ transactions, customer cohorts, product performance, and revenue velocity to optimize marketing and customer retention.",
      github: "https://github.com/rakhisahu2608-spec/E-commerce",
      demo: "#analytics-playground",
      featured: true,
      technologies: ["Python", "Pandas", "SQL", "EDA", "Matplotlib", "Power BI"],
      highlights: [
        "Implemented RFM (Recency, Frequency, Monetary) segmentation revealing top 12% high-value customer cluster.",
        "Pinpointed critical conversion drop-offs in the checkout funnel, identifying a 23% recovery opportunity.",
        "Built automated monthly reporting scripts extracting multi-table sales records via SQL."
      ]
    },
    {
      id: "healthcare-analytics",
      title: "Healthcare Patient Flow & Resource Optimization",
      subtitle: "SQL & Python Operational Modeling",
      category: "Data Analysis",
      description: "Operational research project analyzing hospital patient admission patterns, average length of stay (ALOS), and departmental bed allocation to reduce bottlenecks.",
      github: "https://github.com/rakhisahu2608-spec",
      demo: "#analytics-playground",
      featured: false,
      technologies: ["SQL", "Python", "Plotly", "Statistical Testing"],
      highlights: [
        "Identified peak ER admission intervals, recommending dynamic nurse shift rescheduling.",
        "Reduced simulated patient triage delay by 22% through queue priority optimization."
      ]
    },
    {
      id: "financial-portfolio-risk",
      title: "Financial Portfolio & Risk Volatility Engine",
      subtitle: "Quantitative Statistical Analysis",
      category: "Python & SQL",
      description: "Statistical modeling tool assessing historical stock returns, Value at Risk (VaR), Sharpe ratios, and asset covariance matrices for portfolio risk management.",
      github: "https://github.com/rakhisahu2608-spec",
      demo: "#analytics-playground",
      featured: false,
      technologies: ["Python", "NumPy", "Pandas", "Statistics", "Seaborn"],
      highlights: [
        "Calculated 95% and 99% parametric & historical Value-at-Risk across mixed-asset portfolios.",
        "Visualized correlation heatmaps to guide hedging strategies and asset diversification."
      ]
    }
  ],

  playgroundData: {
    monthlyMetrics: [
      { month: "Jan", revenue: 42000, claims: 180, conversion: 3.2, satisfaction: 94 },
      { month: "Feb", revenue: 48500, claims: 165, conversion: 3.5, satisfaction: 95 },
      { month: "Mar", revenue: 54200, claims: 190, conversion: 3.8, satisfaction: 93 },
      { month: "Apr", revenue: 51000, claims: 150, conversion: 4.1, satisfaction: 96 },
      { month: "May", revenue: 63000, claims: 140, conversion: 4.4, satisfaction: 97 },
      { month: "Jun", revenue: 68500, claims: 135, conversion: 4.6, satisfaction: 98 },
      { month: "Jul", revenue: 74200, claims: 120, conversion: 4.9, satisfaction: 98 },
      { month: "Aug", revenue: 81000, claims: 110, conversion: 5.2, satisfaction: 99 }
    ],
    categoryShare: [
      { name: "Direct Consumer", value: 42, color: "#10b981" },
      { name: "B2B Enterprise", value: 28, color: "#06b6d4" },
      { name: "Partnership", value: 18, color: "#3b82f6" },
      { name: "Affiliate", value: 12, color: "#8b5cf6" }
    ],
    kpis: {
      totalRevenue: "$482,400",
      revenueGrowth: "+26.8%",
      claimResolutionAvg: "2.4 Days",
      resolutionImprovement: "-38% Time",
      avgOrderValue: "$142.50",
      conversionRate: "4.85%"
    }
  },

  journey: [
    {
      period: "2024 - Present",
      title: "Data Analyst & Business Intelligence Specialist",
      category: "Experience",
      organization: "Independent Analytics & Client Portfolios",
      description: "Delivering end-to-end data pipelines, custom Power BI dashboards, and exploratory data analysis for e-commerce and finance domains. Automating ETL workflows with Python and SQL."
    },
    {
      period: "2023 - 2024",
      title: "Advanced Data Analytics Specialization",
      category: "Certifications & Training",
      organization: "Industry Credentials & Applied Projects",
      description: "Mastered Power BI DAX modeling, relational schema architecture, advanced Python data science stack (Pandas/NumPy), and SQL database query tuning."
    },
    {
      period: "2021 - 2023",
      title: "Bachelor of Science / Computer Applications",
      category: "Education",
      organization: "University Education",
      description: "Deepened foundations in computer science, relational database management systems (RDBMS), statistical mathematics, and algorithmic problem solving."
    }
  ]
};
