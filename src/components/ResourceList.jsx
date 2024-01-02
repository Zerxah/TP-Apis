import { useState, useEffect } from "react";
import "./ResourceList.css";
import ResourceCard from "./ResourceCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

function List() {
  const [docs, setDocs] = useState([]);
  const [info, setInfo] = useState([]);

  const navigate = useNavigate();
  const handleError = () => {
    navigate("/*");
  };

  useEffect(() => {
    const url = "https://apisimpsons.fly.dev/api/personajes?limit=6";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDocs(data.docs);
        setInfo(data);
      })
      .catch((error) => {
        console.log(error);
        handleError();
      });
  }, []);

  const goToPage = (page) => {
    const url = `https://apisimpsons.fly.dev/api/personajes?limit=6&page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDocs(data.docs);
        setInfo(data);
      })
      .catch((error) => {
        console.log(error);
        handleError();
      });
  };

  const search = (searchCriteria) => {
    const url = `https://apisimpsons.fly.dev/api/personajes/find/${searchCriteria}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDocs(data.result);
      })
      .catch((error) => {
        console.log(error);
        handleError();
      });
  };

  return (
    <>
      <SearchBar search={search} />
      <div className="ResourceCardContainer">
        {docs.map((res) => (
          <ResourceCard key={res._id} char={res} />
        ))}
      </div>
      <Pagination info={info} goToPage={goToPage} />
    </>
  );
}

export default List;


