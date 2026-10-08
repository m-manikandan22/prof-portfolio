import type { Project } from "./types";

// Add `githubUrl`, `demoUrl`, `result` and `futureImprovements` to a project
// once you have real values. The UI hides anything that is not set.
export const projects: Project[] = [
  {
    slug: "quote-genie",
    title: "Quote Genie: Predictive Pricing Intelligence System",
    category: "Machine Learning, Full-stack",
    summary:
      "XGBoost models that predict logistics prices and estimate the probability of winning a quote, served through a React and FastAPI application.",
    problem:
      "Logistics quotes need a price estimate and a view of how likely the quote is to be won.",
    solution:
      "Two XGBoost models, one for logistics price prediction and one for win-probability estimation, trained on collected data and deployed behind a FastAPI service with a React front end.",
    contribution:
      "Data collection, feature engineering and normalization, model building with XGBoost, and deployment of the React + FastAPI solution.",
    technologies: ["Python", "XGBoost", "FastAPI", "React", "Machine Learning"],
    concepts: ["Price prediction", "Win-probability estimation", "Feature engineering", "Normalization", "Model deployment"],
  },
  {
    slug: "ai-self-healing-smart-grid",
    title: "AI Self-Healing Smart Grid",
    category: "Deep Learning, Reinforcement Learning",
    summary:
      "A simulated smart power grid with LSTM demand forecasting and a DQN agent that reroutes energy autonomously to recover from faults.",
    problem: "A power grid has to keep supplying demand when parts of the network fail.",
    solution:
      "A smart grid simulation built with NetworkX, an LSTM model for demand forecasting, and a DQN-based reinforcement learning agent that reroutes energy for fault recovery.",
    contribution:
      "Built the grid simulation, the LSTM forecasting model and the DQN-based rerouting agent.",
    technologies: ["Python", "NetworkX", "LSTM", "DQN", "Reinforcement Learning"],
    concepts: ["Demand forecasting", "Graph simulation", "Deep Q-Networks", "Autonomous fault recovery"],
  },
];
