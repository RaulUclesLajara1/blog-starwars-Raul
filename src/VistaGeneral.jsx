import { useEffect, useState } from "react";
import TarjetaPersonaje from "./tarjetas/tarjetapersonaje";
import TarjetaPelicula from "./tarjetas/tarjetapeliculas";
import { data } from "react-router-dom";

const VistaGeneral = () => {
    const [personajes, setPersonajes] = useState([]);
    const [films,setFilms] = useState([])
  
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results))
      .catch((err) => console.error(err));

    fetch("https://www.swapi.tech/api/films/")
    .then(res => res.json())
    .then(data => setFilms(data.result))
    .catch(err => console.error(err))
  }, []);

  return (
    <>
     <div className="container-fluid mt-3">
        <h5 className="text-danger">Personajes</h5>
        <div className="flex-row d-flex overflow-auto">
            {personajes.map((persona, index) => (
                <TarjetaPersonaje
                name={persona.name}
                uid={persona.uid}
                key={index}
                />
            ))}
        </div>
        <h5 className="text-warning mt-3">Peliculas</h5>
        <div className="flex-row d-flex overflow-auto mt-3">
            {films.map((pelicula, index) => (
                <TarjetaPelicula 
                name={pelicula.properties.title} 
                director={pelicula.properties.title} 
                created={pelicula.properties.created} key={index}/>
            ))}
        </div>
    </div> 
    
    </>
  );
};

export default VistaGeneral;
