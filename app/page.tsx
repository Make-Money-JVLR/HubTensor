import Achievements from "@/components/achievements";
import Banner from "@/components/banner";
import Collaborator from "@/components/collaborator";
import Mission from "@/components/mission";
import Precofig from "@/components/preconfig";

export default function Home() {
  return (
    <main>
      <Banner />
      <Mission />
      <Achievements />
      <Collaborator />
      <Precofig />
    </main>
  );
}
