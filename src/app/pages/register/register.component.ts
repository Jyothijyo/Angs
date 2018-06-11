import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { PasswordValidation } from './password-validation';
import 'rxjs';
import { Observable } from 'rxjs';
// import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'awo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  private url: any;
  constructor(private formBuilder: FormBuilder) { }

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      roleSelected:[""],
      name: ["", [Validators.required]],
      opt: ["", [Validators.required]],
      email: ["",
        [Validators.required],
        [Validators.pattern(EMAIL_REGEX)]
      ],
      phonenumber:["",[Validators.required,Validators.pattern('^[789]\d{9}$')]],
     // phonenumber:["",[Validators.required,Validators.pattern('^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$')]],
      password: ["", [Validators.required], [Validators.pattern('^[a-zA-Z0-9]*$')]],
      confirmPassword: ["", [Validators.required]]
    }, {
        validator: PasswordValidation.MatchPassword // your validation method
      }

    );
    this.filteredOptions =  this.registerForm.get('opt').valueChanges
    .startWith(null)
    .map(val => val ? this.filter(val) : this.blodGroupOptions.slice());
  }
  uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  filter(val: string): string[] {
    return this.blodGroupOptions.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
  blodGroupOptions = [
    'A+',
    'A-',
    'A1+',
    'A1-',
    'A1B+',
    'A1B-',
    'A2+',
    'A2-',
    'A2B+',
    'A2B-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'Bombay Blood Group',
    'INRA',
    'O+',
    'O-'
  ];
  Roles = [
    {name:'Admin',code:'1'},
    {name:'User',code:'2'},
    {name:'Hospital',code:'3'},
    {name:'Blood bank',code:'4'}
];
  submit(reg) {
    console.log(reg._value, "register")
  }

}



// ^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$
