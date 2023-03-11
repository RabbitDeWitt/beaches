import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Button = ({ children, className }: Props) => {
  return (
    <button className={`p-3 bg-gradient-to-r from-primary-dark to-primary-light text-white rounded-md ${className}`}>
      {children}
    </button>
  )
}

export default Button