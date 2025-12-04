import Navbar from "./components/common/navbar"
import Footer from "./components/common/footer"
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
