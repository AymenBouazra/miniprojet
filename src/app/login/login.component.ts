import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  constructor(private route:ActivatedRoute, private UserService:UserService) { }

  ngOnInit(): void {
  }
login(){
this.submitted=true;
if(this.formLogin.invalid){
  return;
}
this.UserService.loginFN(this.formLogin.value)
}

}
