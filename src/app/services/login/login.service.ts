import axios, { AxiosResponse } from 'axios';

type ICredential = {
  username: string;
  password: string;
  rememberMe: boolean;
};

type ILoginRes = {
  id_token: string;
};

export default class LoginService {
  private static resourceUrl = 'http://117.53.44.244:8080/api/authenticate';

  static login(credentials: ICredential): Promise<AxiosResponse<ILoginRes>> {
    return axios.post(this.resourceUrl, credentials, {
      responseType: 'json',
    });
  }
}
