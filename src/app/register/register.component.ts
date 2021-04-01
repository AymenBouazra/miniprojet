import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup =new FormGroup({
  fullName : new FormControl('',Validators.required),
  email : new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  passwordConfirmation: new FormControl('',[Validators.required,Validators.minLength(6)])
},
{
  validators: [this.passwordConfirmation]
})
submitted=false;
  constructor(private UserService:UserService) { }

  ngOnInit(): void {   
  }
  register(){
    this.submitted = true
    if (this.registerForm.invalid) {
      return;
    }
    this.UserService.registerFN(this.registerForm.value)
  }
  passwordConfirmation(confirm: AbstractControl) : { [key: string]: any } | null{
    const password= confirm.get('password')
    const passwordConfirmation= confirm.get('passwordConfirmation')
    return password && passwordConfirmation && password.value!==passwordConfirmation.value ? {'mismatch': true} : null
  }

}
