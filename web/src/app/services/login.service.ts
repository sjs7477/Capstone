import {Injectable, Input} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Input() username:string;

  constructor() { }

  setUserName(username) {
    this.username = username;
  }

  getUsername(): String {
    return this.username;
  }
}
