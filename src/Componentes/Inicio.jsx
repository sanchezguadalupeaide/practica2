export const Inicio = () => {

    const traerLibro = async() => {
        let respuesta = await fetch('https://openlibrary.org/search.json?title=harry+potter')
        let datos = respuesta.json
        console.log(datos)
    }

    
    return<>
        <table>
            <thead>
                <tr>
                    <th> Nombre </th>
                    <th> Autor </th>
                    <th> Publicación </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>
    </>
}