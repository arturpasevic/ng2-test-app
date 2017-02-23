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
  rows: any = [];
  selected: any = [];
  private selectedPerson: Person;

  constructor(private userService: UserdataService, private router: Router) {
    this.userService.getData().then(persons => {
      console.log("Persons before:", JSON.stringify(persons.slice(0, 20)));
      this.rows = persons;
    });
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
