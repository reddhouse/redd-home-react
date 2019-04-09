import React, { useState } from 'react'

export const ReddContext = React.createContext()

function Store(props) {
  const [nav, setNav] = useState("HOME")

  return (
    <ReddContext.Provider
      value={{
        nav,
        setNav
      }}
    >
      {props.children}
    </ReddContext.Provider>
  )
}

export default Store
