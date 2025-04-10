import Image from 'next/image'
import Link from 'next/link'
import { BsChevronBarDown } from 'react-icons/bs'
import { TypewriterEffectSmooth } from './ui/TypewriterEffect'
export default function HomeHero() {
  const words = [
    {
      text: `I'm a`,
    },
    {
      text: 'full stack',
    },
    {
      text: 'web developer',
    },
  ]
  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 px-4 pt-20">
      <div className="flex-row items-center justify-center">
        <h1 className="flex-row justify-center gap-2 text-center text-4xl font-bold text-neutral-300 sm:flex md:text-start">
          <div className="motion-rotate-loop-25 m-0 -rotate-45 p-0">🖐🏻</div>{' '}
          Hey, I&apos;m Nelson Silva Neto
        </h1>
        <div className="flex justify-center">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="flex items-start justify-start">
        <div className="relative inline-flex overflow-hidden rounded-xl p-px">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00c950_0%,#00bc7d_50%,##00bba7_100%)] hover:animate-[spin_1s_linear_infinite]" />
          <Image
            src="/images/react2.png"
            alt="Nelson Silva Neto"
            width={900}
            height={900}
            className="inline-flex h-full w-full items-center justify-center rounded-xl p-1 text-xs font-medium text-gray-50 backdrop-blur-3xl"
          />
        </div>
      </div>
      <Link href="#About" className="sm:hidden">
        <BsChevronBarDown className="h-8 w-8 text-emerald-500" />
      </Link>
    </div>
  )
}
