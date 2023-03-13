import { destinationImages } from '../constants'

type Props = {}

const Destinations = (props: Props) => {
  return (
    <section className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h2>All-Inclusive Resorts</h2>
      <p className='py-4'>On the Caribbean's Best Beaches</p>

      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        {destinationImages.map(({ img }, index) => (
          <img
            className={`${index === 0 ? 'col-span-2 md:col-span-3 md:row-span-2' : ''} w-full h-full object-cover`}
            key={index}
            src={img}
          />
        ))}
      </div>
    </section>
  )
}

export default Destinations