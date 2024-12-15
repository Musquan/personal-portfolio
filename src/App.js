import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Social from "./components/Social"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import WorkExperience from "./components/WorkExperience"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WorkExperience />
      <Testimonials />
      <Portfolio />
      <Experience />
      <Footer />

      <Social />
    </div>
  );
}

export default App;