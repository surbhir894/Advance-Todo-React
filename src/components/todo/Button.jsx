import React from 'react'

const Button =({ children, className ,...rest}) => {
  return (
    <>
    <button className={`btn btn-primary ${className}`}{...rest}>{children}</button>
    </>
  )
}

export default Button