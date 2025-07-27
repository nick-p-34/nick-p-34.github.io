import React, { useState, useRef, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { FaPaperPlane } from "react-icons/fa";
import "../style.css";

const subjects = [
  { value: "", label: "Subject (Please Select)", disabled: true },
  { value: "Business", label: "Business" },
  { value: "Personal", label: "Personal" },
  { value: "Other (Please Specify)", label: "Other (Please Specify)" },
];

export default function Contact() {
  const [subjectObj, setSubjectObj] = useState(subjects[0]);
  const [otherSubject, setOtherSubject] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    otherSubject: false,
    message: false,
  });

  const listboxWrapperRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        listboxWrapperRef.current &&
        !listboxWrapperRef.current.contains(e.target)
      ) {
        buttonRef.current?.blur();
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleSubjectChange = (obj) => {
    setSubjectObj(obj);
    if (obj.value !== "Other (Please Specify)") {
      setOtherSubject("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOtherSubjectChange = (e) => {
    setOtherSubject(e.target.value);
  };

  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      subject: !subjectObj.value,
      otherSubject:
        subjectObj.value === "Other (Please Specify)" &&
        !otherSubject.trim(),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    const finalSubject =
      subjectObj.value === "Other (Please Specify)"
        ? otherSubject
        : subjectObj.value;

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

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`form-input card ${errors.name ? "error-border" : ""}`}
            value={formData.name}
            onChange={handleChange}
            onFocus={() => clearError("name")}
          />
          <p className="error-text">
            {errors.name ? "Please enter your name." : "\u00A0"}
          </p>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={`form-input card ${
              errors.email ? "error-border" : ""
            }`}
            value={formData.email}
            onChange={handleChange}
            onFocus={() => clearError("email")}
          />
          <p className="error-text">
            {errors.email ? "Please enter your email address." : "\u00A0"}
          </p>
        </div>

        <div className="dropdown" ref={listboxWrapperRef}>
          <Listbox value={subjectObj} onChange={handleSubjectChange}>
            <Listbox.Button
              ref={buttonRef}
              className={`form-select card dropdown-label ${
                errors.subject ? "error-border" : ""
              }`}
              style={{
                color:
                  subjectObj.value === ""
                    ? "var(--secondary-text)"
                    : "var(--text-color)",
              }}
              onFocus={() => clearError("subject")}
            >
              {subjectObj.label}
            </Listbox.Button>
            <Listbox.Options as="ul" className="dropdown-menu" tabIndex={-1}>
              {subjects.map((s) => (
                <Listbox.Option
                  key={s.value || "placeholder"}
                  value={s}
                  disabled={s.disabled}
                  as="li"
                >
                  {({ active, selected, disabled }) => (
                    <span
                      className={`
                        block px-4 py-2
                        ${active ? "bg-secondary-bg" : ""}
                        ${selected ? "font-bold" : ""}
                        ${disabled ? "text-secondary-text cursor-default" : ""}
                      `}
                    >
                      {s.label}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          <p className="error-text">
            {errors.subject ? "Please select a subject." : "\u00A0"}
          </p>
        </div>

        {subjectObj.value === "Other (Please Specify)" && (
          <div>
            <input
              type="text"
              name="otherSubject"
              placeholder="Subject"
              className={`form-input card ${
                errors.otherSubject ? "error-border" : ""
              }`}
              value={otherSubject}
              onChange={handleOtherSubjectChange}
              onFocus={() => clearError("otherSubject")}
            />
            <p className="error-text">
              {errors.otherSubject
                ? "Please specify your subject."
                : "\u00A0"}
            </p>
          </div>
        )}

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className={`form-textarea card ${
              errors.message ? "error-border" : ""
            }`}
            rows="10"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => clearError("message")}
          ></textarea>
          <p className="error-text">
            {errors.message ? "Please enter your message." : "\u00A0"}
          </p>
        </div>

        <button type="submit" className="social-button">
          <FaPaperPlane className="social-icon" size={32} />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
}