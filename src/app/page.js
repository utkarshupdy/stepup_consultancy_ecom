import Image from "next/image";
import Home from "@/components/s1";
import Edu from "@/components/s2";
import ScholarshipPage from "@/components/s3";
import EducationLanding from "@/components/s4";
import ContactPage from "@/components/s5";
import FooterComponent from "@/components/footer";
import Navbar from "@/components/main";
import Home3 from "@/components/s6";
import FAQ from "@/components/s7";

export default function Home2() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="education">
        <Edu />
      </div>
      <div id="scholarships">
        <ScholarshipPage />
      </div>
      <div id="programs">
        <EducationLanding />
      </div>
      <div id="home3">
        <Home3 />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FooterComponent />
    </>
  );
}