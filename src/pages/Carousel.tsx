import { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { sliderData } from '../constants'

type Props = {}

const Carousel = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const { url, alt } = sliderData[currentSlide]
  const sliderLength = sliderData.length - 1

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }
  const nextSlide = () => {
    if (currentSlide < sliderData.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill className={`${currentSlide === 0 ? 'opacity-30' : ''} absolute top-[50¨%] left-8 text-white text-3xl cursor-pointer`} onClick={prevSlide} />

      <img src={url} alt={alt} className='w-full rounded-md' />

      <BsArrowRightSquareFill className={`${currentSlide === sliderLength ? 'opacity-30' : ''} absolute top-[50¨%] right-8 text-white text-3xl cursor-pointer`} onClick={nextSlide} />
    </section>
  )
}

export default Carousel