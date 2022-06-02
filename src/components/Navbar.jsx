import React, { useContext } from 'react'
import { ThemeContextProvider } from "../context/ThemeContextProvider";


const Navbar = () => {
  const {toggleTheme, isLight} = useContext(ThemeContextProvider)
  return (
    <div>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
    </div>
  )
}

export default Navbar