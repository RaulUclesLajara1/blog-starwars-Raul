const TarjetaVehiculo = ({name,passengers,manufacturer}) => {
    
    return (
        <>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Nombre: {name} <br/> Pasajeros: {passengers} <br/> Creador:{manufacturer}</p>
                <Link to={`/vistaespecifica/vehiculo/${name}`}><button class="btn btn-primary">Saber más</button></Link>
        </div>
        </div>
        </>


    )
}

export default TarjetaVehiculo