import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  return (
    <div className="search-form">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user.... "
      />
      <button
        onClick={() => {
          if (search) {
            navigate(`/user/${search}`, { replace: true });
            setSearch("");
          }
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};
export default Search;
