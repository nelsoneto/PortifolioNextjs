import { MeteorsCard } from './MeteorsCard'

export default function Projects() {
  return (
    <div className="space-y-4" id="Projects">
      <h1 className="text-4xl font-bold text-neutral-300">Projetos</h1>

      <div className="grid w-full grid-cols-1">
        <div className="grid grid-cols-1">
          <MeteorsCard />
        </div>
      </div>
    </div>
  )
}
