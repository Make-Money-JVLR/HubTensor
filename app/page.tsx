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
      <Collaborator />
      <Preconfig />
      <Tokenomic/>
    </main>
  );
}
