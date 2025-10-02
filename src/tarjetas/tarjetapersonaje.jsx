import { Link } from "react-router-dom"
import UseGlobalReducer from "../hooks/useglobalreducer"

const TarjetaPersonaje = ({name,uid}) => {
    const {store,dispatch} = UseGlobalReducer();
    return (
        <>
        <div className="card me-2">
            <img src="https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={`/vistaespecifica/people/${uid}`}><button className="btn bg-dark bg-gradient text-light">Saber más</button></Link>
                <button className="btn btn-warning ms-2" onClick={()=>{
                    dispatch({type:"Anyadir_favorito",
                    payload:{tipo:"planets",uid:uid, name:name}

                })}}><i class="fa-regular fa-heart"></i></button>
        </div>
        </div>
        </>


    )
}

export default TarjetaPersonaje