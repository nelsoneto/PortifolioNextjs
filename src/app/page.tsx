import About from '@/Components/About'
import Experience from '@/Components/Experience'
import Projects from '@/Components/Projects'

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center gap-4 px-4 py-20">
      <About />
      <Experience />
      <Projects />
    </div>
  )
}
