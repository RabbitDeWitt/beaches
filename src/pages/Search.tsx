import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdTravelExplore } from 'react-icons/md'
import { Button } from '../components'
import { optionsDestinations } from '../constants'

type Props = {}

const Search = (props: Props) => {
  return (
    <section className='max-w-[1240px] mx-auto px-4 grid py-16 gap-4 lg:grid-cols-3'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div className='flex flex-col'>
          <h2 className='uppercase'>Luxury included vacations for two people</h2>
          <p className='py-4'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
          <div className='grid gap-8 sm:grid-cols-2'>
            <div className='flex flex-col lg:flex-row items-center text-center gap-2'>
              <Button>
                <RiCustomerService2Fill size={50} />
              </Button>

              <div>
                <h3 className='uppercase py-2'>Leading Services</h3>
                <p className='uppercase py-1'>All-inclusive company for 20 years</p>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center text-center gap-2'>
              <Button>
                <MdTravelExplore size={50} />
              </Button>

              <div>
                <h3 className='uppercase py-2'>Automated Bookings</h3>
                <p className='uppercase py-1'>All-inclusive company for 20 years</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div>
        <div className='text-center border'>
          <p className='uppercase pt-2'>Get an additional 10% off</p>
          <p className='uppercase py-4'>12 hours left</p>
          <p className='uppercase bg-gray-800 text-gray-200 py-2'>Book now and safe</p>
        </div>

        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              {optionsDestinations.map(({ name }, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-in</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-out</label>
            <input className='border rounded-md p-2' type="date" />
          </div>
          <Button className='w-full my-4'>
            Rates & Availabilities
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Search