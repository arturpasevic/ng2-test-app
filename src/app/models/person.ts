import {Address} from "./address";
export class Person {
  constructor(public id: number, public name: string, public gender: string, public age: number, public address: Address) {
  }
}
