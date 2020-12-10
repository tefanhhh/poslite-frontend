import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

type ICredential = {
  username: string;
  password: string;
  rememberMe: boolean;
};

type IToken = {
  id_token: string;
};

export default class LoginService {
  private static resourceUrl = `${process.env.SERVER_API_URL}/api/authenticate`;

  static login(credentials: ICredential): Promise<AxiosResponse<IToken>> {
    const config: AxiosRequestConfig = {
      url: this.resourceUrl,
      method: 'POST',
      responseType: 'json',
    };

    return axios.post(this.resourceUrl, credentials, config);
  }
}
