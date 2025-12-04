"use client";
import React from "react";

function Card({ title, subtitle, image, children, style = {} }) {
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
    transition: "all 0.4s ease",
    padding: "0",
    cursor: "pointer",
    ...style,
  };

  const imageContainer = {
    flex: "1",
    height: "100%",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    maxHeight: "260px",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  const contentStyle = {
    flex: "1",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "6px",
  };

  const subtitleStyle = {
    color: "#6b7280",
    fontSize: "15px",
    marginBottom: "12px",
  };

  const cardHoverEffect = (e) => {
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.05)";
  };

  const cardLeaveEffect = (e) => {
    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1)";
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={cardHoverEffect}
      onMouseLeave={cardLeaveEffect}
    >
      {image && (
        <div style={imageContainer}>
          <img src={image} alt={title} style={imageStyle} />
        </div>
      )}

      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Card;
