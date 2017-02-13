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
  private rows: Person[] = [];
  private selected = [];
  private selectedPerson: Person;

  constructor(private userService: UserdataService, private router: Router) {
  }

  ngOnInit(): void {
    this.rows = this.userService.getData();
  }

  onSelect(event) {
    console.log('Select Event', event.selected[0]);
    this.selectedPerson = UserdataService.createPerson(event.selected[0]);
    this.navigateToEdit();
  }

  navigateToEdit() {
    this.router.navigate(['/binding', this.selectedPerson.id]);
  }
}
