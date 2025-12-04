"use client";
import React, { useEffect, useRef } from "react";
import Heading from "./common/Heading";

function Hero() {
  const scrollRef = useRef(null);

  const content = [
    {
      title: "INTRODUCTION",
      subtitle:
        "I’m Madhur Mehare, a passionate and results-driven Full Stack Developer skilled in building end-to-end web applications using the MERN stack (MongoDB, Express, React, Node.js). I have hands-on experience with AI-powered systems, real-time dashboards, and RESTful API development.",
      image: "/madhur.png",
    },
    {
      title: "PROJECTS",
      subtitle:
        "Key projects include a Signature Verification System (TensorFlow/Keras + Flask), an AI-based EV Routing Platform (ChargeSmart), and a Mock Interview App using LangChain and Node.js.",
      image: "/project.png",
    },
    {
      title: "GOALS",
      subtitle:
        "My goal is to build scalable, intelligent, and user-friendly apps that solve real-world problems using AI and modern web technologies.",
    //   image: "/goal.png",
    },
  ];

  // Auto scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll when reaching end
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    }, 20); // adjust speed (smaller = faster)

    return () => clearInterval(scrollInterval);
  }, []);

  return (
<>
    <Heading
    title= "PORTFOLLIO "
    />
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "",
        backgroundColor: "#f9fafb",
        padding: "60px 20px",
        overflow: "hidden",
      }}
    >
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "40px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          width: "90%",
        }}
      >
        {/* Hide scrollbar */}
        <style>{`
          div::-webkit-scrollbar { display: none; }
        `}</style>

        {content.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              padding: "30px",
              width: "400px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
            />
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#1e3a8a",
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                lineHeight: "1.7",
                textAlign: "justify",
              }}
            >
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Hero;
