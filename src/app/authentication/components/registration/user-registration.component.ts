import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { User } from '@app/authentication/model/user.model';
import { UserRegistrationService } from '@app/authentication/service/user.registration.service';
import { Ailment } from '@app/authentication/model/ailment';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.sass']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  invalidForm: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private userRegistrationService: UserRegistrationService) { }

  onSubmit() {
   
    if (this.registrationForm.invalid) {
        return;
    }
   
    let user = new User();

    user.name = this.registrationForm.controls.name.value;
    user.username = this.registrationForm.controls.email.value;
    user.mobile = this.registrationForm.controls.mobile.value;
    user.email = this.registrationForm.controls.email.value;
    const ailment = new Ailment();
    ailment.code = this.registrationForm.controls.ailments.value;
    ailment.description = this.registrationForm.controls.ailments.value;
    user.ailments.push(ailment);
    user.password = this.registrationForm.controls.password.value;
    user.confirmPassword = this.registrationForm.controls.confirmPassword.value;
    user.age = this.registrationForm.controls.age.value;
    console.log(user);

    this.userRegistrationService.register(user).subscribe(data => console.log(data),
    error => console.log('error===',error), 
    () => console.log("Hello"));
  
  }

  ngOnInit() {
      this.setForm();
  }


  setForm() {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],    
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      age: ['', Validators.required],
      ailments: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]   
    });
  }
}
