import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  // regForm: FormGroup;
  regForm: any;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    // this.regForm = new FormGroup({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    //   mobileno: new FormControl(),
    // });
    // this.regForm = this._fb.group({
    //   id: new FormControl(),
    //   fname: new FormControl(),
    //   lname: new FormControl(),
    //   email: new FormControl(),
    //   mobileno: new FormControl(),
    // });
    // this.regForm = this._fb.group({
    //   id: new FormControl(''),
    //   fname: new FormControl('Dheeraj'),
    //   lname: new FormControl('Jaiswal'),
    //   email: new FormControl(''),
    //   mobileno: new FormControl(''),
    // });
    // this.regForm = this._fb.group({
    //   id: ['0'],
    //   fname: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(3),
    //       Validators.maxLength(10),
    //     ],
    //   ],
    //   lname: ['', [Validators.required, Validators.maxLength(9)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   mobileno: ['', Validators.required],
    // });

    // // valueChanges Example
    // this.regForm.get('fname').valueChanges.subscribe((firstname) => {
    //   console.log('Fname Changed : ' + firstname);
    // });
    // this.regForm.valueChanges.subscribe((data) => {
    //   console.log('fnane changed :' + data.fname);
    //   console.log('lnane changed :' + data.lname);
    // });

    // // statusChanges Example
    // this.regForm.get('fname').statusChanges.subscribe((firstname) => {
    //   console.log('fname Status' + firstname);
    // });

    // this.regForm.statusChanges.subscribe((data) => {
    //   console.log('Form Status changed :' + data);
    // });

    // // FormArray Example

    //  let arr = new FormArray([
    //    new FormControl(),
    //    new FormControl(),
    //  ]);

    // let arr = new FormArray([
    //   new FormControl('Dheeraj'),
    //   new FormControl('Ranjan'),
    // ]);
    // // arr.reset();
    // arr.reset(['React', 'Angular']);
    // console.log(arr.value);
    // console.log(arr.status);

    this.regForm = this._fb.group({
      id: ['0'],
      fname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      lname: ['', [Validators.required, Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.email]],
      mobilenos: new FormArray([new FormControl()]),
    });
  }

  deleterow(index: number) {
    this.regForm.get('mobilenos').removeAt(index);
  }
  addMore() {
    this.regForm.get('mobilenos').push(new FormControl());
  }
  Register() {
    console.log(this.regForm.value);
    console.log(this.regForm.valid);
    // GetValue
    // console.log(this.regForm.get('fname').value);
    // console.log(this.regForm.get('lname').value);
    // console.log(this.regForm.get('email').value);
    // console.log(this.regForm.get('mobileno').value);
  }
  reset() {
    this.regForm.reset({
      fname: this.regForm.get('fname').value,
      lname: this.regForm.get('lname').value,
      email: this.regForm.get('email').value,
      // mobileno: this.regForm.get('mobileno').value,
      mobileno: '8976543456',
    });
  }

  filldata() {
    ////setValue Example

    // this.regForm.setValue({
    //   id: 101,
    //   fname: 'Angular',
    //   lname: '12',
    //   email: 'angular@12.com',
    //   mobileno: '2345678901',
    // });

    this.regForm.patchValue({
      ////patchValue Example

      id: 101,
      //   fname: 'Angular',
      lname: '12',
      email: 'angular@12.com',
      //   mobileno: '2345678901',
    });
  }
}
