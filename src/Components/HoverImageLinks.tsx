'use client'
import { motion, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import { BiChevronRight } from 'react-icons/bi'

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-900 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="/imgs/random/11.jpg"
          href="#About"
        />
        <Link
          heading="Experience"
          subheading="We work with great people"
          imgSrc="/imgs/random/6.jpg"
          href="#Experience"
        />
        <Link
          heading="Projects"
          subheading="Our work speaks for itself"
          imgSrc="/imgs/random/4.jpg"
          href="#Projects"
        />
      </div>
    </section>
  )
}

interface LinkProps {
  heading: string
  imgSrc: string
  subheading: string
  href: string
}

const Link = ({ heading, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // const mouseXSpring = useSpring(x)
  // const mouseYSpring = useSpring(y)

  // const top = useTransform(mouseYSpring, [0.5, -0.5], ['40%', '60%'])
  // const left = useTransform(mouseXSpring, [0.5, -0.5], ['60%', '70%'])

  // Removed the empty MouseMoveEvent interface as it is equivalent to its supertype

  interface Rect {
    width: number
    height: number
    left: number
    top: number
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!ref.current) return
    const rect: Rect = ref.current.getBoundingClientRect()

    const width: number = rect.width
    const height: number = rect.height

    const mouseX: number = e.clientX - rect.left
    const mouseY: number = e.clientY - rect.top

    const xPct: number = mouseX / width - 0.5
    const yPct: number = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: 'spring',
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split('').map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: 'spring' }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      {/* <motion.img
        style={{
          top,
          left,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={{
          initial: { scale: 0, rotate: '-12.5deg' },
          whileHover: { scale: 1, rotate: '12.5deg' },
        }}
        transition={{ type: 'spring' }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      /> */}

      <motion.div
        variants={{
          initial: {
            x: '25%',
            opacity: 0,
          },
          whileHover: {
            x: '0%',
            opacity: 1,
          },
        }}
        transition={{ type: 'spring' }}
        className="relative z-10 p-4"
      >
        <BiChevronRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  )
}
