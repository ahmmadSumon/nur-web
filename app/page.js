import Herosection from "@/components/Herosection";
import Introduction from "@/components/Introduction";
import OurProgram from "@/components/OurProgram";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-28">
    <Herosection/>
    <Introduction/>
    <OurProgram/>
    <Stats/>
    </div>
  );
}
