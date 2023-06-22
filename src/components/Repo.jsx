import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import { Link } from "react-router-dom";
const Repo = ({ data }) => {
  return (
    <div className="repo">
      <div className="flex sec1">
        <p className="repo-name">{data.name}</p>
      </div>
      <p className="privacy">{data.private ? "private" : "public"}</p>
      <a href={data.html_url} className="repo-sub-name">
        {data.full_name}
      </a>

      <p className="description-repo">{data.description}</p>
      <Link to={`/user/${data.owner.login}`} className="flex owner">
        <img src={data.owner.avatar_url} />
        <p>{data.owner.login}</p>
      </Link>

      <div className="info">
        <FontAwesomeIcon icon={faCircleInfo} />
        <div className="tooltip">
          <Info data={data} />
        </div>
      </div>
    </div>
  );
};

export default Repo;
