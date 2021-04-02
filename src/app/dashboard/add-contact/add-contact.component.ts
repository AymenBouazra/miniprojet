import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  submitted = false;
  addContactForm: FormGroup = new FormGroup({
    contactName: new FormControl('', Validators.required),
    contactEmail: new FormControl('', [Validators.required, Validators.email]),
    contactNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });
  constructor(private contact: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  addContact() {
    this.submitted = true
    if (this.addContactForm.invalid) {
      return;
    }
    this.contact.addContact(this.addContactForm.value).subscribe((response: any) => {
      this.router.navigate(['/dashboard'])
    },
      (error) => {
        console.log(error);
      })

  }
}
