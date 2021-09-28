import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this._fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: this._fb.group({
        housenumber: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required],
      }),
    });
  }
  get fNameFc() {
    return this.userForm.get('fname');
  }
  get lNameFc() {
    return this.userForm.get('lname');
  }
  get addressFc() {
    return this.userForm.get('address');
  }

  onFormSubmit() {
    console.log(this.userForm.value);
    console.log(this.userForm.valid);

    let addressFull = this.addressFc; // .userForm.get('address');
    console.log(addressFull.value);
    console.log(addressFull.valid);
  }
}
