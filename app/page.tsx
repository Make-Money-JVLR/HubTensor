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
    <main className="overflow-hidden">
      <Banner />
      <Collaborator />
      <About />
      <Preconfig />
      <Mission />
      <Achievements />
      <Roadmap />
      <Tokenomic />
    </main>
  );
}
