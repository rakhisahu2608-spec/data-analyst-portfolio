// Service to fetch live public GitHub repositories for rakhisahu2608-spec
// Includes graceful fallback if rate-limited or offline

const FALLBACK_REPOS = [
  {
    id: 1,
    name: "insurance-claims-dashboard",
    description: "Insurance Claims Analysis Dashboard | Power BI Project featuring risk modeling, settlement cycle times, and anomaly detection.",
    html_url: "https://github.com/rakhisahu2608-spec/insurance-claims-dashboard",
    language: "Power BI / DAX",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-08-15T09:54:21Z",
    topics: ["data-analysis", "power-bi", "dax", "dashboard", "business-intelligence"]
  },
  {
    id: 2,
    name: "E-commerce",
    description: "E-Commerce Data Analysis project analyzing sales, customers, products, and revenue using Python, SQL, Excel, and Power BI. Cleaned & transformed data, performed EDA, and built dashboards.",
    html_url: "https://github.com/rakhisahu2608-spec/E-commerce",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-08-13T08:20:27Z",
    topics: ["python", "sql", "eda", "power-bi", "excel", "data-analytics"]
  },
  {
    id: 3,
    name: "Testing",
    description: "Analytical experiments, unit validation scripts, and data pipeline tests.",
    html_url: "https://github.com/rakhisahu2608-spec/Testing",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-04-19T19:19:15Z",
    topics: ["testing", "analytics"]
  }
];

export async function fetchGithubRepos(username = "rakhisahu2608-spec") {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!response.ok) {
      console.warn(`GitHub API returned status ${response.status}. Using fallback repositories.`);
      return { repos: FALLBACK_REPOS, source: "cached" };
    }

    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      return { repos: FALLBACK_REPOS, source: "cached" };
    }

    return { repos: data, source: "live" };
  } catch (error) {
    console.warn("Error fetching GitHub repos:", error);
    return { repos: FALLBACK_REPOS, source: "fallback" };
  }
}
