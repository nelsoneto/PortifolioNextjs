const NeuButton = () => {
  return (
    <div className="flex min-h-[200px] flex-col items-start justify-start gap-2">
      <button className="w-fit bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        About
      </button>
      <button className="w-fit bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        Experience
      </button>
      <button className="w-fit bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
        Projects
      </button>
    </div>
  )
}

export default NeuButton
