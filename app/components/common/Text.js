"use client";
import React from "react";

function Text({ variant = "p", children, color = "#111827", style = {} }) {
  let textStyle = {
    margin: 0,
    color,
    ...style,
  };

  switch (variant) {
    case "title":
      textStyle = {
        ...textStyle,
        fontSize: "22px",
        fontWeight: "700",
        marginBottom: "6px",
      };
      break;

    case "subtitle":
      textStyle = {
        ...textStyle,
        fontSize: "15px",
        color: "#6b7280",
        marginBottom: "12px",
      };
      break;

    case "body":
    default:
      textStyle = {
        ...textStyle,
        fontSize: "14px",
        lineHeight: "1.6",
        color: "#374151",
      };
  }

  const Tag =
    variant === "title"
      ? "h2"
      : variant === "subtitle"
      ? "p"
      : "p";

  return <Tag style={textStyle}>{children}</Tag>;
}

export default Text;
