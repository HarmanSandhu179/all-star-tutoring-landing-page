import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { SignUp } from "./components/sign-up";
import { TeamSection } from "./components/team-section";
import { Testimonials } from "./components/testimonials";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <TeamSection />
      <Testimonials />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
