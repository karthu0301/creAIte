import React from "react";
import "./SchedulePage.css";

const SchedulePage = () => {
  return (
    <div className="schedule-page">
      <header className="header">
        <h1>Schedule</h1>
      </header>

      <div className="content">
        <div className="left-panel">
          <h2>Project Details</h2>
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

        <div className="divider"></div>

        <div className="right-panel">
          <h2>Timeline Progress</h2>
          <table className="gantt-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>Apr</th>
                <th>May</th>
                <th>Jun</th>
                <th>Jul</th>
                <th>Aug</th>
                <th>Sep</th>
                <th>Oct</th>
                <th>Nov</th>
                <th>Dec</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Editing Like a Pro - YT Video</td>
                <td colSpan="4" className="task-bar-red"></td>
                <td colSpan="8"></td>
              </tr>
              <tr>
                <td>How to Speak Confidently on Camera - Masterclass</td>
                <td colSpan="1" className="task-bar-orange"></td>
                <td colSpan="11"></td>
              </tr>
              <tr>
                <td>GRWM - Instagram Reel</td>
                <td colSpan="7" className="task-bar-green"></td>
                <td colSpan="5"></td>
              </tr>
              <tr>
                <td>Turning Your Passion into Content - YT Video</td>
                <td colSpan="7" className="task-bar-blue"></td>
                <td colSpan="5"></td>
              </tr>
              <tr>
                <td>Building Engaging Slides for Your Masterclass - YT Video</td>
                <td colSpan="11" className="task-bar-orange"></td>
                <td></td>
              </tr>
            </tbody>
          </table>

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


export default SchedulePage;
