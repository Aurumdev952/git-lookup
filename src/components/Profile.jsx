import ProfInfo from "./ProfInfo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from "@tanstack/react-query"
import getData from "../api/getData"
import { TailSpin } from "react-loader-spinner"




const Profile = ({ urlpath }) => {
    const {
        status,
        error,
        data: data,

    } = useQuery({
        queryKey: [urlpath],
        queryFn: () => {return getData(`https://api.github.com/users/${urlpath}`)}
    })
    if (status === "loading") {
        return (<div className="loading l">
            <TailSpin
                height="50"
                width="50"
                color="#666e77"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
/>
        <h1>Loading..</h1>
        </div>)
    }
    if (status === "error") {
        return (<div className="loading error">
            <FontAwesomeIcon icon={faFaceFrown} className="error-i" />
            <p>Sorry, an error has occured!!</p>
        </div>)
    }
    if (status === "success" && data === null) {
        return (<div>
            <h1>404</h1>
            <p>no results found</p>
        </div>)
    }
    return (
        <div className="profile">
            <h2><a href={data.html_url}><FontAwesomeIcon icon={faGithub}/> </a>Profile </h2>
            <img src={data.avatar_url}/>
            <div className="prof">
                <p className="uname">{data.login}</p>
                <p className="name">{data.name}</p>
                <p className="bio">{data.bio}</p>
            </div>
            <div className="prof-infos">
                <ProfInfo data={{
                    "title": "followers",
                    "value": data.followers
                }}/>
                <ProfInfo data={{
                    "title": "following",
                    "value": data.following
                }}/>
                {/* <ProfInfo data={{
                    "title": "stars",
                    "value": 2
                }}/> */}
                <ProfInfo data={{
                    "title": "public repositories",
                    "value": data.public_repos
                }}/>
            </div>
            <div className="media">
                <a href={`https://twitter.com/${data.twitter_username}`}><FontAwesomeIcon icon={faTwitter} />@{data.twitter_username}</a>
                
            </div>
          
        </div>
    )
}

export default Profile