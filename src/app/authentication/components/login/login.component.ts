import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpParams } from '@angular/common/http';

import { Router } from "@angular/router";
import { AuthenticationService } from '@app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    this.authService.login(username, password).subscribe(data => {        
      this.router.navigate(['/user']);
      console.log("Successfully invoked:", data);
    }, error => {
        alert(error.error.error_description);
    }); 
   // this.authService.login(username, password).toPromise();
  } 
  
  logout() {
    sessionStorage.removeItem('token');    
  }
  
  ngOnInit() {   
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }



}