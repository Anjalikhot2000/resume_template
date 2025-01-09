import React, { useEffect, useState } from "react";
import "./App.css";
import DefaultProfileImage from "./assets/profile.png";

function App() {
  const [profileImage, setProfileImage] = useState(DefaultProfileImage);

  useEffect(() => {
    // Load saved data and image on page load
    const savedData = JSON.parse(localStorage.getItem("resumeData"));
    const savedImage = localStorage.getItem("profileImage");

    if (savedData) {
      const editableElements = document.querySelectorAll(".editable");
      editableElements.forEach((element, index) => {
        if (savedData[`content-${index}`]) {
          element.innerHTML = savedData[`content-${index}`];
        }
      });
    }

    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Update the profile image
        localStorage.setItem("profileImage", reader.result); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const editableElements = document.querySelectorAll(".editable");
    const savedData = {};

    editableElements.forEach((element, index) => {
      savedData[`content-${index}`] = element.innerHTML;
    });

    localStorage.setItem("resumeData", JSON.stringify(savedData));
    alert("Resume saved successfully!");
  };

  return (
    <div className="resume">
      <div className="header">
        <div className="header-left">
          <h1 className="editable" contentEditable="true">Rachel Johnson</h1>
          <p className="title editable" contentEditable="true">HR Professional</p>
          <p className="editable" contentEditable="true">
            Astute and exceptionally dedicated professional with 6+ years of
            experience in human resources management operations. Equipped with
            a solid commitment to providing high-quality support to the
            management for consistent growth and development of human resources
            of diverse companies. Demonstrated success in developing and
            executing training programs to optimize employee capabilities.
          </p>
        </div>
        <div className="header-right">
          <div className="image-container">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-img"
              onClick={() => document.getElementById("image-upload").click()} // Trigger file input click
            />
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div className="contact-info editable" contentEditable="true">
            <p>rachel@novoresume.com</p>
            <p>123 444 555</p>
            <p>Bloomington, IN</p>
            <p>linkedin.com/in/rachelJohnson</p>
            <p>@rachelJohnson</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Work Experience</h3>
        <div className="job editable" contentEditable="true">
          <h4>HR Generalist</h4>
          <p className="sub-details">The Good Hire Solutions | 06/2017 - Present</p>
          <ul>
            <li>
              Administer the onboarding process of newly hired employees by
              initiating pre-employment checks, drug screening, and first-day
              orientations.
            </li>
            <li>
              Perform effective formal/informal coaching and mentorship to
              associates at all organizational levels.
            </li>
            <li>
              Serve as a Business Partner executing strategic HR initiatives.
            </li>
          </ul>
        </div>
        <div className="job editable" contentEditable="true">
          <h4>HR Coordinator</h4>
          <p className="sub-details">
            Better People Management Corp. | 04/2013 - 05/2017
          </p>
          <ul>
            <li>
              Orchestrated end-to-end recruiting, hiring, and onboarding,
              reducing onboarding time by 20%.
            </li>
            <li>
              Innovated health and wellness initiatives, increasing employee
              engagement by 30%.
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3>Skills & Competencies</h3>
        <div className="skills editable" contentEditable="true">
          <span>HRIS</span>
          <span>Data Analysis</span>
          <span>Onboarding</span>
          <span>Recruiting</span>
          <span>Employee Relations</span>
          <span>Conflict Resolution</span>
          <span>SAP</span>
          <span>Zoho Recruit</span>
          <span>Labor Laws & Regulatory Compliance</span>
          <span>Training & Performance Management</span>
        </div>
      </div>

      <div className="section">
        <h3>Conferences & Courses</h3>
        <ul className="editable" contentEditable="true">
          <li>
            <strong>Data Handling Training (02/2013)</strong> - KeenAlignment
          </li>
          <li>
            <strong>General Industry Safety & Health Training (10/2012)</strong> - Occupational Safety and Health Center
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Certificates</h3>
        <ul className="editable" contentEditable="true">
          <li>
            <strong>Certified Professional Human Resources (2014)</strong> - HR Certification Institute
          </li>
          <li>
            <strong>Behavioral Interviewing Certification (03/2013)</strong> - KeenAlignment
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Education</h3>
        <p className="editable" contentEditable="true">
          <strong>MBA in Human Resources Management</strong>
          <br />
          University of Indianapolis | 2011 - 2013
        </p>
        <p className="editable" contentEditable="true">
          <strong>Bachelor of Arts in Applied Psychology</strong>
          <br />
          Purdue University Indianapolis | 2008 - 2011
        </p>
      </div>

      <div className="section">
        <h3>Languages</h3>
        <ul className="editable" contentEditable="true">
          <li>
            <strong>English</strong> - Native or Bilingual Proficiency
          </li>
          <li>
            <strong>Spanish</strong> - Native or Bilingual Proficiency
          </li>
          <li>
            <strong>Italian</strong> - Full Professional Proficiency
          </li>
          <li>
            <strong>German</strong> - Limited Working Proficiency
          </li>
        </ul>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Resume
      </button>
    </div>
  );
}

export default App;
