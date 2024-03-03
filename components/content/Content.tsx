import Tag from "./Tag";
import MainText from "./MainText";

function Content() {
  return (
    <div className="text-center space-y-8">
      <Tag text={`Our AI integration just landed`} icon center />
      <MainText />
      <div className="text-[16px] text-[#FDFDFD] font-segoe leading-[22px]">Explore the Possibilities of AI Chatting with Omega</div>
      <div className="flex justify-center gap-4">
        <button className="bg-[#191919] rounded-full py-3 px-4 text-white font-jetbrains flex items-center gap-x-2 shadow-[0px_2px_4px_0px_#A158FF_inset,0px_-4px_12px_0px_rgba(190,_166,_255,_0.50)]">
          <span>Open Dapp</span>
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.66687 12.196L11.3335 5.5293" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.66687 5.5293H11.3335V12.196" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="bg-transparent border-white border rounded-full py-3 px-4 text-white font-jetbrains ">
          <span>Open Dapp</span>
        </button>
      </div>
    </div>
  )
}

export default Content;