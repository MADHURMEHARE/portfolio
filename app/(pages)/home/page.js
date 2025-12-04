// import React from "react";  // optional in React 17+
// export * from "./home"
import React from "react";
import Hero from "../../components/Hero" // ✅ correct path (adjust if Hero is in another folder)

function Homepage() {
  return (
    <>
      <Hero />  
      {/* <Hero />   */}
      {/* <Landing/> */}
     
    </>

  );
}

export default Homepage;
