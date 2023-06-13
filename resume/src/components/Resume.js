import React, { useState } from "react";

const Resume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState([
    { institute: "", year: "", degree: "" },
  ]);
  const [experience, setExperience] = useState([
    { company: "", year: "", designation: "" },
  ]);

  const handleEducationChange = (index, event) => {
    const values = [...education];
    values[index][event.target.name] = event.target.value;
    setEducation(values);
  };

  const handleExperienceChange = (index, event) => {
    const values = [...experience];
    values[index][event.target.name] = event.target.value;
    setExperience(values);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: "", year: "", degree: "" }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", year: "", designation: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform resume submission logic here
    console.log({
      name,
      email,
      address,
      phone,
      education,
      experience,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setEducation([{ institute: "", year: "", degree: "" }]);
    setExperience([{ company: "", year: "", designation: "" }]);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Resume Builder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <h4 className="mt-4">Education</h4>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="form-row">
              <div className="col">
                <label htmlFor={`institute-${index}`}>Institute</label>
                <input
                  type="text"
                  className="form-control"
                  id={`institute-${index}`}
                  name="institute"
                  value={edu.institute}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor={`year-${index}`}>Year</label>
                <input
                  type="text"
                  className="form-control"
                  id={`year-${index}`}
                  name="year"
                  value={edu.year}
                  onChange={(e) => handleEducationChange(index, e)}
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor={`degree-${index}`}>Degree</label>
              <input
                type="text"
                className="form-control"
                id={`degree-${index}`}
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary mb-4"
          onClick={handleAddEducation}
        >
          Add More Education
        </button>

        <h4 className="mt-4">Experience</h4>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="form-row">
              <div className="col">
                <label htmlFor={`company-${index}`}>Company</label>
                <input
                  type="text"
                  className="form-control"
                  id={`company-${index}`}
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor={`year-${index}`}>Year</label>
                <input
                  type="text"
                  className="form-control"
                  id={`year-${index}`}
                  name="year"
                  value={exp.year}
                  onChange={(e) => handleExperienceChange(index, e)}
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor={`designation-${index}`}>Designation</label>
              <input
                type="text"
                className="form-control"
                id={`designation-${index}`}
                name="designation"
                value={exp.designation}
                onChange={(e) => handleExperienceChange(index, e)}
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-secondary mb-4"
          onClick={handleAddExperience}
        >
          Add More Experience
        </button>
        <br/>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Resume;
