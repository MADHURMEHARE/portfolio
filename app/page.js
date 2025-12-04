"use client";
import Homepage from "./(pages)/home/page";
// import contact from "./(pages)/contact";


export default function Home() {
  return (
    <div
      style={{
        width: "100vw",  // ✅ full viewport width
        height: "100vh", // ✅ full viewport height
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9fafb", // optional: soft background
      }}
    >
      <Homepage />
      
    </div>
  );
}
