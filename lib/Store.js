import React, { useState } from 'react'

export const GlobalContext = React.createContext()

function GlobalStore(props) {
  const [nav, setNav] = useState("HOME")
  const [light, setLight] = useState(true)

  function toggleLight() {
    setLight(light => !light)
  }

  return (
    <GlobalContext.Provider
      value={{
        nav,
        setNav,
        light,
        toggleLight
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalStore
