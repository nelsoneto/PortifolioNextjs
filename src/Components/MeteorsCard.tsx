'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Meteors } from './ui/meteors'

export function MeteorsCard() {
  return (
    <div className="flex h-full w-full">
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 h-full w-full scale-[0.70] transform rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 blur-3xl" />

        {/* Card Content */}
        <motion.div
          className="relative flex h-auto w-full max-w-md flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl border-2 border-neutral-700 bg-neutral-900 p-4 shadow-xl sm:flex-row md:max-w-4xl md:p-6"
          whileHover={{
            borderColor: 'rgba(76, 189, 129, 1)', // Verde
            boxShadow: '0px 0px 20px rgba(76, 189, 129, 0.5)', // Sombra verde
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          {/* Imagem */}
          <div className="w-full max-w-2xl">
            <Image
              src="/images/contec.png"
              alt="Contec Sistemas"
              width={300}
              height={800}
              className="h-auto w-full rounded-lg object-contain"
            />
          </div>

          {/* Conteúdo do Card */}
          <div className="z-10 flex w-full flex-col items-start justify-center gap-4 md:w-2/3">
            <Link
              href="https://www.contecsistemas.com.br/"
              className="relative z-50 mb-4 text-lg font-bold text-neutral-300 md:text-xl"
            >
              Contec Sistemas - Gestão Empresarial
            </Link>

            <p className="relative z-50 mb-4 text-justify text-sm font-normal text-neutral-400 md:text-base">
              Contec Sistemas é uma empresa de software que desenvolve soluções
              para empresas de todos os ramos de atividade e portes. A empresa é
              especializada em sistemas de gestão empresarial (ERP), automação
              comercial, controle de estoque, entre outros.
            </p>
            <div className="flex w-full justify-end text-end">
              <Link
                href="https://www.contecsistemas.com.br/"
                className="group relative inline-flex items-center justify-start overflow-hidden rounded-lg bg-neutral-800 py-3 pr-12 pl-4 font-semibold text-neutral-300 transition-all duration-150 ease-in-out hover:pr-6 hover:pl-10"
              >
                <span className="absolute bottom-0 left-0 h-1 w-full bg-emerald-600 transition-all duration-150 ease-in-out group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Acessar o site
                </span>
              </Link>
            </div>
          </div>

          {/* Meteor Effect */}
          <Meteors number={20} />
        </motion.div>
      </div>
    </div>
  )
}
