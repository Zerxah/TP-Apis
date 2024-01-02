import { useLocation, useNavigate } from "react-router-dom";
import "./ResourceDetail.css";

function ResourceDetail() {
  const location = useLocation();
  let navigate = useNavigate();
  const { character } = location.state;

  return (
    <>
      <div className="ResourceDetailContainer">
        <div className="ResourceDetail ">
          <h2>{character.Nombre}</h2>
          <div className="imgContainer">
            <img src={character.Imagen} />
          </div>
          <h3>{character.Ocupacion}</h3>
          <p>{character.Historia}</p>
        </div>
      </div>
      <div>
        <button className="pagButton" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </>
  );
}

export default ResourceDetail;
