import { Link } from "react-router-dom"
import UseGlobalReducer from "../hooks/useglobalreducer"

const TarjetaEspecie = ({name,uid}) => {
    const {store,dispatch} = UseGlobalReducer();
    return (
        <>
        <div class="card me-2">
            <img src="https://i.etsystatic.com/23313394/r/il/42204a/2316127314/il_fullxfull.2316127314_93m1.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Nombre: {name}</p>
                <Link to={`/vistaespecifica/species/${uid}`}><button class="btn bg-dark bg-gradient text-light">Saber más</button></Link>
                <button className="btn btn-warning ms-2" onClick={()=>{
                    dispatch({type:"Anyadir_favorito",
                    payload:{tipo:"species",uid:uid,name:name}

                })}}><i class="fa-regular fa-heart"></i></button>
        </div>
        </div>
        </>


    )
}

export default TarjetaEspecie