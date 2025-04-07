import { FaNodeJs, FaReact } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript, SiZod } from 'react-icons/si'
import { HoverBorderGradient } from './ui/hover-border-gradient'

export default function Experience() {
  const reactIcons = {
    RiTailwindCssFill: {
      icon: <RiTailwindCssFill className="text-sky-400" size={20} />,
      name: 'Tailwindcss',
    },
    Typescript: {
      icon: <SiTypescript className="text-blue-600" size={20} />,
      name: 'Typescript',
    },
    FaReact: {
      icon: <FaReact className="text-blue-400" size={20} />,
      name: 'React.js',
    },
    RiNextjsFill: {
      icon: <RiNextjsFill className="text-neutral-700" size={20} />,
      name: 'Next.js',
    },
    FaNodeJs: {
      icon: <FaNodeJs className="text-emerald-400" size={20} />,
      name: 'Node.js',
    },
    SiZod: {
      icon: <SiZod className="text-sky-900" size={20} />,
      name: 'Zod',
    },
    Figma: {
      icon: <FiFigma className="text-indigo-400" size={20} />,
      name: 'Figma',
    },
  }

  return (
    <div id="Experience" className="space-y-4">
      <h1 className="text-4xl font-bold text-neutral-300">Experiência</h1>
      <p className="mt-4">
        Já trabalhei em uma variedade de projetos, tanto pessoais quanto
        profissionais. Esses projetos variam de aplicativos da web a aplicativos
        móveis, abrangendo uma ampla gama de tecnologias e ferramentas.
      </p>
      <div className="flex-row space-y-2">
        <div className="flex gap-2 overflow-x-auto py-6">
          {Object.values(reactIcons).map(({ icon, name }, index) => (
            <HoverBorderGradient
              key={index}
              as={'div'}
              containerClassName="rounded-full"
              className="flex items-center space-x-1 bg-neutral-900 p-2"
            >
              <div className="flex items-center space-x-1">
                {icon}
                <p className="text-xs text-neutral-300">{name}</p>
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </div>
  )
}
