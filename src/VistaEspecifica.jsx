import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VistaEspecifica = () => {
  const { tipo, uid } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${tipo}/${uid}/`)
      .then((resp) => resp.json())
      .then((data_api) => setData(data_api))
      .catch((err) => console.error(err));
  }, []);

 
  if (!data) return null; // ya que setData se ejecuta de fora asincrona y sino se intentaria acceder a las propiedades de data antes de que data tenga el objeto del fetch
  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Quisque ut lectus nec arcu volutpat porttitor. Etiam
            convallis, turpis in convallis feugiat, justo felis aliquet erat.
          </p>
        </div>
      </div>

      <hr className="border-danger border-2 opacity-100 my-4" />

      {/* Propiedades según tipo */}
      <div className="d-flex justify-content-between text-center flex-wrap text-danger fw-bold">
        {tipo === "people" && (
          <>
            <div><p>Name</p><p className="text-light fw-normal">{data.result.properties.name}</p></div>
            <div><p>Birth Year</p><p className="text-light fw-normal">{data.result.properties.birth_year}</p></div>
            <div><p>Gender</p><p className="text-light fw-normal">{data.result.properties.gender}</p></div>
            <div><p>Height</p><p className="text-light fw-normal">{data.result.properties.height}</p></div>
            <div><p>Skin Color</p><p className="text-light fw-normal">{data.result.properties.skin_color}</p></div>
            <div><p>Eye Color</p><p className="text-light fw-normal">{data.result.properties.eye_color}</p></div>
          </>
        )}

        {tipo === "films" &&(
          <>
            <div><p>Title</p><p className="text-light fw-normal">{data.result.properties.title}</p></div>
            <div><p>Director</p><p className="text-light fw-normal">{data.result.properties.director}</p></div>
            <div><p>Producer</p><p className="text-light fw-normal">{data.result.properties.producer}</p></div>
            <div><p>Release Date</p><p className="text-light fw-normal">{data.result.properties.release_date}</p></div>
          </>
        )}

        {tipo === "starships" &&(
          <>
            <div><p>Name</p><p className="text-light fw-normal">{data.result.properties.name}</p></div>
            <div><p>Model</p><p className="text-light fw-normal">{data.result.properties.model}</p></div>
            <div><p>Manufacturer</p><p className="text-light fw-normal">{data.result.properties.manufacturer}</p></div>
            <div><p>Passengers</p><p className="text-light fw-normal">{data.result.properties.passengers}</p></div>
            <div><p>Crew</p><p className="text-light fw-normal">{data.result.properties.crew}</p></div>
          </>
        )}

        {tipo === "planets" &&(
          <>
            <div><p>Name</p><p className="text-light fw-normal">{data.result.properties.name}</p></div>
            <div><p>Climate</p><p className="text-light fw-normal">{data.result.properties.climate}</p></div>
            <div><p>Terrain</p><p className="text-light fw-normal">{data.result.properties.terrain}</p></div>
            <div><p>Population</p><p className="text-light fw-normal">{data.result.properties.population}</p></div>
          </>
        )}

        {tipo === "vehicles" &&(
          <>
            <div><p>Name</p><p className="text-light fw-normal">{data.result.properties.name}</p></div>
            <div><p>Model</p><p className="text-light fw-normal">{data.result.properties.model}</p></div>
            <div><p>Manufacturer</p><p className="text-light fw-normal">{data.result.properties.manufacturer}</p></div>
            <div><p>Passengers</p><p className="text-light fw-normal">{data.result.properties.passengers}</p></div>
            <div><p>Crew</p><p className="text-light fw-normal">{data.result.properties.crew}</p></div>
          </>
        )}

        {tipo === "species" &&(
          <>
            <div><p>Name</p><p className="text-light fw-normal">{data.result.properties.name}</p></div>
            <div><p>Classification</p><p className="text-light fw-normal">{data.result.properties.classification}</p></div>
            <div><p>Designation</p><p className="text-light fw-normal">{data.result.properties.designation}</p></div>
            <div><p>Language</p><p className="text-light fw-normal">{data.result.properties.language}</p></div>
          </>
        )}
      </div>

      <div className="row">
        <div className="col-12"></div>
          <Link to={"/"} className="d-flex justify-content-end"><button className="btn btn-warning">Volver incio</button></Link> 
      </div>
    </div>
  );
};

export default VistaEspecifica;
