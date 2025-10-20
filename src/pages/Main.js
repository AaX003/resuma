
// COMPONENT IMPORTS
import Navbar from "./Nav";
import Home from "./Home";
import About from "./About";
import Subscriptions from "./Subscriptions";
import Reviews from "./Reviews";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";


function Main() {
  return (
    <div className="container__main">
      <main className="components">
        <Navbar />
        <Home />
        <About />
        <Subscriptions />
        <Reviews />
        <Contact />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default Main;
