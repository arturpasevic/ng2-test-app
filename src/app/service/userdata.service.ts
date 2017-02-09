import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'

@Injectable()
export class UserdataService {
  private DATA_URL: string = 'http://beta.json-generator.com/api/json/get/EJfI2IrdM';

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get(this.DATA_URL).map((response: Response) => response.json());
  }
}
