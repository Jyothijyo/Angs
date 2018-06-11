import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from "@angular/forms";
import { Http } from "@angular/http";
import { LoginService } from '../../providers/login/login.service'

@Component({
  selector: 'awo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.initializeForm();
  }

  submit(loginForm) {
    let data = loginForm._value;
    this.loginService.login(data)
    console.log(loginForm,loginForm._value,"login")

  }

  initializeForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",[Validators.required]],
      password: ["",[Validators.required]]
    });
  }
}
