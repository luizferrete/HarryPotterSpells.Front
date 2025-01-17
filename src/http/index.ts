import HttpClient, {Config} from "./HttpClient";

const config: Config = {
    baseURL: 'https://localhost:44386/api/v1.0'
}

const http = new HttpClient(config);

export default http;