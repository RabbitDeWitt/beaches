import { selectsDestinations } from "../constants"
import SelectsCard from "./SelectsCard"

type Props = {}

const Selects = (props: Props) => {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {selectsDestinations.map(({ img, name }, index) => (
        <SelectsCard key={index} img={img} name={name} />
      ))}

    </section>
  )
}

export default Selects