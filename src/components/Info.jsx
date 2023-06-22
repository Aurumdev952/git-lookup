import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faCodeFork } from "@fortawesome/free-solid-svg-icons"
import { useQuery } from "@tanstack/react-query"
import getData from "../api/getData"
import { TailSpin } from "react-loader-spinner"

const Info = ({ data }) => {
    const {
        status,
        error,
        data: lang,

    } = useQuery({
        queryKey: [`${data.language}${data.name}`],
        queryFn: () => {return getData(`https://api.github.com/repos/${data.owner.login}/${data.name}/languages`)}
    })
    if (status === "loading") {
        return (<div className="loading l">
            <TailSpin
                height="30"
                width="30"
                color="#666e77"
                ariaLabel="tail-spin-loading"
                radius="2"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
/>
        </div>)
    }
    if (status === "error") {
        console.log(error);
        return (<div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}><p>Error!</p></div>)
    }
    return (
        <div className="info-comp">
           
                <div className="lang">
                    {
                        Object.keys(lang).map(l => (<p>{l}</p>))
                    }
                </div>
                <div className="other-info flex">
                    <p><FontAwesomeIcon icon={faStar}/> {data.forks}</p>
                    <p><FontAwesomeIcon icon={faCodeFork}/> {data.stargazers_count}</p>
                </div>
         
        </div>
    )
}

export default Info