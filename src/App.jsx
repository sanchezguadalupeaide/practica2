import { useState } from 'react'
import './App.css'
import { Busqueda } from './Componentes/Busqueda'

function App() {
  const [buscarLibro, setBuscarLibro] = useState("")
  const [libros, setLibros] = useState([])

  return (
    <>
      <Busqueda setBuscarLibro={setBuscarLibro}/>
    </>
  )
}

export default App
