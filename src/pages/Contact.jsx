import React, { useState } from "react";
import "../style.css";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [otherSubject, setOtherSubject] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "subject") {
      setSubject(value);

      if (value !== "Other (Please Specify)") {
        setOtherSubject("");
      }
    }

    else if (name === "otherSubject") {
      setOtherSubject(value);
    }

    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalSubject =
      subject === "Other (Please Specify)" ? otherSubject : subject;
    console.log("Submitting contact form:", {
      name: formData.name,
      email: formData.email,
      subject: finalSubject,
      message: formData.message,
    });
    alert("Form submitted (check console)");
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="subtitle">Non-Functional, placeholder only</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-input card"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="form-input card"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="subject"
          className="form-select card"
          value={subject}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Subject (Please Select)</option>
          <option value="Business">Business</option>
          <option value="Personal">Personal</option>
          <option value="Other (Please Specify)">Other (Please Specify)</option>
        </select>

        {subject === "Other (Please Specify)" && (
          <input
            type="text"
            name="otherSubject"
            placeholder="Subject"
            className="form-input card"
            value={otherSubject}
            onChange={handleChange}
            required
          />
        )}

        <textarea
          name="message"
          placeholder="Your Message"
          className="form-textarea card"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="social-button">
          Send Message
        </button>
      </form>
    </section>
  );
}