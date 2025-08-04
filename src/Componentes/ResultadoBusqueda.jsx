import { useEffect } from "react"

export const ResultadoBusqueda = ({buscarLibros, libros, setLibros}) =>{

    const traerLibros = async () => {
        let respuesta = await fetch(`https://openlibrary.org/search.json?title=${buscarLibros}`)
        let datos = await respuesta.json()
        setLibros(datos.docs)
    }

    useEffect(() => {
        if (buscarLibros!=="") {
            traerLibros()
        }
    }, [buscarLibros])

    return<>
        <table border={2}>
            <thead>
                <tr>
                    <th> Nombre </th>
                    <th> Autor </th>
                    <th> Publicación </th>
                </tr>
            </thead>
            <tbody>
                {libros.map((elemento, indice) => {
                    return <tr key={indice}>
                        <th>{elemento.title}</th>
                        <th>{elemento.author_name}</th>
                        <th>{elemento.first_publish_year}</th>
                    </tr>
                })}

            </tbody>
        </table>
    </>
}