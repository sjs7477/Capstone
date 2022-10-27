import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from "rxjs";
/**
 *
 * @param form
 */

function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

/**
 * If the data is valid return null else return an object
 */
// function symbolValidator(control) { //control = registerForm.get('password')
//   if(control.hasError('required')) return null;
//   if(control.hasError('minlength')) return null;
//
//   if(control.value.indexOf('@') > -1) {
//     return null
//   } else {
//     return { symbol: true }
//   }
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  usersUrl: string;
  showSuccessMessage =false;
  showErrorMessage = false;
  showRegisteredMessage = false;
  constructor(private builder: FormBuilder, private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/register?';
  }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  register() {
    this.http.get(this.usersUrl+"username="+this.registerForm.value.username+"&password="+this.registerForm.value.password)
      .subscribe(data => {
        console.log(data);
        // @ts-ignore
        if(this.registerForm.value.username == data.user){
          this.showRegisteredMessage =true;
          this.showErrorMessage =false
          this.showSuccessMessage = false;
        }
        else{
          this.showSuccessMessage = true;
          this.showRegisteredMessage =false;
          this.showErrorMessage =false
        }
      }, err=>this.showErrorMessage =true);
  }

}
