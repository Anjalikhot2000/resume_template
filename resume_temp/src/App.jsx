import React, { useState } from "react";
import "./App.css";
import DefaultProfileImage from "./assets/profile.png";

function App() {
  const [profileImage, setProfileImage] = useState(DefaultProfileImage);
  const [resumeData, setResumeData] = useState({
    titles: {
      contact: "Contact Me",
      references: "Extra Curricular",
      education: "Education",
      about: "About Me",
      jobExperience: "Job Experience",
      skills: "Skills",
    },
    contact: {
      phone: "📞+9999999999",
      email: "📩 yourname@email.com",
      address: "🏠 Ayush park, Talegaon, Pune -123456",
    },
    references: [
      {
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        text: "Another example of a reference text with editable content.",
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "Master of Science",
        years: "2005 - 2007",
      },
      {
        institution: "University of Chicago",
        degree: "Bachelor of Computer Graphics",
        years: "2002 - 2005",
      },
    ],
    about: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry.  Lorem ipsum is simply dummy text of the printing and typesetting industry.  Lorem ipsum is simply dummy text of the printing and typesetting industry.  Lorem ipsum is simply dummy text of the printing and typesetting industry.  Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    jobExperience: [
      {
        title: "Senior Web Designer",
        company: "Creative Agency / Chicago",
        years: "2020 - Present",
        work: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Graphic Designer",
        company: "Creative Studios / Chicago",
        years: "2015 - 2020",
        work: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Marketing Manager",
        company: "AdTech Agency / Chicago",
        years: "2012 - 2015",
        work: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
    skills: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Sketch",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (key, value) => {
    setResumeData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="resume-container">
      {/* Left Column */}
      <div className="left-column">
        <div className="profile-section">
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

        <div className="section">
          <h3
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) =>
              handleContentChange("titles", {
                ...resumeData.titles,
                contact: e.target.textContent,
              })
            }
          >
            {resumeData.titles.contact}
          </h3>
          <ul>
            <li
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) =>
                handleContentChange("contact", {
                  ...resumeData.contact,
                  phone: e.target.textContent,
                })
              }
            >
              {resumeData.contact.phone}
            </li>
            <li
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) =>
                handleContentChange("contact", {
                  ...resumeData.contact,
                  email: e.target.textContent,
                })
              }
            >
              {resumeData.contact.email}
            </li>
            <li
              contentEditable="true"
              suppressContentEditableWarning
              onBlur={(e) =>
                handleContentChange("contact", {
                  ...resumeData.contact,
                  address: e.target.textContent,
                })
              }
            >
              {resumeData.contact.address}
            </li>
          </ul>
        </div>

        <div className="section">
          <h3
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) =>
              handleContentChange("titles", {
                ...resumeData.titles,
                references: e.target.textContent,
              })
            }
          >
            {resumeData.titles.references}
          </h3>
          <ul>
            {resumeData.references.map((reference, index) => (
              <li key={index}>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("references", [
                      ...resumeData.references.slice(0, index),
                      { ...reference, text: e.target.textContent },
                      ...resumeData.references.slice(index + 1),
                    ])
                  }
                >
                  {reference.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) =>
              handleContentChange("titles", {
                ...resumeData.titles,
                education: e.target.textContent,
              })
            }
          >
            {resumeData.titles.education}
          </h3>
          <ul>
            {resumeData.education.map((edu, index) => (
              <li key={index}>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("education", [
                      ...resumeData.education.slice(0, index),
                      { ...edu, institution: e.target.textContent },
                      ...resumeData.education.slice(index + 1),
                    ])
                  }
                >
                  {edu.institution}
                </p>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("education", [
                      ...resumeData.education.slice(0, index),
                      { ...edu, degree: e.target.textContent },
                      ...resumeData.education.slice(index + 1),
                    ])
                  }
                >
                  {edu.degree}
                </p>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("education", [
                      ...resumeData.education.slice(0, index),
                      { ...edu, years: e.target.textContent },
                      ...resumeData.education.slice(index + 1),
                    ])
                  }
                >
                  {edu.years}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <div className="name-section">
          <h1 contentEditable="true" suppressContentEditableWarning>
            Anjali <span>Khot</span>
          </h1>
          <p id="status" contentEditable="true" suppressContentEditableWarning>
            <b>Python Developer</b>
          </p>
        </div>

        <div className="section">
          <h3
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) =>
              handleContentChange("titles", {
                ...resumeData.titles,
                about: e.target.textContent,
              })
            }
          >
            {resumeData.titles.about}
          </h3>
          <p
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) => handleContentChange("about", e.target.textContent)}
          >
            {resumeData.about}
          </p>
        </div>

        <div className="section">
          <h3
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) =>
              handleContentChange("titles", {
                ...resumeData.titles,
                jobExperience: e.target.textContent,
              })
            }
          >
            {resumeData.titles.jobExperience}
          </h3>
          <ul>
            {resumeData.jobExperience.map((job, index) => (
              <li key={index}>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("jobExperience", [
                      ...resumeData.jobExperience.slice(0, index),
                      { ...job, title: e.target.textContent },
                      ...resumeData.jobExperience.slice(index + 1),
                    ])
                  }
                >
                  <strong>{job.title}</strong>
                </p>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("jobExperience", [
                      ...resumeData.jobExperience.slice(0, index),
                      { ...job, company: e.target.textContent },
                      ...resumeData.jobExperience.slice(index + 1),
                    ])
                  }
                >
                  {job.company}
                </p>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("jobExperience", [
                      ...resumeData.jobExperience.slice(0, index),
                      { ...job, years: e.target.textContent },
                      ...resumeData.jobExperience.slice(index + 1),
                    ])
                  }
                >
                  {job.years}
                </p>
                <p
                  contentEditable="true"
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleContentChange("jobExperience", [
                      ...resumeData.jobExperience.slice(0, index),
                      { ...job, work: e.target.textContent },
                      ...resumeData.jobExperience.slice(index + 1),
                    ])
                  }
                >
                  {job.work}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3
            contentEditable="true"
            suppressContentEditableWarning
            onBlur={(e) =>
              handleContentChange("titles", {
                ...resumeData.titles,
                skills: e.target.textContent,
              })
            }
          >
            {resumeData.titles.skills}
          </h3>
          <ul className="skills">
            {resumeData.skills.map((skill, index) => (
              <li
                key={index}
                contentEditable="true"
                suppressContentEditableWarning
                onBlur={(e) =>
                  handleContentChange("skills", [
                    ...resumeData.skills.slice(0, index),
                    e.target.textContent,
                    ...resumeData.skills.slice(index + 1),
                  ])
                }
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
