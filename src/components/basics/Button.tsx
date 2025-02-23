import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  title: string
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className = '',
  title = '',
  ...props
}) => (
  <button
    type={type}
    className={`${className} inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs  uppercase tracking-widest focus:outline-none focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
    {...props}
  >
    {title}
  </button>
)

export default Button
