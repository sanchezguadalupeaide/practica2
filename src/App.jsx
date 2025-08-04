import { useState } from 'react'
import './App.css'
import { Busqueda } from './Componentes/Busqueda'
import { Inicio } from './Componentes/Inicio'
import { ResultadoBusqueda } from './Componentes/ResultadoBusqueda'

function App() {
  const [buscarLibro, setBuscarLibro] = useState("")
  const [libros, setLibros] = useState([])

  return (
    <>
      <Busqueda setBuscarLibro={setBuscarLibro}/>
      {buscarLibro === ""
      ? <Inicio libros={libros} setLibros={setLibros}/> 
      : <ResultadoBusqueda buscarLibros={buscarLibro} libros={libros} setLibros={setLibros}/> } 
    </>
  )
}

export default App
