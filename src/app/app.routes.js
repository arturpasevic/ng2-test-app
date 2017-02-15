import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BindingComponent } from "./binding/binding.component";
import { DatatableComponent } from "./datatable/datatable.component";
var APP_ROUTES = [
    { path: '', component: AppComponent },
    { path: 'datatable', component: DatatableComponent },
    { path: 'binding', component: BindingComponent },
    { path: 'binding/:id', component: BindingComponent },
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map