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
    <div className="course-dashboard-wrapper">
      {/* Sidebar */}
      <div className="course-sidebar">
        <h1 className="course-app-title">Medee App</h1>
        <div className="course-profile-section">
          <img
            src={profilePic || "default-profile.png"}
            alt="Profile"
            className="course-profile-picture"
          />
          <div className="course-profile-info">
            <p className="course-user-name">{userName}</p>
            <p className="course-user-role">Student</p>
          </div>
        </div>
        <hr className="course-separator" />
        <nav className="course-nav-links">
          <Link to="/dashboard">
            <span className="course-icon"><i className="fa fa-home"></i></span> Dashboard
          </Link>
          <div className="course-dropdown">
            <Link to="/course" className="course-dropdown-toggle" onClick={toggleDropdown}>
              <span className="course-icon"><i className="fa fa-book"></i></span> Courses
              <i className={`fa ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"} course-toggle-arrow`}></i>
            </Link>
            {dropdownOpen && (
              <div className="course-dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="/assignment">Assignments</Link>
                <Link to="/announcement">Announcements</Link>
                <Link to="#">Grades</Link>
              </div>
            )}
          </div>
          <Link to="#">
            <span className="course-icon"><i className="fa fa-calendar"></i></span> Time Table
          </Link>
          <Link to="#">
            <span className="course-icon"><i className="fa fa-building"></i></span> Department
          </Link>
          <Link to="#">
            <span className="course-icon"><i className="fa fa-newspaper-o"></i></span> News
          </Link>
          <Link to="#">
            <span className="course-icon"><i className="fa fa-bell"></i></span> Notification
          </Link>
          <div className="course-footer-links">
            <Link to="#">
              <span className="course-icon"><i className="fa fa-question-circle"></i></span> Help
            </Link>
            <Link to="#">
              <span className="course-icon"><i className="fa fa-info-circle"></i></span> FAQ
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="course-main-content">
        {/* Top Header Section */}
        <div className="course-header-section">
          <h2 className="course-dashboard-title">Courses</h2>
          <div className="course-header-icons">
            <input
              type="text"
              placeholder="Search..."
              className="course-search-bar"
            />
            <button className="course-icon-button"><i className="fa fa-cogs"></i></button>
            <button className="course-icon-button"><i className="fa fa-sun-o"></i></button>
            <button className="course-icon-button"><i className="fa fa-sign-out"></i></button>
          </div>
        </div>

        {/* First Section - Live Class */}
        <div className="course-live-class">
          <div className="course-live-class-info">
            <span className="course-video-icon"><i className="fa fa-video-camera"></i></span>
            <p className="course-title">Math 101</p>
            <p className="course-teacher">Miss Preye</p>
            <button className="course-join-button">Join the Lesson</button>
          </div>
        </div>

       
      {/* Second Section - Registered Courses and Calendar */}
<div className="course-info-section">
  <div className="course-info">
    <h3 className="course-info-title">Registered Courses</h3>
    <div className="course-info-header">
      <span className="course-header-item">Course Title</span>
      <span className="course-header-item">Course Code</span>
      <span className="course-header-item">Semester</span>
      <span className="course-header-item">Lecturer</span>
      <span className="course-header-item">Lecturer Email</span>
    </div>
    <hr className="course-separator" />
    <div className="course-info-list">
      <div className="course-item">
        <span className="course-item-title">Introduction to Psychology</span>
        <span className="course-item-code">PSY 101</span>
        <span className="course-item-semester">First Semester</span>
        <span className="course-item-lecturer">Dr. Sarah</span>
        <span className="course-item-email">sarah@gmail.com</span>
      </div>
      
     
    
      
     
      <hr className="course-separator" />
      <div className="course-item">
        <span className="course-item-title">Biology 102</span>
        <span className="course-item-code">BIO 102</span>
        <span className="course-item-semester">First Semester</span>
        <span className="course-item-lecturer">Ms. Laura</span>
        <span className="course-item-email">laura@gmail.com</span>
      </div>
      <hr className="course-separator" />
      <div className="course-item">
        <span className="course-item-title">Computer Science 101</span>
        <span className="course-item-code">CS 101</span>
        <span className="course-item-semester">Second Semester</span>
        <span className="course-item-lecturer">Prof. Alan</span>
        <span className="course-item-email">alan@gmail.com</span>
      </div>
      <hr className="course-separator" />
      <div className="course-item">
        <span className="course-item-title">Physics 101</span>
        <span className="course-item-code">PHY 101</span>
        <span className="course-item-semester">First Semester</span>
        <span className="course-item-lecturer">Dr. Evans</span>
        <span className="course-item-email">evans@gmail.com</span>
      </div>
    </div>
  </div>

  <div className="course-calendar">
    <p className="course-calendar-title">Calendar</p>
    {/* Calendar functionality here */}
  </div>
</div>


        {/* PDF Download Button */}
        <div className="course-timetable-download">
          <button className="course-download-btn">Download Timetable (PDF)</button>
        </div>

        {/* Scheduled Videos Section */}
        <div className="course-scheduled-videos">
          <h3 className="course-scheduled-videos-title">Scheduled Video Classes</h3>
          <div className="course-scheduled-video">
            <span className="course-video-icon"><i className="fa fa-video-camera"></i></span>
            <p className="course-title">Science 101</p>
            <p className="course-teacher">Mr. Jack</p>
            <button className="course-notify-button">Notify Me</button>
          </div>
          <div className="course-scheduled-video">
            <span className="course-video-icon"><i className="fa fa-video-camera"></i></span>
            <p className="course-title">History 102</p>
            <p className="course-teacher">Mrs. Linda</p>
            <button className="course-notify-button">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
