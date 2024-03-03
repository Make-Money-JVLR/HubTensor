import About from "@/components/about";
import Achievements from "@/components/achievements";
import Banner from "@/components/banner";
import Collaborator from "@/components/collaborator";
import Mission from "@/components/mission";
import Preconfig from "@/components/preconfig";
import Tokenomic from "@/components/tokenomic";

export default function Home() {
  return (
    <main>
      <Banner />
      <Mission />
      <About />
      <Achievements />
      <Collaborator />
      <Preconfig />
      <Tokenomic />
    </main>
  );
}
