import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'; 
import "./Resource.css";

const Resource = ({ userName = "John Doe", profilePic }) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation when toggling dropdown
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="re-dashboard-wrapper">
      {/* Sidebar */}
      <div className="re-sidebar">
        <h1 className="re-app-title">Medee App</h1>
        <div className="re-profile-section">
          <img
            src={profilePic || "default-profile.png"}
            alt="Profile"
            className="re-profile-picture"
          />
          <div className="re-profile-info">
            <p className="re-user-name">{userName}</p>
            <p className="re-user-role">Student</p>
          </div>
        </div>
        <hr className="re-separator" />
        <nav className="re-nav-links">
          <Link to="/dashboard">
            <span className="re-icon"><i className="fa fa-home"></i></span> Dashboard
          </Link>
          <div className="re-dropdown">
            {/* Courses Link */}
            <div className="re-dropdown-header">
              <Link to="/course" className="re-dropdown-toggle">
                <span className="re-icon"><i className="fa fa-book"></i></span> Courses
              </Link>
              <i
                className={`fa ${dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'} re-toggle-arrow`}
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={toggleDropdown}
              ></i>
            </div>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="re-dropdown-menu">
                <Link to="/resource">Resources</Link>
                <Link to="/assignment">Assignments</Link>
                <Link to="#">Grades</Link>
                <Link to="/announcement">Announcements</Link>
              </div>
            )}
          </div>
          <Link to="#">
            <span className="re-icon"><i className="fa fa-calendar"></i></span> Time Table
          </Link>
          <Link to="#">
            <span className="re-icon"><i className="fa fa-building"></i></span> Department
          </Link>
          <Link to="#">
            <span className="re-icon"><i className="fa fa-newspaper-o"></i></span> News
          </Link>
          <Link to="#">
            <span className="re-icon"><i className="fa fa-bell"></i></span> Notification
          </Link>
          
          <div className="re-footer-links">
          <Link to="/help">
            <span className="re-icon"><i className="fa fa-question-circle"></i></span> Help
          </Link>
          <Link to="/faq">
            <span className="re-icon"><i className="fa fa-info-circle"></i></span> Faq
          </Link>
        </div>

        </nav>

        
      </div>

      {/* Main Content */}
      <div className="re-main-content">
        <header className="re-main-header">
          <h2 className="re-dashboard-title">Resources</h2>
          <div className="re-header-icons">
            <input
              type="text"
              placeholder="Search..."
              className="re-search-bar"
            />
            <button className="re-icon-button"><i className="fa fa-cogs"></i></button>
            <button className="re-icon-button"><i className="fa fa-sun-o"></i></button>
            <button className="re-icon-button"><i className="fa fa-sign-out"></i></button>
          </div>
        </header>

        {/* Resource Sections */}
        <div className="re-resource-section">
          <div className="re-resource-item">
            <h3>Math Resources</h3>
            <hr />
            <div className="re-resource-links">
              <div className="re-resource-card re-white-container">
                <span>Maths</span>
                <Link to="#pdf1" className="re-resource-link">
                  <i className="fa fa-download"></i> Download
                </Link>
                <Link to="#pdf1" className="re-resource-link">
                  <i className="fa fa-file-pdf-o"></i> PDF
                </Link>
              </div>
              <div className="re-resource-card re-white-container">
                <span>Maths</span>
                <Link to="#pdf2" className="re-resource-link">
                  <i className="fa fa-download"></i> Download
                </Link>
                <Link to="#pdf2" className="re-resource-link">
                  <i className="fa fa-file-pdf-o"></i> PDF
                </Link>
              </div>
            </div>
          </div>

          <div className="re-resource-item">
            <h3>Psychology Resources</h3>
            <hr />
            <div className="re-resource-links">
              <div className="re-resource-card re-white-container">
                <span>Psychology</span>
                <Link to="#pdf3" className="re-resource-link">
                  <i className="fa fa-download"></i> Download
                </Link>
                <Link to="#pdf3" className="re-resource-link">
                  <i className="fa fa-file-pdf-o"></i> PDF
                </Link>
              </div>
              <div className="re-resource-card re-white-container">
                <span>Psychology</span>
                <Link to="#pdf4" className="re-resource-link">
                  <i className="fa fa-download"></i> Download
                </Link>
                <Link to="#pdf4" className="re-resource-link">
                  <i className="fa fa-file-pdf-o"></i> PDF
                </Link>
              </div>
            </div>
          </div>

          <div className="re-resource-item">
            <h3>Computer Resources</h3>
            <hr />
            <div className="re-resource-links">
              <div className="re-resource-card re-white-container">
                <span>Computer Science</span>
                <Link to="#pdf5" className="re-resource-link">
                  <i className="fa fa-download"></i> Download
                </Link>
                <Link to="#pdf5" className="re-resource-link">
                  <i className="fa fa-file-pdf-o"></i> PDF
                </Link>
              </div>
              <div className="re-resource-card re-white-container">
                <span>Computer Science</span>
                <Link to="#pdf6" className="re-resource-link">
                  <i className="fa fa-download"></i> Download
                </Link>
                <Link to="#pdf6" className="re-resource-link">
                  <i className="fa fa-file-pdf-o"></i> PDF
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
