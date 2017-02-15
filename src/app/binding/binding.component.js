var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserdataService } from "../service/userdata.service";
import { FormBuilder } from "@angular/forms";
import { Address } from "../models/address";
export var BindingComponent = (function () {
    function BindingComponent(route, userService, fb) {
        this.route = route;
        this.userService = userService;
        this.fb = fb;
        this.createForm();
    }
    BindingComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            name: '',
            gender: '',
            address: this.fb.group(new Address('', '')),
            age: '',
        });
    };
    BindingComponent.prototype.onSubmit = function () {
        this.person = this.prepareUpdatedPerson();
        this.userService.updatePerson(this.person);
        this.userService.storeData(this.userService.getData()).subscribe(function (data) { return console.log("storeData: ", data); }, function (error) { return console.log("storeData error: ", error); });
    };
    BindingComponent.prototype.prepareUpdatedPerson = function () {
        var formModel = this.myForm.value;
        var addressDeepCopy = {};
        Object.assign(addressDeepCopy, formModel.address);
        return {
            id: this.person.id,
            name: formModel.name,
            gender: formModel.gender,
            age: formModel.age,
            address: addressDeepCopy,
        };
    };
    BindingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.personIndex = params['id'];
            _this.person = _this.userService.getPerson(_this.personIndex);
            if (_this.personIndex >= 0) {
                _this.populateForm();
            }
        });
    };
    BindingComponent.prototype.populateForm = function () {
        this.myForm.setValue({
            address: this.person.address || new Address('', ''),
            name: this.person.name || '',
            age: this.person.age || '',
            gender: this.person.gender || '',
        });
    };
    BindingComponent = __decorate([
        Component({
            selector: 'app-binding',
            templateUrl: './binding.component.html',
            styleUrls: ['./binding.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, UserdataService, FormBuilder])
    ], BindingComponent);
    return BindingComponent;
}());
//# sourceMappingURL=binding.component.js.map