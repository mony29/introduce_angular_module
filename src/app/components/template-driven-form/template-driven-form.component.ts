import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

type Gender = 'Male' | 'Female'

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  @ViewChild('form') templateDrivenForm?: NgForm;

  username: string | undefined;
  email: string | undefined;
  gender: string | undefined;
  submitted = false;

  user = {
    username: '',
    email: '',
    gender: ''
  };


  // get and reset the data in template driven form
  onSubmitForm() {
    this.submitted = true; console.log(this.submitted)
    this.user.username = this.templateDrivenForm?.value.username;
    console.log(this.user.username)

    this.user.email = this.templateDrivenForm?.value.email;
    console.log(this.user.email);

    this.user.gender = this.templateDrivenForm?.value.gender;
    console.log(this.user.gender)
  }

  // set default values
  fillValues() {
    this.templateDrivenForm?.form.setValue({
      username: 'Mony',
      email: 'email@gmail.com',
      gender: 'Male'
    })
  }

  // update gender 
  updateGender() {
    this.templateDrivenForm?.form.patchValue({
      // email: 'update-email@gmail.com',
      gender : 'Female',
      // username : 'Hello'
    });
  }
}