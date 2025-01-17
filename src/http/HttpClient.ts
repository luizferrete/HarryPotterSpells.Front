import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface Config {
  baseURL: string;
}

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config: Config) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(endpoint, options);
    return response.data;
  }
}

export default HttpClient;
