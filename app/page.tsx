import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Leadership } from "@/components/Leadership";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <Header />
        <Welcome />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Credentials />
        <Leadership />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
