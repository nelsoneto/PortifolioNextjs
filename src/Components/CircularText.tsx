'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CircularTextProps {
  text: string
  radius?: number
  fontSize?: number
  rotateSpeed?: number
  color?: string
  reverse?: boolean
  hoverEffect?: boolean
  startAngle?: number
}

export default function CircularText({
  text = 'Texto circular animado • ',
  radius = 100,
  fontSize = 16,
  rotateSpeed = 30,
  color = 'black',
  reverse = false,
  hoverEffect = true,
  startAngle = 0,
}: CircularTextProps) {
  const [rotation, setRotation] = useState(startAngle)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + (reverse ? -0.2 : 0.2)) % 360)
    }, rotateSpeed)

    return () => clearInterval(interval)
  }, [rotateSpeed, reverse])

  useEffect(() => {
    if (hoverEffect) {
      controls.start({
        scale: isHovered ? 1.2 : 1,
        transition: { duration: 0.3 },
      })
    }
  }, [isHovered, controls, hoverEffect])

  const characters = text.split('')

  return (
    <motion.div
      className="relative flex cursor-pointer items-center justify-center"
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
      animate={controls}
      onMouseEnter={() => hoverEffect && setIsHovered(true)}
      onMouseLeave={() => hoverEffect && setIsHovered(false)}
    >
      {characters.map((char, index) => {
        const angle = (index * 360) / characters.length + rotation
        const radian = (angle * Math.PI) / 180
        const x = radius * Math.cos(radian)
        const y = radius * Math.sin(radian)

        return (
          <motion.span
            key={index}
            className="absolute origin-center"
            style={{
              fontSize: `${fontSize}px`,
              color,
              transform: `translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
              fontWeight: isHovered ? 'bold' : 'normal',
              opacity: isHovered ? 1 : 0.8,
            }}
            animate={{
              rotate: [0, 360],
              transition: {
                duration: (rotateSpeed * characters.length) / 1000,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            whileHover={hoverEffect ? { scale: 1.5 } : {}}
          >
            {char}
          </motion.span>
        )
      })}

      {/* Elemento central opcional */}
      {hoverEffect && (
        <motion.div
          className="absolute flex items-center justify-center rounded-full bg-gray-100"
          style={{
            width: radius * 0.4,
            height: radius * 0.4,
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 1 : 0.7,
          }}
        >
          <span className="text-xs font-medium">Passe o mouse</span>
        </motion.div>
      )}
    </motion.div>
  )
}
