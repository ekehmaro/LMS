import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Announcement.css";

const Announcement = ({ userName = "John Doe", profilePic }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleCourseClick = () => {
    navigate("/course");
  };

  return (
    <div className="announce-dashboard-wrapper">
      {/* Sidebar */}
      <div className="announce-sidebar">
        <h1 className="announce-app-title">Medee App</h1>
        <div className="announce-profile-section">
          <img
            src={profilePic || "default-profile.png"}
            alt="Profile"
            className="announce-profile-picture"
          />
          <div className="announce-profile-info">
            <p className="announce-user-name">{userName}</p>
            <p className="announce-user-role">Student</p>
          </div>
        </div>
        <hr className="announce-separator" />
        <nav className="announce-nav-links">
          <Link to="/dashboard">
            <span className="announce-icon"><i className="fa fa-home"></i></span> Dashboard
          </Link>
          <div className="announce-dropdown">
            <div className="announce-dropdown-toggle" onClick={handleCourseClick}>
              <span className="announce-icon"><i className="fa fa-book"></i></span> Courses
              <span className={`announce-toggle-arrow ${dropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
                <i className="fa fa-caret-down"></i>
              </span>
            </div>
            {dropdownOpen && (
              <div className="announce-dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="#">Assignments</Link>
                <Link to="#">Grades</Link>
                <Link to="/announcement">Announcements</Link>
              </div>
            )}
          </div>
          <Link to="#timetable">
            <span className="announce-icon"><i className="fa fa-calendar"></i></span> Time Table
          </Link>
          <Link to="#department">
            <span className="announce-icon"><i className="fa fa-building"></i></span> Department
          </Link>
          <Link to="#news">
            <span className="announce-icon"><i className="fa fa-newspaper-o"></i></span> News
          </Link>
          <Link to="#notification">
            <span className="announce-icon"><i className="fa fa-bell"></i></span> Notification
          </Link>
          <Link to="#help">
            <i className="fa fa-question-circle"></i> Help/FAQ
          </Link>
        </nav>
       
      </div>

      {/* Main Content */}
      <div className="announce-main-content">
        <header className="announce-main-header">
          <h2 className="announce-dashboard-title">Courses</h2>
          <div className="announce-header-icons">
            <input type="text" placeholder="Search..." className="announce-search-bar" />
            <button className="announce-icon-button"><i className="fa fa-cogs"></i></button>
            <button className="announce-icon-button"><i className="fa fa-sun-o"></i></button>
            <button className="announce-icon-button"><i className="fa fa-sign-out"></i></button>
          </div>
        </header>

        {/* Announcement Section */}
        <div className="announce-announcement-container">
          <h2 className="announce-section-title">Announcements</h2>
          <hr className="announce-divider" />
          <div className="announce-announcement-wrapper">
            <div className="announce-announcement-box">
              <h3>Upcoming Exam Schedule</h3>
              <p className="announce-announcement-date">January 16, 2025</p>
              <p>The exam for Math 101 will be held on January 20, 2025, in Room 305.</p>
            </div>
            <div className="announce-announcement-box">
              <h3>New Course Material Available</h3>
              <p className="announce-announcement-date">January 14, 2025</p>
              <p>New lecture slides for Chemistry 201 are available in the Resources section.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
