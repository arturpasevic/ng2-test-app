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
import { UserdataService } from "../service/userdata.service";
import { Router } from "@angular/router";
export var DatatableComponent = (function () {
    function DatatableComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        /** @internal */
        this.rows = [];
        this.selected = [];
        this.userService.fetchData();
        this.rows = this.userService.getData();
    }
    DatatableComponent.prototype.ngOnInit = function () {
    };
    DatatableComponent.prototype.onSelect = function (event) {
        console.log('Select Event', event.selected[0]);
        this.selectedPerson = UserdataService.createPerson(event.selected[0]);
        this.navigateToEdit();
    };
    DatatableComponent.prototype.navigateToEdit = function () {
        this.router.navigate(['/binding', this.selectedPerson.id]);
    };
    DatatableComponent = __decorate([
        Component({
            selector: 'app-datatable',
            styleUrls: ['./datatable.component.css'],
            templateUrl: './datatable-component.html'
        }), 
        __metadata('design:paramtypes', [UserdataService, Router])
    ], DatatableComponent);
    return DatatableComponent;
}());
//# sourceMappingURL=datatable.component.js.map