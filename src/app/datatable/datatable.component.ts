import {Component, OnInit} from '@angular/core';
import {UserdataService} from "../service/userdata.service";
import {Person} from "../models/person";
import {Router} from "@angular/router";

@Component({
  selector: 'app-datatable',
  styleUrls: ['./datatable.component.css'],
  templateUrl: './datatable-component.html'
})

export class DatatableComponent implements OnInit {
  /** @internal */
   rows: Person[] = [];
   selected: any = [];
   selectedPerson: Person;

  constructor(private userService: UserdataService, private router: Router) {
    this.userService.fetchData();
    this.rows = this.userService.getData();
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log('Select Event', event.selected[0]);
    this.selectedPerson = UserdataService.createPerson(event.selected[0]);
    this.navigateToEdit();
  }

  navigateToEdit() {
    this.router.navigate(['/binding', this.selectedPerson.id]);
  }
}
