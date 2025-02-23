import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
    public globalService: GlobalService){}

  adminLogin(){
    this.globalService.setGlobalVariable("admin")
    this.login()
  }

  userLogin(){
    this.globalService.setGlobalVariable("user")
    this.login()
  }

  login() {
    this.router.navigate(["loginUser"]);
  }
}
