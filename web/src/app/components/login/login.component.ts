import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {}
  usersUrl: string;
  showErrorMessage = false;
  userName: string;
  constructor(private router: Router,private http: HttpClient,private loginService:LoginService) {
    this.usersUrl = 'http://localhost:8080/login?username=';
  }

  ngOnInit() {
  }

  login() {
    console.log(this.model.username);
    this.http.get(this.usersUrl+this.model.username).subscribe(data =>{
      // @ts-ignore
      if(this.model.password ==data.password){
        console.log("Inside login ts");
        this.router.navigateByUrl("/shop");
        //this.loginService.setUserName(this.model.username);
        localStorage.setItem('currentUser', this.model.username);
      }
      else{
        this.showErrorMessage= true;
      }
    },
      (error) => {
        this.showErrorMessage= true;
      }
      );
  }

}
