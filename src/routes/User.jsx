import { Outlet, NavLink, useParams, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Profile from "../components/Profile";
import Search from "../components/Search";
import { useState } from "react";

const User = () => {
  const { username } = useParams();
  // const [ user, setUser ] = useState(username)
  // console.log(user);

  return (
    <>
      <aside>
        {username?.length > 0 ? (
          <>
            <Profile urlpath={username} />
          </>
        ) : (
          <></>
        )}
      </aside>
      <main>
        <div className="search">
          <Search />
        </div>
        <div className="tabs">
          <NavLink
            to="repositories"
            className={({ isActive }) => {
              return isActive ? "tabs-active" : "";
            }}
          >
            <p>
              <FontAwesomeIcon icon={faBookBookmark} /> Repositories
            </p>
          </NavLink>
          <NavLink
            to="starred"
            className={({ isActive }) => {
              return isActive ? "tabs-active" : "";
            }}
          >
            <p>
              <FontAwesomeIcon icon={faStar} /> Stars
            </p>
          </NavLink>
        </div>

        <Outlet />
      </main>
    </>
  );
};
export default User;
