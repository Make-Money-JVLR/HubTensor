import Banner from "@/components/banner";
import Collaborator from "@/components/collaborator";
import Precofig from "@/components/preconfig";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <Collaborator />
      <Precofig />
    </main>
  );
}
