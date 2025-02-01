import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import 'font-awesome/css/font-awesome.min.css'; 
import './Dashboard.css';

const Dashboard = ({ userName = "John Precious", profilePic }) => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const toggleCoursesDropdown = (e) => {
    e.preventDefault(); 
    setCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  return (
    <div className="dash-dashboard-wrapper">
      {/* Sidebar */}
      <div className="dash-sidebar">
        <h1 className="dash-app-title">Medee App</h1>
        <div className="dash-profile-section">
          <img
            src={profilePic || "default-profile.png"}
            alt="Profile"
            className="dash-profile-picture"
          />
          <div className="dash-profile-info">
            <p className="dash-user-name">{userName}</p>
            <p className="dash-user-role">Student</p>
          </div>
        </div>
        <hr className="dash-separator" />

        <nav className="dash-nav-links">
          <Link to="/dashboard">
            <span className="dash-icon"><i className="fa fa-home"></i></span> Dashboard
          </Link>
          <div className="dash-dropdown">
            {/* Clickable Courses Link */}
            <div className="dash-dropdown-header">
              <Link to="/course" className="dash-dropdown-toggle">
                <span className="dash-icon"><i className="fa fa-book"></i></span> Courses
              </Link>
              <i
                className={`fa ${isCoursesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'} dash-toggle-arrow`}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={toggleCoursesDropdown}
              ></i>
            </div>

            {/* Dropdown menu */}
            {isCoursesDropdownOpen && (
              <div className="dash-dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="/assignments">Assignments</Link>
                <Link to="/announcement">Announcements</Link>
                <Link to="#">Grades</Link>
              </div>
            )}
          </div>
          <Link to="#">
            <span className="dash-icon"><i className="fa fa-calendar"></i></span> Time Table
          </Link>
          <Link to="#">
            <span className="dash-icon"><i className="fa fa-building"></i></span> Department
          </Link>
          <Link to="#">
            <span className="dash-icon"><i className="fa fa-newspaper-o"></i></span> News
          </Link>
          <Link to="#">
            <span className="dash-icon"><i className="fa fa-bell"></i></span> Notification
          </Link>
          <div className="dash-footer-links">
            <Link to="#">
              <span className="dash-icon"><i className="fa fa-question-circle"></i></span> Help
            </Link> 
            <Link to="#">
              <span className="dash-icon"><i className="fa fa-info-circle"></i></span> FAQ
            </Link>
          </div>
        </nav>
      </div>

      <div className="dash-main-content">
        <div className="dash-main-header">
          <h2 className="dash-dashboard-title">Dashboard</h2>
          <div className="dash-header-icons">
            <button className="dash-icon-button"><i className="fa fa-cogs"></i> </button>
            <button className="dash-icon-button"><i className="fa fa-sun-o"></i> </button>
            <button className="dash-icon-button"><i className="fa fa-sign-out"></i> </button>
          </div>
        </div>

        <div className="dash-horizontal-layout-container">
          <div className="dash-horizontal-layout">
            <div className="dash-info-box dash-cream">Courses Registered</div>
            <div className="dash-info-box dash-orange">Quizzes Practiced</div>
            <div className="dash-info-box dash-light-blue">Assignments Done</div>
          </div>
        </div>

        <div className="dash-activity-section">
          <img
            src="activity-placeholder.png"
            alt="Activity Placeholder"
            className="dash-activity-image"
          />
          <div className="dash-activity-text-container">
            <p className="dash-activity-text">No Activities Yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
