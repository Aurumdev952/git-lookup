import { Link, NavLink, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import User from "./User";
import Home from "./Home";
import Repositories from "./Repositories";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="logo">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Git LookUp <FontAwesomeIcon icon={faGithubSquare} />
            </Link>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "link active" : "link";
              }}
            >
              about
            </NavLink>
          </li>
          <a href="https://api.github.com/" className="link">
            API
          </a>
        </ul>
      </nav>
      <Routes>
        <Route path="/user/:username" element={<User />}>
          <Route
            path="repositories"
            element={<Repositories title={"Repositories"} info={"repos"} />}
          />
          <Route
            path="starred"
            element={
              <Repositories title={"starred Repositories"} info={"starred"} />
            }
          />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
