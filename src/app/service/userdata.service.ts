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
    this.fetchData();
  }

  getData(): Person[] {
    return this.persons;
  }

  getPerson(id: number): Person {
    return this.persons[id];
  }

  static createPerson(object: any) {
    let addr = new Address(object.address.state, object.address.city);
    return new Person(object.id, object.name, object.gender, object.age, addr);
  }

  fetchData() {
    this.http.get(this.DATA_URL)
      .map((response: Response) => response.json())
      .subscribe(
        (data: Person[]) => {
          this.persons = data;
        }
      );
  }

  storeData(persons: Person[]) {
    const url = 'https://ng2-test-13107.firebaseio.com/persons.json';
    const body = JSON.stringify(persons.slice(0, 100));
    // const body = JSON.stringify(persons);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(url, body, {headers: headers});
  }

  updatePerson(person: Person) {
    var oldPerson = this.persons.find(x => x.id === person.id);
    Object.assign(oldPerson, person);
  }

}
