'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteors = new Array(number || 20).fill(true)
  return (
    <motion.div
      className="relative h-full w-full overflow-hidden" // Adicionado para limitar o espaço ocupado
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_el, idx) => {
        const meteorCount = number || 20
        // Calcula a posição para distribuir os meteoros uniformemente
        const position = idx * (800 / meteorCount) - 400 // Espalha em uma faixa de 800px, centralizado

        return (
          <span
            key={'meteor' + idx}
            className={cn(
              'animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-neutral-700 shadow-[0_0_0_1px_#ffffff10]',
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: Math.random() * 100 + '%', // Posiciona aleatoriamente no eixo vertical
              left: position + 'px',
              animationDelay: Math.random() * 5 + 's', // Atraso aleatório entre 0-5s
              animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + 's', // Duração aleatória entre 5-10s
            }}
          ></span>
        )
      })}
    </motion.div>
  )
}
