"use client";
import React, { useState } from "react";
import Heading from "@/app/components/common/Heading";

import Card from "@/app/components/common/Card"

function Contactpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#f9fafb",
        padding: "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 🔹 Section Heading */}
      <Heading
        title="Get in Touch"
        subtitle="Let’s connect! Whether you have a project idea, collaboration, or just want to say hi — drop a message below."
      />

      {/* 🔹 Contact Card Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "700px",
          marginTop: "40px",
        }}
      >
        <Card
          title="Contact Me"
          subtitle="Fill out the form and I’ll get back to you as soon as possible."
          style={{
            width: "100%",
            backgroundColor: "white",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            borderRadius: "20px",
            padding: "40px",
          }}
        >
          {/* ✅ Contact Form inside the Card */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#1e3a8a")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#1e3a8a")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
                outline: "none",
                resize: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#1e3a8a")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                backgroundColor: "#1e3a8a",
                color: "white",
                padding: "14px",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#334155")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#1e3a8a")
              }
            >
              Send Message
            </button>
          </form>
        </Card>
      </div>

      {/* 🔹 Contact Info */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#374151",
        }}
      >
        
        <p>
          📧 Email: <strong>madhurmehare27@gmail.com</strong>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/madhurmehare"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1e3a8a", textDecoration: "none" }}
          >
            linkedin.com/in/madhurmehare
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contactpage;
