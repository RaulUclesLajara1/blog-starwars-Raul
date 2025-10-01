import { Link } from "react-router-dom"

const TarjetaPelicula = ({name,director,created}) => {
    
    return (
        <>
        <div class="card" style={{"width": "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Titulo : {name} <br/> Director: {director} <br/> Fecha:{created} </p>
                <Link to={`/vistaespecifica/pelicula/${name}`}><button class="btn btn-primary">Saber más</button></Link>
        </div>
        </div>
        </>


    )
}

export default TarjetaPelicula