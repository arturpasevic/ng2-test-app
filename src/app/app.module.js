var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-component/header-component.component';
import { LeftMenuComponent } from './left-menu-component/left-menu-component.component';
import { routing } from "./app.routes";
import { DatatableComponent } from './datatable/datatable.component';
import { BindingComponent } from './binding/binding.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserdataService } from "./service/userdata.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HeaderComponent,
                LeftMenuComponent,
                DatatableComponent,
                BindingComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                routing,
                NgxDatatableModule,
                ReactiveFormsModule
            ],
            providers: [UserdataService],
            bootstrap: [AppComponent]
        }),
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map
