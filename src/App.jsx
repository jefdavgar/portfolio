import './App.css'
//import Navbar
import Menu from "./components/Header/Menu"
import "./components/Header/Menu.css"
//import first section
import Section_1 from './components/Section_1/Section_1'
import "./components/Section_1/Section_1.css"
//import second section
import Section_2 from './components/Section_2/Section_2'
import "./components/Section_2/Section_2.css"
function App() {
  return (
    <div>
          <Menu/>
          <Section_1/>
          <Section_2/>
    </div>
  )
}

export default App
