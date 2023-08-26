import axios from "axios";
const BASE_URL = "http://https://api.themoviedb.org/3"
const apiToken = import.meta.env.API_KEY;
const headers = {
    Authorization: 'bearer '+ import.meta.env.TOKEN_KEY,
}

export const fetchMoviesData = async (endPoint,params) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/${endPoint}/${apiToken}`,{
            headers,
            params,
        })
        console.log(`Fetched movies: ${JSON.stringify(data)}`);
        return data;
    } catch (error) {
        console.log(`Error fetching movies ${JSON.stringify(error)}`)
    }
}