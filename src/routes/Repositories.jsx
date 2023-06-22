import Repo from "../components/Repo"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { TailSpin } from "react-loader-spinner"
import getData from "../api/getData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons"
const Repositories = ({ info, title }) => {
    const { username } = useParams()
    const url = `https://api.github.com/users/${username}/${info}`
    console.log(url);
    const {
        status,
        data: data_repo,

    } = useQuery({
        queryKey: [info + username],
        queryFn: () => { return getData(url) }
    })
    if (status === "loading") {
        return (<div className="loading">
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
    console.log(status);
    if (status === "success") {
        return (
            <div className="repos">
                <div className="rep-title">
                    <h1>{`${username} ${title}`}</h1>
                </div>
                <div className="repos-wrapper">
                    {data_repo.map((repo, index) => (
                        <div key={index} className="repo-container">
                            <Repo data={repo} />
                        </div>
                    ))}

                </div>
            </div>
        )
    }

}


export default Repositories