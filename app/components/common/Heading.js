"use client";
import React from "react";

function Heading({
  title,
  subtitle,
  align = "center",
  color = "#1e3a8a",
  subtitleColor = "#374151",
  style = {},
}) {
  const containerStyle = {
    textAlign: align,
    marginBottom: "40px",
    ...style,
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "800",
    color,
    marginBottom: "10px",
    letterSpacing: "0.5px",
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: subtitleColor,
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: align === "center" ? "0 auto" : "0",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
}

export default Heading;
