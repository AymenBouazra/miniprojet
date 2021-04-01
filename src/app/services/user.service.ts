import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router) { }
  registerFN(registerForm:any){
    var users = JSON.parse(localStorage.getItem('Registered') || '[]')
    users.push(registerForm)
    localStorage.setItem('Registered',JSON.stringify(users))
  }
  loginFN(formLogin:any){
    let user=JSON.parse(localStorage.getItem('Registered') || '[]');
    let connect=user.find((x:any)=>x.email==formLogin.email && x.password==formLogin.password)
    if(connect==undefined){
      alert('Please verify your email and password and try again.')
    }else{
      localStorage.setItem('connected',JSON.stringify(connect))
    this.router.navigate(['/dashboard'])
  }
  }
}
