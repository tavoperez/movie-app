import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter ({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '11d4d199e36b7a7dd3cb443fc0e81709',
        language: 'es'
    }
})