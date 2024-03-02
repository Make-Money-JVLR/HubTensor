import Image from 'next/image';
import ArrowUpRight from '@/images/ArrowUpRight.svg';
function OpenDappButton() {
  return (
    <button className="bg-white button-clip text-black font-jetbrains flex items-center gap-x-2 rounded-md">
      <span>Open Dapp</span>
      <Image
        priority
        src={ArrowUpRight}
        alt="Open Dapp"
      />
    </button>
  )
}

export default OpenDappButton;