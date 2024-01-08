import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SignUp } from "./components/Sign-up";
import { TeamSection } from "./components/Team-section";
import { Testimonials } from "./components/Testimonials";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <TeamSection />
      <Testimonials />
      <SignUp />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
