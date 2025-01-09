import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";
import DefaultProfileImage from "./assets/profile.png";

function App() {
  const [profileImage, setProfileImage] = useState(DefaultProfileImage);

  useEffect(() => {
    // Reset to default on refresh
    localStorage.removeItem("resumeData");
    localStorage.removeItem("profileImage");
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePDF = () => {
    const resumeElement = document.querySelector(".resume");

    html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const scale = pdfWidth / imgWidth;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight * scale);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      {/* Save Button */}
      <div className="action-container">
        <button className="save-btn" onClick={handleSavePDF}>
          Save Resume as PDF
        </button>
      </div>

      {/* Resume Content */}
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
              of diverse companies.
            </p>
          </div>
          <div className="header-right">
            <div className="image-container">
              <img
                src={profileImage}
                alt="Profile"
                className="profile-img"
                onClick={() => document.getElementById("image-upload").click()}
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
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="section">
          <h3>Work Experience</h3>
          <div className="job editable" contentEditable="true">
            <h4>HR Generalist</h4>
            <p>The Good Hire Solutions | 06/2017 - Present</p>
            <ul>
              <li>Administer onboarding and manage employee relations.</li>
              <li>Coach associates at all organizational levels.</li>
              <li>Execute strategic HR initiatives.</li>
            </ul>
          </div>
          <div className="job editable" contentEditable="true">
            <h4>HR Coordinator</h4>
            <p>Better People Management Corp. | 04/2013 - 05/2017</p>
            <ul>
              <li>Orchestrated recruitment and onboarding efforts.</li>
              <li>Increased employee engagement through wellness programs.</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="section">
          <h3>Skills</h3>
          <div className="skills editable" contentEditable="true">
            <span>HRIS</span> <span>Recruiting</span> <span>Onboarding</span>
            <span>Conflict Resolution</span> <span>SAP</span>
            <span>Zoho Recruit</span> <span>Compliance</span>
          </div>
        </div>

        {/* Conferences */}
        <div className="section">
          <h3>Conferences</h3>
          <ul className="editable" contentEditable="true">
            <li>Data Handling Training - KeenAlignment</li>
            <li>Safety & Health Training - OSHA</li>
          </ul>
        </div>

        {/* Education */}
        <div className="section">
          <h3>Education</h3>
          <p className="editable" contentEditable="true">
            MBA in Human Resources | University of Indianapolis
          </p>
          <p className="editable" contentEditable="true">
            BA in Applied Psychology | Purdue University
          </p>
        </div>

        {/* Languages */}
        <div className="section">
          <h3>Languages</h3>
          <ul className="editable" contentEditable="true">
            <li>English - Native Proficiency</li>
            <li>Spanish - Bilingual Proficiency</li>
            <li>Italian - Professional Proficiency</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
