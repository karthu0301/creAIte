import React from "react";
import "./SchedulePage.css";

const SchedulePage = () => {
  return (
    <div className="schedule-page">
      <div className="left-panel">
        <h2>Schedule</h2>
        <form>
          <label>Project Name</label>
          <input type="text" placeholder="Name of the Project" />

          <label>Project Type</label>
          <input type="text" placeholder="Type of the Project" />

          <label>Project Deadline</label>
          <input type="date" />

          <label>Tasks to be completed</label>
          <textarea placeholder="List of Tasks"></textarea>

          <button type="submit">Generate</button>
        </form>
        <p>Get a customised plan to meet your deadlines!</p>
      </div>

      <div className="right-panel">
        <h2>Timeline Progress - Gantt Chart</h2>
        <div className="gantt-chart">
          <div className="task-row">
            <span className="task-name">Editing Like a Pro - YT Video</span>
            <div className="task-bar task-bar-red" style={{ width: "90%" }}></div>
          </div>
          <div className="task-row">
            <span className="task-name">How to Speak Confidently on Camera - Masterclass</span>
            <div className="task-bar task-bar-orange" style={{ width: "10%" }}></div>
          </div>
          <div className="task-row">
            <span className="task-name">GRWM - Instagram Reel</span>
            <div className="task-bar task-bar-green" style={{ width: "70%" }}></div>
          </div>
          <div className="task-row">
            <span className="task-name">Turning Your Passion into Content - YT Video</span>
            <div className="task-bar task-bar-blue" style={{ width: "70%" }}></div>
          </div>
          <div className="task-row">
            <span className="task-name">Building Engaging Slides for Your Masterclass - YT Video</span>
            <div className="task-bar task-bar-orange" style={{ width: "90%" }}></div>
          </div>
        </div>

        <div className="priority-panel">
          <h3>Priority Panel</h3>
          <div className="priority-tags">
            <button>Masterclass</button>
            <button>Youtube</button>
            <button>Instagram</button>
          </div>
          <select>
            <option>Priority Level (High to Low)</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="team-progress">
          <h3>Team Progress</h3>
          <div className="team-member">
            <span>JW</span>
            <div className="progress-bar progress-bar-red" style={{ width: "50%" }}></div>
          </div>
          <div className="team-member">
            <span>CM</span>
            <div className="progress-bar progress-bar-green" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <button>Profile</button>
        <button>Scheduling</button>
        <button>Ideation</button>
        <button>Editing</button>
      </footer>
    </div>
  );
};

export default SchedulePage;