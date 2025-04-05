import Image from 'next/image'
import Link from 'next/link'
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
        <h1 className="flex-row justify-center gap-2 text-center text-4xl font-bold sm:flex md:text-start">
          <div className="motion-rotate-loop-25 m-0 p-0">👋🏻</div> Hey, I&apos;m
          Nelson Silva Neto
        </h1>
        <div className="flex justify-center">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="flex items-start justify-start">
        <div className="relative inline-flex overflow-hidden rounded-xl p-px">
          <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9366b4_0%,#f884dc_50%,#5dd3e5_100%)] hover:animate-[spin_1s_linear_infinite]" />
          <Image
            src="/images/familia.jpg"
            alt="Nelson Silva Neto"
            width={200}
            height={200}
            className="inline-flex h-full w-full items-center justify-center rounded-xl p-1 text-xs font-medium text-gray-50 backdrop-blur-3xl"
          />
        </div>
      </div>
      <Link href="#About" target="_blank" className="animate-bounce sm:hidden">
        🏀
      </Link>
    </div>
  )
}
