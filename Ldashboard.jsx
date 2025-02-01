import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./LDashboard.css";

const LDashboard = ({ userName = "Miss Preye", profilePic }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dashboard-wrapper-unique">
      <div className="sidebar-unique">
        
        <h1 className="app-title-unique">Medee App</h1>
        
        <div className="profile-section-unique">
          <img src={profilePic || "default-profile.png"} alt="Profile" className="profile-picture-unique" />
          <div className="profile-info-unique">
            <p className="user-name-unique">{userName}</p>
            <p className="user-role-unique">Teacher</p>
          </div>
        </div>

        <hr className="separator-unique" />

        <nav className="nav-links-unique">
          <Link to="/ldashboard"><i className="fa fa-home"></i> Dashboard</Link>

          <div className="dropdown-unique">
            <div className="dropdown-header-unique">
              <Link to="/lcourse" className="course-link-unique">
                <i className="fa fa-book"></i> Courses
              </Link>
              <i className={`fa ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"} toggle-arrow-unique`} onClick={toggleDropdown}></i>
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu-unique">
                <Link to="/coursedetails">Course Details</Link>
                <Link to="#">Assignments</Link>
                <Link to="#">Resources</Link>
                <Link to="#">Grades</Link>
              </div>
            )}
          </div>

          <Link to="#"><i className="fa fa-calendar"></i> Time Table</Link>
          <Link to="#"><i className="fa fa-building"></i> Department</Link>
          <Link to="#"><i className="fa fa-newspaper-o"></i> News</Link>
          <Link to="#"><i className="fa fa-graduation-cap"></i> Grades</Link>
          <Link to="#"><i className="fa fa-folder"></i> Resources</Link>
          <Link to="#"><i className="fa fa-bell"></i> Notification</Link>
          <Link to="#"><i className="fa fa-question-circle"></i> Help/FAQ</Link>
        </nav>
      </div>

      <div className="main-content-unique">
        <header className="main-header-unique">
          <input type="text" placeholder="Search..." className="search-bar-unique" />
          <div className="header-icons-unique">
            <i className="fa fa-cogs"></i>
            <i className="fa fa-sun-o"></i>
            <i className="fa fa-sign-out"></i>
          </div>
        </header>

        <div className="dashboard-content-unique">
          <h2>Welcome, Miss Preye</h2>
          <p>Here's your teaching overview for today.</p>

          <div className="overview-container-unique">
            <div className="overview-cards-unique">
              <div className="overview-card-unique light-blue-unique">
                <i className="fa fa-graduation-cap"></i>
                <p>Enrolled Students</p>
                <h3>300</h3>
              </div>
              <div className="overview-card-unique orange-unique">
                <i className="fa fa-check-circle"></i>
                <p>Attendance</p>
                <h3>95%</h3>
              </div>
              <div className="overview-card-unique light-green-unique">
                <i className="fa fa-bar-chart"></i>
                <p>Overall Grade Report</p>
                <h3>A-</h3>
              </div>
            </div>

            <div className="recent-activities-unique">
              <h3>Recent Activities</h3>
              <hr />
              <div className="activity-unique">
                <p>Math 101 <i className="fa fa-video-camera"></i></p>
              </div>
              <div className="activity-unique">
                <p>Physics Lab <i className="fa fa-flask"></i></p>
              </div>
              <div className="activity-unique">
                <p>Assignment Submission <i className="fa fa-file-text"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LDashboard;
