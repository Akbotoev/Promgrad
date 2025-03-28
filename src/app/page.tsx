import AboutCompany from "@/components/AboutCompany/AboutCompany";
import { CallBack } from "@/components/CallBack";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/ui/Hero";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <AboutCompany />
      <Card />
      <CallBack />
      <Footer />
    </>
  );
}
