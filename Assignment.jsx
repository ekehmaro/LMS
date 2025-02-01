import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; 
import './Assignment.css'; 

const Assignment = ({ userName = "John Doe", profilePic }) => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const toggleCoursesDropdown = () => {
    setCoursesDropdownOpen(!isCoursesDropdownOpen);
  };

  return (
    <div className="assign-dashboard-wrapper">
      {/* Sidebar */}
      <div className="assign-sidebar">
        <h1 className="assign-app-title">Medee App</h1>
        <div className="assign-profile-section">
          <img
            src={profilePic || "default-profile.png"}
            alt="Profile"
            className="assign-profile-picture"
          />
          <div className="assign-profile-info">
            <p className="assign-user-name">{userName}</p>
            <p className="assign-user-role">Student</p>
          </div>
        </div>
        <hr className="assign-separator" />
        <nav className="assign-nav-links">
          <Link to="/dashboard">
            <span className="assign-icon"><i className="fa fa-home"></i></span> Dashboard
          </Link>
          <div className="assign-dropdown">
            <Link
              to="#course"
              onClick={(e) => {
                e.preventDefault();
                toggleCoursesDropdown();
              }}
              className="assign-dropdown-toggle"
            >
              <span className="assign-icon"><i className="fa fa-book"></i></span> Courses
            </Link>
            {isCoursesDropdownOpen && (
              <div className="assign-dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="/assignment">Assignments</Link>
                <Link to="/announcement">Announcements</Link>
                <Link to="#">Grades</Link>
              </div>
            )}
          </div>
          <Link to="#">
            <span className="assign-icon"><i className="fa fa-calendar"></i></span> Time Table
          </Link>
          <Link to="#">
            <span className="assign-icon"><i className="fa fa-building"></i></span> Department
          </Link>
          <Link to="#">
            <span className="assign-icon"><i className="fa fa-newspaper-o"></i></span> News
          </Link>
          <Link to="#">
            <span className="assign-icon"><i className="fa fa-bell"></i></span> Notification
          </Link>
        </nav>
        <div className="assign-footer-links">
          <Link to="#">Help/FAQ</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="assign-main-content">
        {/* Header */}
        <header className="assign-main-header">
          <h2 className="assign-dashboard-title">Course</h2>
          <div className="assign-header-icons">
            <input
              type="text"
              placeholder="Search..."
              className="assign-search-bar"
            />
            <button className="assign-icon-button"><i className="fa fa-cogs"></i></button>
            <button className="assign-icon-button"><i className="fa fa-sun-o"></i></button>
            <button className="assign-icon-button"><i className="fa fa-sign-out"></i></button>
          </div>
        </header>

        {/* Assignment Section */}
        <div className="assign-assignment-section">
          <h3>Home Work</h3>
          <hr />
          <div className="assign-assignment-item">
            <h4>Math Assignment</h4>
            <p>Topic: Algebra and Quadratic Equations</p>
            <button className="assign-button">Open Assignment</button>
          </div>
          <hr />
          <div className="assign-assignment-item">
            <h4>Physics Assignment</h4>
            <p>Topic: Laws of Motion</p>
            <button className="assign-button">Open Assignment</button>
          </div>
          <hr />
          <div className="assign-assignment-item">
            <h4>Chemistry Assignment</h4>
            <p>Topic: Periodic Table Trends</p>
            <button className="assign-button">Open Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
