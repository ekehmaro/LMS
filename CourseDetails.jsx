import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fontStyle, setFontStyle] = useState("Arial");
  const [sections, setSections] = useState([
    "Week 1 - Beginner - Introduction to Calculus",
    "Week 2 - Intermediate - Derivatives",
    "Week 3 - Advanced - Integrals",
    "Week 4 - Mastery - Applications"
  ]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const addNewSection = () => setSections([...sections, `Week ${sections.length + 1} - New Section`]);

  return (
    <div className="coursedetails-container">
      <div className="sidebar-unique">
        <h1 className="app-title-unique">Medee App</h1>
        <div className="profile-section-unique">
          <img src="default-profile.png" alt="Profile" className="profile-picture-unique" />
          <div className="profile-info-unique">
            <p className="user-name-unique">John Doe</p>
            <p className="user-role-unique">Teacher</p>
          </div>
        </div>
        <hr className="separator-unique" />
        <nav className="nav-links-unique">
          <Link to="/ldashboard"><i className="fa fa-home"></i> Dashboard</Link>
          <div className="dropdown-unique">
            <div className="dropdown-header-unique" onClick={toggleDropdown}>
              <Link to="/lcourse" className="course-link-unique"><i className="fa fa-book"></i> Courses</Link>
              {dropdownOpen ? <i className="fas fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu-unique">
                <Link to="#">Course Details</Link>
                <Link to="#">Assignments</Link>
                <Link to="#">Resources</Link>
                <Link to="#">Grades</Link>
              </div>
            )}
          </div>
          <Link to="#"><i className="fa fa-calendar"></i> Time Table</Link>
          <Link to="#"><i className="fa fa-building"></i> Department</Link>
          <Link to="#"><i className="fa fa-newspaper"></i> News</Link>
          <Link to="#"><i className="fa fa-graduation-cap"></i> Grades</Link>
          <Link to="#"><i className="fa fa-folder"></i> Resources</Link>
          <Link to="#"><i className="fa fa-bell"></i> Notification</Link>
          <Link to="#"><i className="fa fa-question-circle"></i> Help/FAQ</Link>
        </nav>
      </div>
      <div className="coursedetails-main">
        <div className="coursedetails-header">
          <h2>Course Details</h2>
          <div className="coursedetails-icons">
            <i className="fa fa-cog"></i> <i className="fa fa-sun"></i> <i className="fa fa-sign-out-alt"></i>
          </div>
        </div>
        <div className="coursedetails-content">
          <div className="coursedetails-overview">
            <h3>Course Overview</h3>
            <div className="coursedetails-buttons">
              <button>Cancel</button>
              <button>Publish</button>
            </div>
          </div>
          <div className="coursedetails-basicinfo">
            <h4>Basic Info</h4>
            <div className="coursedetails-fields">
              <div>
                <label>Course Title</label>
                <input type="text" />
              </div>
              <div>
                <label>Semester</label>
                <input type="text" />
              </div>
            </div>
            <div className="coursedetails-fields">
              <div>
                <label>Course Code</label>
                <input type="text" />
              </div>
              <div>
                <label>Level</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="coursedetailss">
          <div className="coursedetails-description">
            <h4>Description</h4>
            <hr />
            <div className="coursedetails-toolbar">
              <select onChange={(e) => setFontStyle(e.target.value)}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
              </select>
              <button>B</button>
              <button>I</button>
              <button>•</button>
            </div>
            <textarea style={{ fontFamily: fontStyle }}></textarea>

           </div>
           <div className="coursedetails-date">
            <label>Date</label>
            <input type="text" placeholder="DD/MM/YY" />
          </div>
               </div>
            
          
          <div className="coursedetails-content-section">
            <h4>Content <i className="fas fa-plus" onClick={addNewSection}></i> Add new section</h4>
            {sections.map((section, index) => (
              <div key={index} className="coursedetails-section">
                <i className="fa fa-chevron-up"></i> {section} <i className="fa fa-edit"></i>
              </div>
            ))}
          </div>

          <div className="coursedetails-upload">
            <h4>Upload Resources</h4>
            <button><i className="fa fa-upload"></i> Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
