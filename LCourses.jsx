import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./LCourses.css";

const LCourses = ({ userName = "Miss Preye", profilePic }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="lcourses-wrapper">
      <div className="lcourses-sidebar">

        <h1 className="lcourses-app-title">Medee App</h1>
        
        <div className="lprofile">
    <img src={"default-profile.png"} />

    <div className="profile-info-unique">
            <p className="user-name-unique">{userName}</p>
            <p className="user-role-unique">Teacher</p>
          </div>
        </div>

        <hr className="separator-unique" />
        
        <nav className="lcourses-nav">
          <Link to="/ldashboard"><i className="fa fa-home"></i> Dashboard</Link>

          <div className="lcourses-dropdown">
            <div className="dropdown-header-unique">
              <Link to="/lcourse" className="course-link-unique">
                <i className="fa fa-book"></i> Courses
              </Link>
              <i className={`fa ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"} toggle-arrow-unique`} onClick={toggleDropdown}></i>
            </div>
            {dropdownOpen && (
              <div className="lcourses-dropdown-menu">
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

      
      <div className="lcourses-main-content">
        <header className="lcourses-main-header">
          <h2>My Courses</h2>
          <input type="text" placeholder="Search..." className="lcourses-search-bar" />
          <div className="lcourses-header-icons">
            <i className="fa fa-cogs"></i>
            <i className="fa fa-sun-o"></i>
            <i className="fa fa-sign-out"></i>
          </div>
        </header>
                   
        <div className="lcoursebig">


        <div className="lcourses-overview-container">
          <div className="lcourses-overview-card light-blue">
            <i className="fa fa-graduation-cap"></i>
            <p>MTH 101</p>
            <h3>300 Students</h3>
            <hr />
            <div className="lcourses-details">
              <span>Show Details</span>
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
          <div className="lcourses-overview-card orange">
            <i className="fa fa-graduation-cap"></i>
            <p>MTH 131</p>
            <h3>130 Students</h3>
            <hr />
            <div className="lcourses-details">
              <span>Show Details</span>
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
          <div className="lcourses-overview-card green">
            <i className="fa fa-graduation-cap"></i>
            <p>MTH 454</p>
            <h3>170 Students</h3>
            <hr />
            <div className="lcourses-details">
              <span>Show Details</span>
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>

        
        <div className="lcourses-course-overview">
          <h3>Course Overview</h3>
          <div className="lcourses-buttons">
            <button className="lcourses-create-btn">+ Create</button>
            <button className="lcourses-publish-btn">Publish</button>
          </div>
        </div>
        <hr />
        <div className="lcourses-files-uploaded">
          <h3>Files Uploaded</h3>
          <div className="lcourses-file-actions">
            <button className="lcourses-download-btn">Download All</button>
            <button className="lcourses-upload-btn">
              <i className="fa fa-upload"></i> Upload
            </button>
          </div>
          <div className="lcourses-file-list">
            <div className="lcourses-file-item ash">
              <input type="checkbox" />
              <span>Introduction to Calculus</span>
              <span>MTH 101</span>
              <span>FIRST SEMESTER</span>
              <span>13/3/1995</span>
              <span>100 Level</span>
              <span>jamesgmail.com</span>
            </div>
            <div className="lcourses-file-item white">
              <input type="checkbox" />
              <span>Introduction to Computer</span>
              <span>CS 101</span>
              <span>FIRST SEMESTER</span>
              <span>14/1/1998</span>
              <span>100 Level</span>
              <span>preciousgmail.com</span>
            </div>
            <div className="lcourses-file-item ash">
              <input type="checkbox" />
              <span>Physics Basics</span>
              <span>PHY 201</span>
              <span>SECOND SEMESTER</span>
              <span>15/6/2000</span>
              <span>200 Level</span>
              <span>michaelgmail.com</span>
            </div>
          </div>

           </div>

        </div>
     </div>
       </div>
  );
};

export default LCourses;
