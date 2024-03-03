import Tag from "./Tag";
import MainText from "./MainText";
import OpenDappButton from "./OpenDappButton";
import ReadDocButton from "./ReadDocButton";
import Button from "../Button";

function Content() {
  return (
    <div className="text-center space-y-8">
      <Tag text={`Our AI integration just landed`} icon center />
      <MainText />
      <div className="md:text-[16px] text-[14px] text-[#FDFDFD] font-segoe md:leading-[22px] leading-[20px]">Explore the Possibilities of AI Chatting with Omega</div>
      <div className="flex justify-center gap-4">
        <Button content="Open Dapp" alt="Open Dapp" color="#000000" />
        <Button content="Read doc" alt="Read Doc" className="bg-black text-white" color="#ffffff" />
      </div>
    </div>
  )
}

export default Content;