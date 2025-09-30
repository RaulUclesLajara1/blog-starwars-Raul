const TarjetaEspecie = ({name,language,average_height}) => {
    
    return (
        <>
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Nombre: {name} <br/> Idioma: {language} <br/> Altura media:{average_height}</p>
                <Link to={`/vistaespecifica/especie/${name}`}><button class="btn btn-primary">Saber más</button></Link>
        </div>
        </div>
        </>


    )
}

export default TarjetaEspecie