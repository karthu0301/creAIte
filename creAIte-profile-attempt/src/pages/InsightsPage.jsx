import React from 'react';
import "./Insights.css"

const InsightsPage = () => {
  const insights = [
    { title: "Ink & Pixels", description: "Engagement is expected to drop at the 2:30 mark." },
    { title: "Keywords for SEO", description: "Increase content discoverability with keyword prioritization." },
    { title: "Engagement Boosting Suggestions", description: "Improve interaction with your audience." },
  ];

  const tools = [
    "Top Performing Content",
    "Performance Graphs",
    "Optimal Posting",
    "Hashtags and Trends",
    "Content Structure",
  ];

  const projects = [
    { title: "Across Horizons", type: "YouTube - Italy Travel Vlog" },
    { title: "Editing Like a Pro", type: "YouTube - Video (Long Form)" },
    { title: "Vivid Tales", type: "YouTube - Video (Long Form)" },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Insights</h1>
        <button className="import-button">Import Project Data</button>
      </header>
      <main className="main">
        {/* Viewer Demographics */}
        <section className="viewer-demographics">
          <div className="chart-container">
            <h3>User Demographics by Percentage</h3>
            <div className="chart">
              <div className="bar" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "100%" }}></div>
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "20%" }}></div>
              <div className="bar" style={{ height: "10%" }}></div>
            </div>
          </div>
          <h2>Viewer Demographics & Statistics</h2>
        </section>

        {/* AI Performance and Content Recommendations */}
        <section className="insights">
          <div className="insights-panel">
            {insights.map((insight, index) => (
              <div key={index} className="insight">
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Access Tools */}
        <section className="quick-access-tools">
          <h3>Quick Access Tools & Metrics</h3>
          {tools.map((tool, index) => (
            <button key={index} className="tool-button">
              {tool}
            </button>
          ))}
        </section>

        {/* Individual Project Data */}
        <section className="individual-project-data">
          <h3>Individual Project Data</h3>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.type}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default InsightsPage
