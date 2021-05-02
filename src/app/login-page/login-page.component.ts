import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import {HostListener} from '@angular/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  ngOnInit() {
    this.service.clearUserName();
  }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) { 
  //   console.log(event.key);
  //   if(event.key == 'F8')
  //   {
  //     alert("clicked");
  //   }
    
  // }

   loginName = "";
  loginCheckVal = false;

  constructor(private service:MainService,private route:Router)
  {

  }

  loginCheck()
  {
    if(this.loginName == "" || this.loginName == null)
    {
      this.loginCheckVal = true;
      return;
    }
    this.service.setUserName(this.loginName);
    this.loginCheckVal = false;
    this.route.navigate(['/home']);
  }


}
