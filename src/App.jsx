import { useState } from 'react'
import Terminal from './Componentes/Terminal'
import TerminalApp from './Componentes/TerminalApp'
import ListIten from './Componentes/ListItem'
import ListItem from './Componentes/ListItem'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
        <Terminal/>
        <TerminalApp/>
        <ListItem/>
        
    </>
  )
  
}

export default App
