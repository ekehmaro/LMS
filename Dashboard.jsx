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
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <h1 className="app-title">Medee App</h1>
        <div className="profile-section">
          <img
            src={profilePic || "default-profile.png"}
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <p className="user-name">{userName}</p>
            <p className="user-role">Student</p>
          </div>
        </div>
        <hr className="separator" />

        <nav className="nav-links">
          <Link to="/dashboard">
            <span className="icon"><i className="fa fa-home"></i></span> Dashboard
          </Link>
          <div className="dropdown">
            {/* Clickable Courses Link */}
            <div className="dropdown-header">
              <Link to="/course" className="dropdown-toggle">
                <span className="icon"><i className="fa fa-book"></i></span> Courses
              </Link>
              <i
                className={`fa ${isCoursesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'} toggle-arrow`}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={toggleCoursesDropdown}
              ></i>
            </div>

            {/* Dropdown menu */}
            {isCoursesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="/assignments">Assignments</Link>
                <Link to="/announcement">Announcements</Link>
                <Link to="/grades">Grades</Link>
              </div>
            )}
          </div>
          <Link to="#timetable">
            <span className="icon"><i className="fa fa-calendar"></i></span> Time Table
          </Link>
          <Link to="#department">
            <span className="icon"><i className="fa fa-building"></i></span> Department
          </Link>
          <Link to="#news">
            <span className="icon"><i className="fa fa-newspaper-o"></i></span> News
          </Link>
          <Link to="#notification">
            <span className="icon"><i className="fa fa-bell"></i></span> Notification
          </Link>
          <div className="footer-links">
            <Link to="#help">
              <span className="icon"><i className="fa fa-question-circle"></i></span> Help
            </Link> 
            <Link to="#faq">
              <span className="icon"><i className="fa fa-info-circle"></i></span> FAQ
            </Link>
          </div>
        </nav>
      </div>

      <div className="main-content">
        <div className="main-header">
          <h2 className="dashboard-title">Dashboard</h2>
          <div className="header-icons">
            <button className="icon-button"><i className="fa fa-cogs"></i> </button>
            <button className="icon-button"><i className="fa fa-sun-o"></i> </button>
            <button className="icon-button"><i className="fa fa-sign-out"></i> </button>
          </div>
        </div>

        <div className="horizontal-layout-container">
          <div className="horizontal-layout">
            <div className="info-box cream">Courses Registered</div>
            <div className="info-box orange">Quizzes Practiced</div>
            <div className="info-box light-blue">Assignments Done</div>
          </div>
        </div>

        <div className="activity-section">
          <img
            src="activity-placeholder.png"
            alt="Activity Placeholder"
            className="activity-image"
          />
          <div className="activity-text-container">
            <p className="activity-text">No Activities Yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
