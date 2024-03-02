import Image from 'next/image';
import ArrowUpRight from '@/images/ArrowUpRight.svg';
function ReadDocButton() {
  return (
    <button className="bg-black button-clip text-white font-jetbrains flex items-center gap-x-2">
      <span>Open Dapp</span>
      <Image
        priority
        src={ArrowUpRight}
        alt="Open Dapp"
      />
    </button>
  )
}

export default ReadDocButton;