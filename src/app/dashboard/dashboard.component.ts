import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
listContact:any;
  constructor(private contact:ContactService) { }

  ngOnInit(): void {
    this.contact.getAllContacts().subscribe((response)=>{
      this.listContact=response
    },(error)=>{
      console.log(error);
      
    })
  }
  delete(id:number){
    this.contact.deleteContactById(id).subscribe((response:any)=>{this.ngOnInit()},(error)=>{})
    
  }
  
}
