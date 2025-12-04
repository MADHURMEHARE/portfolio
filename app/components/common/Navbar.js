"use client";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderRadius: "20px", // ✅ rounded corners
        margin: "20px auto", // ✅ space from viewport edges
        width: "90%", // ✅ keeps it elegant
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)", // ✅ smooth deep shadow
        border: "2px solid rgba(255, 255, 255, 0.2)", // ✅ subtle glass border
        overflow: "hidden",
        transition:
          "transform 0.6s ease, box-shadow 0.6s ease, background-position 0.6s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.3)";
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "white",
            textDecoration: "none",
            letterSpacing: "1px",
            transition: "transform 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          portfolio website
        </Link>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "40px",
          }}
        >
          {["Home", "About", "Services", "contact"].map((text) => (
            <Link
              key={text}
              href={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "500",
                transition: "color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#93c5fd";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {text}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/login"
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "14px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "600",
            boxShadow: "0 4px 10px rgba(37, 99, 235, 0.4)",
            transition:
              "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1d4ed8";
            e.target.style.transform = "scale(1.08)";
            e.target.style.boxShadow = "0 8px 16px rgba(37,99,235,0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#2563eb";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(37,99,235,0.4)";
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
