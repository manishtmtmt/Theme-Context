import './App.css';
import { useContext } from "react";
import Navbar from "./components/Navbar.jsx"
import Body from "./components/Body.jsx"
import { ThemeContextProvider } from "./context/ThemeContextProvider";

function App() {
  const {isLight} = useContext(ThemeContextProvider)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
