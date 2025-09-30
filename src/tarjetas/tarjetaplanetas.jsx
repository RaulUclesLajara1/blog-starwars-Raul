const TarjetaPlaneta = ({name,climate,population}) => {
    
    return (
        <>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Nombre : {name} <br/> Clima : {climate} <br/> Poblacion:{population} </p>
                <Link to={`/vistaespecifica/planeta/${name}`}><button class="btn btn-primary">Saber más</button></Link>
        </div>
        </div>
        </>


    )
}

export default TarjetaPlaneta