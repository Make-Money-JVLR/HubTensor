import Image from "next/image";
import Check from "@/images/check.svg";
import Circles from "@/images/circles.svg";
import Tag from "../content/Tag";

function Roadmap() {
  const steps = [
    {
      name: "Train the chatbox",
      date: "01 AUG 2024",
      description: "Train the chatbox ussing the data that you gathered. This wwill help it understand the target",
    },
    {
      name: "Build the app",
      date: "02 SEP 2024",
      description: "Train the chatbox ussing the data that you gathered. This wwill help it understand the target",
    },
    {
      name: "Test the app",
      date: "01 AUG 2024",
      description: "Train the chatbox ussing the data that you gathered. This wwill help it understand the target",
    },
    {
      name: "Train the chatbox",
      date: "01 AUG 2024",
      description: "Train the chatbox ussing the data that you gathered. This wwill help it understand the target",
    },
  ]
  return (
    <div className="flex justify-center">
      <div className="relative overflow-visible max-w-[1960px] flex-1">
        <div className="absolute -z-10">
          <svg width="603" height="1450" viewBox="0 0 603 1450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2026_592)">
              <ellipse cx="176.237" cy="324.989" rx="176.237" ry="324.989" transform="matrix(1 0 0 -1 -150 1050)" fill="url(#paint0_radial_2026_592)" fill-opacity="0.5"/>
            </g>
            <defs>
            <filter id="filter0_f_2026_592" x="-550" y="0.0229492" width="1152.47" height="1449.98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2026_592"/>
            </filter>
              <radialGradient id="paint0_radial_2026_592" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(176.237 1128.87) rotate(-90) scale(1128.87 417.388)">
                <stop offset="0.308205" stop-color="#AE61FB"/>
                <stop offset="1" stop-color="#9747FF"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 -top-[20%] -z-10">
          <svg width="683" height="1124" viewBox="0 0 683 1124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_2026_539)">
              <ellipse cx="220.322" cy="161.602" rx="220.322" ry="161.602" transform="matrix(1 0 0 -1 400.242 724)" fill="url(#paint0_radial_2026_539)" fill-opacity="0.5"/>
            </g>
            <defs>
              <filter id="filter0_f_2026_539" x="0.242188" y="0.795898" width="1240.64" height="1123.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_2026_539"/>
              </filter>
              <radialGradient id="paint0_radial_2026_539" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220.322 561.335) rotate(-90) scale(561.335 521.796)">
                <stop offset="0.308205" stop-color="#C061FB"/>
                <stop offset="1" stop-color="#9747FF"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <Image src={Circles} alt="circle"  className="absolute -z-10"/>
        <div className="flex justify-between px-16 py-44 ">
          <div className="py-52 space-y-4">
            <Tag text={`HubTensor`} />
            <div style={{
              background: "var(--Gradient-Primary, linear-gradient(90deg,#C7B3F8 0%,#6C3BEF 50%,#4223A1 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }} className="text-5xl font-bold">Roadmap</div>
          </div>
          <div className="flex flex-col">
            {steps.map(({date, name, description}, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="font-jetbrains text-sm flex items-center gap-x-4">
                  <div className="relative">
                    <span>{date}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" className="absolute -top-3 -left-3">
                      <path d="M1 16.777V6.25285L7.45027 1.5H24.0852" stroke="#6C3BEF" strokeWidth="2"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" className="absolute -bottom-3 -right-3">
                      <path d="M24 0.222982L24 10.7472L17.5497 15.5L0.914839 15.5" stroke="#6C3BEF" stroke-width="2"/>
                    </svg>
                  </div>
                  <svg width="199" height="1" viewBox="0 0 199 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="199" y2="0.5" stroke="#353539"/>
                  </svg>
                </div>
                <div className="border px-6 py-12 border-[#353539] space-y-4">
                  <div className="flex items-center gap-x-4">
                    <Image src={Check} alt="Roadmap" className="rounded-full bg-[#9747FF] size-8 p-1" />
                    <span>{name}</span>
                  </div>
                  <div className="font-jetbrains max-w-[560px] text-[#918DA4]">{description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;