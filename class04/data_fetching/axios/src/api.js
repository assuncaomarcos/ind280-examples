import axios from "axios";

class API {
    constructor(url) {
        this.instance = axios.create({
            baseURL: 'https://fakerapi.it/api/v2/',
        });

        this.instance.interceptors.request.use((config) => {
            console.log(`Request: ${config.method?.toLocaleLowerCase()} ${config.url}`);
            return config;
        });

        this.instance.interceptors.response.use((response) => {
            console.log(`Response: ${JSON.stringify(response.data)}`);
            return response.data;
        });
    }

    getUsers(numUsers, seed) {
        return this.instance.get(`persons?_locale=fr_FR&_quantity=${numUsers}&_seed=${seed}`);
    }
}

export default new API();