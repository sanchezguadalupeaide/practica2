import { useRef } from "react"

export const Busqueda = ({setBuscarLibro})=>{
    const inputRef = useRef()
    return<>
        <h1>Explorador de libros</h1>
        <input type="text"
        placeholder="Ingrese el nombre de un libro"
        ref={inputRef} />
         <button onClick={()=>{setBuscarLibro(inputRef.current.value)}}> Buscar </button>
    </>
}