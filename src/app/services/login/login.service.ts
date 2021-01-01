import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export default class LoginService {
  private static resourceUrl = `${process.env.SERVER_API_URL}/api/authenticate`;

  static login(credentials: any): Promise<AxiosResponse<any>> {
    const config: AxiosRequestConfig = {
      url: this.resourceUrl,
      method: 'POST',
      responseType: 'json',
    };

    return axios.post(this.resourceUrl, credentials, config);
  }
}
