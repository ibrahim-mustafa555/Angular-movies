import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from  '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor( private title:Title) {

    this.title.setTitle("Contacts");

    let saveForm = localStorage.getItem('contactsContainer')
  if (saveForm) {
    this.contactsContainer = JSON.parse(saveForm)
  }
  else this.contactsContainer = []

  }

contactsContainer:object[]=[];

  contactsForm = new FormGroup({
    clientName : new FormControl('',[Validators.minLength(2), Validators.required, Validators.maxLength(8)]),
    clientAge : new FormControl('',[Validators.min(10), Validators.max(80)]),
    clientMail : new FormControl('',[Validators.email]),
  })

  saveForm(){
   let user = {
     name:this.contactsForm.controls.clientName.value,
     age:this.contactsForm.controls.clientAge.value,
     mail:this.contactsForm.controls.clientMail.value,
   }
   this.contactsContainer.push(user);

   localStorage.setItem("contactsContainer", JSON.stringify(this.contactsContainer));
  }

 

  ngOnInit() {
  }

}
