import About from "@/components/about";
import Achievements from "@/components/achievements";
import Banner from "@/components/banner";
import Collaborator from "@/components/collaborator";
import Mission from "@/components/mission";
import Preconfig from "@/components/preconfig";
import Tokenomic from "@/components/tokenomic";
import Roadmap from "@/components/roadmap";

export default function Home() {
  return (
    <main>
      <Banner />
      <Mission />
      <About />
      <Achievements />
      <Roadmap />
      <Collaborator />
      <Preconfig />
      <Tokenomic />
    </main>
  );
}
