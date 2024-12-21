import React from "react";
import "../pages/ProfilePage.css";

const ProfileContent = () => {
  return (
    <div className="profile-page">
      {/* Profile Information */}
      <section className="profile-info">
        <div className="profile-picture">
          <img
            src="https://via.placeholder.com/128x128"
            alt="Profile"
            className="profile-img"
          />
          <button className="edit-profile-button">Edit profile image</button>
        </div>
        <div className="profile-details">
          <div className="profile-item">
            <span className="profile-label">Name:</span>
            <span className="profile-value">Vivian Carter</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Username:</span>
            <span className="profile-value">@Vividify</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Email:</span>
            <span className="profile-value">Vivian@u.nus.edu</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Main Platform:</span>
            <span className="profile-value">YouTube</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Achievements:</span>
            <span className="profile-value">
              10K Subscribers | Certified Adobe Expert
            </span>
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">Past Projects</h2>
        <div className="projects-grid">
          {/* Project Card 1 */}
          <div className="project-card">
            <img
              src="https://via.placeholder.com/160x160"
              alt="Project"
              className="project-img"
            />
            <div className="project-info">
              <h3 className="project-title">Across Horizons</h3>
              <p className="project-description">
                Exploring places far and wide. Italy travel vlog.
              </p>
              <button className="project-edit-button">Edit</button>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="project-card">
            <img
              src="https://via.placeholder.com/160x160"
              alt="Project"
              className="project-img"
            />
            <div className="project-info">
              <h3 className="project-title">Ink & Pixels</h3>
              <p className="project-description">
                Masterclass video on combining art, technology, and design.
              </p>
              <button className="project-edit-button">Edit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="action-buttons">
        <button className="action-button">Generate AI Suggestions</button>
        <button className="action-button">Import Data</button>
        <button className="action-button">Recent Activity Tracker</button>
        <button className="action-button">New Project</button>
      </section>
    </div>
  );
};

export default ProfileContent;
