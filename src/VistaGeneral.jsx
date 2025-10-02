import { useEffect, useState } from "react";
import TarjetaPersonaje from "./tarjetas/tarjetapersonaje";
import TarjetaPelicula from "./tarjetas/tarjetapeliculas";
import UseGlobalReducer from "./hooks/useglobalreducer";
import TarjetaNave from "./tarjetas/tarjetanaves";
import TarjetaVehiculo from "./tarjetas/tarjetavehiculos";
import TarjetaEspecie from "./tarjetas/tarjetaespecies";
import TarjetaPlaneta from "./tarjetas/tarjetaplanetas";
const VistaGeneral = () => {
    const {store,dispatch} = UseGlobalReducer()
  
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => dispatch({type:"Personajes", payload:data.results}))
      .catch((err) => console.error(err));

    fetch("https://www.swapi.tech/api/films/")
    .then(res => res.json())
    .then(data => dispatch({type:"Films", payload:data.result}))
    .catch(err => console.error(err))

    fetch("https://www.swapi.tech/api/starships/")
    .then(res => res.json())
    .then(data => dispatch({type:"Naves", payload:data.results}))
    .catch(err => console.error(err))

    fetch("https://www.swapi.tech/api/vehicles/")
    .then(res => res.json())
    .then(data => dispatch({type:"Vehiculos", payload:data.results}))
    .catch(err => console.error(err))

    fetch("https://www.swapi.tech/api/species/")
    .then(res => res.json())
    .then(data => dispatch({type:"Especies", payload:data.results}))
    .catch(err => console.error(err))

    fetch("https://www.swapi.tech/api/planets/")
    .then(res => res.json())
    .then(data => dispatch({type:"Planetas", payload:data.results}))
    .catch(err => console.error(err))


  }, []);

  return (
    <>
     <div className="container-fluid mt-3">
        <h5 className="text-danger">Personajes</h5>
        <div className="flex-row d-flex overflow-auto">
            {store.personajes.map((persona, index) => (
                <TarjetaPersonaje
                name={persona.name}
                uid={persona.uid}
                key={index}
                />
            ))}
        </div>
        <h5 className="text-warning mt-3">Peliculas</h5>
        <div className="flex-row d-flex overflow-auto mt-3">
            {store.films.map((pelicula, index) => (
                <TarjetaPelicula 
                name={pelicula.properties.title} 
                director={pelicula.properties.director} 
                created={pelicula.properties.created} key={index}
                uid={pelicula.uid}/>
            ))}
        </div>
        <h5 className="text-warning mt-3">Naves</h5>
        <div className="flex-row d-flex overflow-auto mt-3">
            {store.naves.map((nave, index) => (
                <TarjetaNave 
                name={nave.name} 
                key={index}
                uid={nave.uid}/>
                
            ))}
        </div>
        <h5 className="text-warning mt-3">Vehiculos</h5>
        <div className="flex-row d-flex overflow-auto mt-3">
            {store.vehiculos.map((vehiculo, index) => (
                <TarjetaVehiculo
                name={vehiculo.name} 
                key={index}
                uid = {vehiculo.uid}/>
            ))}
        </div>
        <h5 className="text-warning mt-3">Especies</h5>
        <div className="flex-row d-flex overflow-auto mt-3">
            {store.especies.map((especie, index) => (
                <TarjetaEspecie
                name={especie.name} 
                key={index}
                uid={especie.uid}/>
            ))}
        </div>
        <h5 className="text-warning mt-3">Planetas</h5>
        <div className="flex-row d-flex overflow-auto mt-3">
            {store.planetas.map((planeta, index) => (
                <TarjetaPlaneta
                name={planeta.name} 
                key={index}
                uid={planeta.uid}/>
            ))}
        </div>
    </div> 
    
    </>
  );
};

export default VistaGeneral;
