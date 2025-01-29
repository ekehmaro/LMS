import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Announcement.css";

const Announcement = ({ userName = "John Doe", profilePic }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleCourseClick = () => {
    navigate("/course");
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
            <span
              className="dropdown-toggle"
              onClick={handleCourseClick}
            >
              <span className="icon"><i className="fa fa-book"></i></span> Courses
              <span
                className={`toggle-arrow ${dropdownOpen ? "open" : ""}`}
                onClick={toggleDropdown}
              >
                <i className="fa fa-caret-down"></i>
              </span>
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="#assignments">Assignments</Link>
                <Link to="#grades">Grades</Link>
                <Link to="/announcement">Announcements</Link>
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
          <Link to="#help">
            <i className="fa fa-question-circle"></i> Help
          </Link>
          <Link to="#faq">
            <i className="fa fa-info-circle"></i> FAQ
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="main-header">
          <h2 className="dashboard-title">Announcements</h2>
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

        {/* Announcement Wrapper Section */}
        <div className="announcement-wrapper">
          <div className="announcement-section">
            <div className="announcement-item">
              <div className="announcement-header">
                <h3>Upcoming Exam Schedule</h3>
                <p className="announcement-date">January 16, 2025</p>
              </div>
              <div className="announcement-content">
                <p>The exam for Math 101 will be held on January 20, 2025, in Room 305.</p>
              </div>
            </div>
            <div className="announcement-item">
              <div className="announcement-header">
                <h3>New Course Material Available</h3>
                <p className="announcement-date">January 14, 2025</p>
              </div>
              <div className="announcement-content">
                <p>New lecture slides for Chemistry 201 are available in the Resources section.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
