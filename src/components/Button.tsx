import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <button className='p-3 bg-gradient-to-r from-primary-dark to-primary-light text-white rounded-md'>
      {children}
    </button>
  )
}

export default Button