var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Person } from "../models/person";
import { Address } from "../models/address";
export var UserdataService = (function () {
    function UserdataService(http) {
        this.http = http;
        this.persons = [];
        // private DATA_URL: string = 'http://beta.json-generator.com/api/json/get/EJfI2IrdM';
        // private DATA_URL: string = 'https://raw.githubusercontent.com/swimlane/ngx-datatable/master/assets/data/100k.json';
        this.DATA_URL = 'https://ng2-test-13107.firebaseio.com/persons.json';
        this.fetchData();
    }
    UserdataService.prototype.getData = function () {
        return this.persons;
    };
    UserdataService.prototype.getPerson = function (id) {
        return this.persons[id];
    };
    UserdataService.createPerson = function (object) {
        var addr = new Address(object.address.state, object.address.city);
        return new Person(object.id, object.name, object.gender, object.age, addr);
    };
    UserdataService.prototype.fetchData = function () {
        var _this = this;
        this.http.get(this.DATA_URL)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.persons = data;
        });
    };
    UserdataService.prototype.storeData = function (persons) {
        var url = 'https://ng2-test-13107.firebaseio.com/persons.json';
        var body = JSON.stringify(persons.slice(0, 100));
        // const body = JSON.stringify(persons);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put(url, body, { headers: headers });
    };
    UserdataService.prototype.updatePerson = function (person) {
        var oldPerson = this.persons.find(function (x) { return x.id === person.id; });
        Object.assign(oldPerson, person);
    };
    UserdataService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], UserdataService);
    return UserdataService;
}());
//# sourceMappingURL=userdata.service.js.map