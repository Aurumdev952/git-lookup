import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div className="home">
      <h1>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        Git LookUp <FontAwesomeIcon icon={faGithubSquare} />
      </h1>
      <p>Find your Favorite GitHub Accounts Here.</p>
      <Search />
    </div>
  );
};

export default Home;
