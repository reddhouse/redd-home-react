import React, { useState } from 'react'

export const ReddContext = React.createContext()

function Store(props) {
  const [nav, setNav] = useState("HOME")
  const [light, setLight] = useState(true)

  function toggleLight() {
    setLight(light => !light)
  }

  return (
    <ReddContext.Provider
      value={{
        nav,
        setNav,
        light,
        toggleLight
      }}
    >
      {props.children}
    </ReddContext.Provider>
  )
}

export default Store
