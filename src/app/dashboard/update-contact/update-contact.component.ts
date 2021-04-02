import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  submitted=false;
  updateContactForm:FormGroup =new FormGroup({
    contactName:new FormControl('',Validators.required),
    contactEmail:new FormControl('',[Validators.required,Validators.email]),
    contactNumber:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  constructor(private contact:ContactService, private route:ActivatedRoute, private router:Router) { }
 index:any;
  ngOnInit(): void {
    
    this.index=this.route.snapshot.params['id']; 
    this.showContact()
  }
  showContact(){
    this.contact.getContactById(this.index).subscribe((response:any)=>{this.updateContactForm?.patchValue(response)},(error)=>{})
  }
updateContact(){
  this.submitted=true;
  this.contact.updateContactDataById(this.updateContactForm.value,this.index).subscribe((response)=>{
    this.router.navigate(['/dashboard'])
  },
  (error)=>{console.log(error);
  })
}
}
