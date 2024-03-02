import Image from 'next/image';
import ArrowUpRight from '@/images/ArrowUpRight.svg';
import { cn } from '@/lib/utils';
function Button({
  content,
  alt,
  className,
  color
} : {
  content: string,
  alt: string,
  className?: string
  color?: string
}) {
  return (
    <button className={cn(`bg-white clip py-3 px-4 text-black font-jetbrains flex items-center gap-x-2`, className ?? '')}>
      <span>{content}</span>
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.66687 12.196L11.3335 5.5293" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.66687 5.5293H11.3335V12.196" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default Button;