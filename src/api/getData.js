import axios from "axios"



const TOKEN = import.meta.env.VITE_TOKEN
console.log(TOKEN);
const config = {
    headers: {
        "Authorization": `Bearer ${TOKEN}`
    }
}

export default function getData(url) {
    return axios
        .get(url, config)
        .then(res => res.data)
}    


