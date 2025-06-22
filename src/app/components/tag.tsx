const Tag = ({ name }: { name: string }) => {
  return (
    <span className="inline-flex items-center rounded-md px-2 py-1 text-sm md:text-base uppercase font-medium text-primary border-dashed border-2 border-primary w-fit">{name}</span>

  )
}

export default Tag;