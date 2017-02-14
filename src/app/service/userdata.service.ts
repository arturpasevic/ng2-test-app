import {Injectable, OnInit} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx'
import {Person} from "../models/person";
import {Address} from "../models/address";

@Injectable()
export class UserdataService {
  private persons: Person[] = [];

  // private DATA_URL: string = 'http://beta.json-generator.com/api/json/get/EJfI2IrdM';
  // private DATA_URL: string = 'https://raw.githubusercontent.com/swimlane/ngx-datatable/master/assets/data/100k.json';

  private DATA_URL: string = 'https://ng2-test-13107.firebaseio.com/persons.json';

  constructor(private http: Http) {
  }

  getData(): Promise<Person[]> {
    return Promise.resolve(() => {
      if (this.persons.length == 0) {
        this.fetchData().then(p => {
          this.persons = p;
          return this.persons;
        })
      }
    });
  }

  private  fetchData(): Promise<Person[]> {
    return this.http.get(this.DATA_URL)
      .toPromise()
      .then((response: Response) => response.json() as Person[])
      .catch(this.handleError);
  }

  getPerson(id: number): Person {
    return this.persons[id];
  }

  static  createPerson(object) {
    let addr = new Address(object.address.state, object.address.city);
    return new Person(object.id, object.name, object.gender, object.age, addr);
  }

  private  handleError(error: any): Promise < any > {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  storeData(persons: Person[]) {
    const body = JSON.stringify(persons.slice(0, 100));
    // const body = JSON.stringify(persons);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.DATA_URL, body, {headers: headers});
  }

  updatePerson(person: Person) {
    var oldPerson = this.persons.find(x => x.id === person.id);
    Object.assign(oldPerson, person);
  }

}
