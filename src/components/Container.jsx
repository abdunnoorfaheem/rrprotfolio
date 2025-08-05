import React from 'react'

const Container = ({children,className}) => {
  return (
    <>
      <div className={`max-w-[1170px] m-auto ${className}`}>{children}</div>

      {/* jei tag gula wrap kore rakbe segula children hisabe bosbe div er vitor {} er moddhe */}
    </>
  )
}

export default Container
