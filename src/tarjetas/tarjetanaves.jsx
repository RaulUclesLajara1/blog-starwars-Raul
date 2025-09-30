const TarjetaNave = ({name,manufacturer,passengers}) => {
    
    return (
        <>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Nombre : {name} <br/> Creador: {manufacturer} <br/> Pasajeros:{passengers} </p>
                <Link to={`/vistaespecifica/nave/${name}`}><button class="btn btn-primary">Saber más</button></Link>
        </div>
        </div>
        </>


    )
}

export default TarjetaNave