import axios from "axios";
import { HttpAdapter } from "./http.adapter";

export class AxiosAdapter extends HttpAdapter {
    constructor(option){
        super()
        this.AxiosInstance = axios.create({
            baseURL: option.baseURL,
            params: option.params,
        })
    }

    async get(url, option) {
        try {
            const res = await this.AxiosInstance.get(url, option)
            return res.data
        } catch (error) {
            throw new Error(`Error fetching get: ${url}`)
        }
    }
}

