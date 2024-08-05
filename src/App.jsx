import { SignUp } from "./components/Sign-Up";
import { TeamSection } from "./components/Team-Section";
import { Testimonials } from "./components/Testimonials";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/header";
import { Footer } from "/src/components/footer";

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
