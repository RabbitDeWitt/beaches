type Props = {
  img: string,
  name: string
}

const SelectsCard = ({ img, name }: Props) => {
  return (
    <article className="relative">
      <img src={img} alt={name} className='object-cover h-full' />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="absolute left-4 bottom-4 text-2xl font-bold text-white">
          {name}
        </p>
      </div>
    </article>
  )
}

export default SelectsCard