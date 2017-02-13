import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {UserdataService} from "../service/userdata.service";
import {Person} from "../models/person";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";
import {Address} from "../models/address";

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  private subscription: Subscription;
  private personIndex: number;
  private person: Person;

  myForm: FormGroup;

  constructor(private route: ActivatedRoute, private userService: UserdataService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      name: '',
      gender: '',
      address: this.fb.group(new Address('', '')),
      age: '',
    });
  }

  onSubmit() {
    this.person = this.prepareUpdatedPerson();
    this.userService.updatePerson(this.person);
    this.userService.storeData(this.userService.getData());
  }

  private prepareUpdatedPerson() {
    const formModel = this.myForm.value;
    const addressDeepCopy: Address = formModel.address.map(
      (address: Address) => Object.assign({}, address)
    );

    return {
      id: this.person.id,
      name: formModel.name as string,
      gender: formModel.gender as string,
      age: formModel.age as number,
      address: addressDeepCopy,
    };
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.personIndex = params['id'];
        this.person = this.userService.getPerson(this.personIndex);
        if (this.personIndex >= 0) {
          this.populateForm();
        }
      }
    )
  }

  private populateForm() {
    this.myForm.setValue({
      address: this.person.address || new Address('', ''),
      name: this.person.name || '',
      age: this.person.age || '',
      gender: this.person.gender || '',
    });
  }
}
