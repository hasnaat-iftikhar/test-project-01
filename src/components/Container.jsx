import React from 'react'

const Container = ({
    className="",
    children
}) => {
  return (
    <div className={`${className} px-[42px]`}>
        {children}
    </div>
  )
}

export default Container