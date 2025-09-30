const TarjetaPersonaje = ({name,gender,mass}) => {
    
    return (
        <>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Nombre : {nombre} <br/> Genero : {gender} <br/> Peso:{mass} </p>
                <Link to={`/vistaespecifica/personaje/${name}`}><button class="btn btn-primary">Saber más</button></Link>
        </div>
        </div>
        </>


    )
}

export default TarjetaPersonaje