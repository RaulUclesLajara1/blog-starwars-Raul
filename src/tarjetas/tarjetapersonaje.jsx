import { Link } from "react-router-dom"

const TarjetaPersonaje = ({name,uid}) => {
    
    return (
        <>
        <div className="card me-2" style={{"width": "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={`/vistaespecifica/people/${uid}`}><button className="btn btn-primary">Saber más</button></Link>
        </div>
        </div>
        </>


    )
}

export default TarjetaPersonaje