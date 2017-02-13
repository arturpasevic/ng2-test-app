import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header-component/header-component.component';
import {LeftMenuComponent} from './left-menu-component/left-menu-component.component';
import {routing} from "./app.routes";
import {DatatableComponent} from './datatable/datatable.component';
import {BindingComponent} from './binding/binding.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {UserdataService} from "./service/userdata.service";

@NgModule({
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
})
export class AppModule {
}
