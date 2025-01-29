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
            <Link
              to="#course"
              onClick={(e) => {
                e.preventDefault();
                toggleCoursesDropdown();
              }}
              className="dropdown-toggle"
            >
              <span className="icon"><i className="fa fa-book"></i></span> Courses
            </Link>
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
        </nav>
        <div className="footer-links">
          <Link to="#help">Help</Link>
          <Link to="#faq">FAQ</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ backgroundColor: 'white' }}>
        {/* Header */}
        <header className="main-header">
          <h2 className="dashboard-title">Course</h2>
          <div className="header-icons">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
            />
            <button className="icon-button"><i className="fa fa-cogs"></i></button>
            <button className="icon-button"><i className="fa fa-sun-o"></i></button>
            <button className="icon-button"><i className="fa fa-sign-out"></i></button>
          </div>
        </header>

        {/* Assignment Section */}
        <div className="assignment-section" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h3>Home Work</h3>
          <hr />
          <div className="assignment-item">
            <h4>Math Assignment</h4>
            <p>Topic: Algebra and Quadratic Equations</p>
            <Link to="/math-assignment">View Details</Link>
          </div>
          <hr />
          <div className="assignment-item">
            <h4>Physics Assignment</h4>
            <p>Topic: Laws of Motion</p>
            <Link to="/physics-assignment">View Details</Link>
          </div>
          <hr />
          <div className="assignment-item">
            <h4>Chemistry Assignment</h4>
            <p>Topic: Periodic Table Trends</p>
            <Link to="/chemistry-assignment">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
