"use client";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827", // dark gray
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      {/* Logo / Brand */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#3b82f6",
          marginBottom: "16px",
        }}
      >
        MyApp
      </h2>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#d1d5db",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
        >
          Home
        </Link>

        <Link
          href="/about"
          style={{
            color: "#d1d5db",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
        >
          About
        </Link>

        <Link
          href="/services"
          style={{
            color: "#d1d5db",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
        >
          Services
        </Link>

        <Link
          href="/contact"
          style={{
            color: "#d1d5db",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}
        >
          Contact
        </Link>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
