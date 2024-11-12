import Gallery from "@/components/Gallery";
import Herosection from "@/components/Herosection";
import Introduction from "@/components/Introduction";
import OurPartners from "@/components/OurPartners";
import OurProgram from "@/components/OurProgram";
import Reports from "@/components/Reports";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-28">
    <Herosection/>
    <Introduction/>
    <OurProgram/>
    <Stats/>
    <Reports/>
    <OurPartners/>
    <Gallery/>
    </div>
  );
}
