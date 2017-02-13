import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {BindingComponent} from "./binding/binding.component";
import {DatatableComponent} from "./datatable/datatable.component";

const APP_ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: 'datatable', component: DatatableComponent},
  {path: 'binding', component: BindingComponent},
  {path: 'binding/:id', component: BindingComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
