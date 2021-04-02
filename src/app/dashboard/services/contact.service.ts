import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 
  constructor(private http:HttpClient) { }
  // Add new product (used in add-contact component)
  addContact(contactData:any)
  {
   return this.http.post("http://localhost:3000/contacts",contactData)
  }

  // Get all products (used in dashboard component)
  getAllContacts()
  {
   return this.http.get("http://localhost:3000/contacts")
  }

  // Get product by id (used in update-contact component)
  getContactById(id:number){
    return this.http.get("http://localhost:3000/contacts/"+id)
  }
  

  // update product by id (used in update-contact component)
  updateContactDataById(updateContactData:any,id:number)
  {
    return this.http.put("http://localhost:3000/contacts/"+id,updateContactData)
  }

  // Delete product by id (used in dashboard component)
  deleteContactById(id:number)
  {
    return this.http.delete("http://localhost:3000/contacts/"+id)
  }
}
