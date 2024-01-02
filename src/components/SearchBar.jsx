import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

function Search({ search }) {
  const iconSearch = <FontAwesomeIcon icon={faSearch} />;
  const searchInputRef = useRef();

  const handleSearch = () => {
    search(searchInputRef.current.value);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar..."
        ref={searchInputRef}
      />
      <button id="search-button" onClick={handleSearch}>
        {iconSearch}
      </button>{" "}
    </div>
  );
}

export default Search;

