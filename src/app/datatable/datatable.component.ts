import {Component, OnInit} from '@angular/core';
import {UserdataService} from "../service/userdata.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-datatable',
  styleUrls: ['./datatable.component.css'],
  providers: [UserdataService],
  template: `
  <div>
    <ngx-datatable class="material" [rows]="rows">
        <ngx-datatable-column name="Name" [width]="300" prop="name.first"></ngx-datatable-column>
        <ngx-datatable-column name="Surname" [width]="300" prop="name.last"></ngx-datatable-column>
        <ngx-datatable-column name="Age" [width]="300" prop="age"></ngx-datatable-column>
        <ngx-datatable-column name="Photo" [width]="300" prop="picture">
                    <template ngx-datatable-cell-template let-row="row" let-value="value">
                      <img src="{{value}}" alt="{{value}}">
                    </template>
        </ngx-datatable-column>
    </ngx-datatable>
  </div>
  `
})

export class DatatableComponent implements OnInit {
  private rows = [];

  constructor(private userService: UserdataService) {
  }

  ngOnInit(): void {
    this.userService.getData().subscribe(
      (data: any) => {
        this.rows = data;
        console.log(data);
      }
    );
  }
}
