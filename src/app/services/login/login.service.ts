import axios from 'axios';

export default class LoginService {
  private static resourceUrl = 'http://117.53.44.244:8080/api/authenticate';

  static login(credentials): Promise<any> {
    return axios.post(this.resourceUrl, credentials, {
      responseType: 'json',
    });
  }
}
