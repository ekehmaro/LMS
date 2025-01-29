import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Course.css";

const Course = ({ userName = "John Doe", profilePic }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
            <Link to="/course" className="dropdown-toggle" onClick={toggleDropdown}>
              <span className="icon"><i className="fa fa-book"></i></span> Courses
              <i className={`fa ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"} toggle-arrow`}></i>
            </Link>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="/assignment">Assignments</Link>
                <Link to="/announcement">Announcements</Link>
                <Link to="/grades">Grades</Link>
              </div>
            )}
          </div>
          <Link to="/timetable">
            <span className="icon"><i className="fa fa-calendar"></i></span> Time Table
          </Link>
          <Link to="/department">
            <span className="icon"><i className="fa fa-building"></i></span> Department
          </Link>
          <Link to="/news">
            <span className="icon"><i className="fa fa-newspaper-o"></i></span> News
          </Link>
          <Link to="/notification">
            <span className="icon"><i className="fa fa-bell"></i></span> Notification
          </Link>
          <div className="footer-links">
            <Link to="/help">
              <span className="icon"><i className="fa fa-question-circle"></i></span> Help
            </Link>
            <Link to="/faq">
              <span className="icon"><i className="fa fa-info-circle"></i></span> FAQ
            </Link>
          </div>
        </nav>
      </div>

      
      <div className="main-content">
        <header className="main-header">
          <h2 className="dashboard-title">Courses</h2>
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

        {/* Live Classes Section */}
        <div className="live-classes">
          <div className="live-class">
            <p className="live-class-title">Math 101</p>
            <span className="video-icon"><i className="fa fa-video-camera"></i></span>
            <button className="join-button">Join the Lesson</button>
          </div>
        </div>

        {/* Course  Section */}
        <div className="course-details">
          <div className="course-info">
            <div className="course-info-header">
              <span>Course Title</span>
              <span>Course Code</span>
              <span>Semester</span>
              <span>Lecturer</span>
              <span>Lecturer Mail</span>
            </div>
            <hr />
            <div className="course-info-content">
              <span>Introduction to Psychology</span>
              <span>PSY 101</span>
              <span>First Semester</span>
              <span>Dr. John Smith</span>
              <span>jsmith@example.com</span>
            </div>
          </div>
          <div className="calendar">
            <p className="calendar-title">Calendar</p>
            {/*  calendar functionality here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
