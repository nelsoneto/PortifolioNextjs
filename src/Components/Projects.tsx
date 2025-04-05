import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

export default function Projects() {
  return (
    <div className="space-y-4" id="Projects">
      <h1 className="text-4xl font-bold">Projetos</h1>

      <div className="grid w-full grid-cols-1">
        <div className="grid grid-cols-1">
          <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border-2 border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-neutral-950 dark:hover:shadow-2xl dark:hover:shadow-indigo-400/[0.1]">
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="mb-3 flex w-full text-xl font-bold text-sky-400"
                as={'a'}
                href={'https://www.contec.com.br/'}
              >
                Contec Sistemas - Gestão Empresarial
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full flex-row gap-2 xl:flex"
                as={'a'}
                href={'https://www.contecsistemas.com.br/'}
              >
                <Image
                  src="/images/contec.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
                <div className="flex flex-col justify-between">
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 text-justify text-sm text-neutral-500 dark:text-neutral-300"
                  >
                    Contec Sistemas é uma empresa de software que desenvolve
                    soluções para empresas de todos os ramos de atividade e
                    portes. A empresa é especializada em sistemas de gestão
                    empresarial (ERP), automação comercial, controle de estoque,
                    entre outros.
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="a"
                    href="https://www.contecsistemas.com.br/"
                    className="w-full rounded-xl px-4 py-2 text-end text-base font-normal dark:text-sky-400"
                  >
                    Acesse →
                  </CardItem>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </div>
  )
}
