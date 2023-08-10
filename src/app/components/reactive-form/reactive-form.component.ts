import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormArray, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // reactive form
  reactiveForm!: FormGroup;
  restrictName = 'monykeo'

  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        username: new FormControl(null,
          [Validators.required,
          Validators.minLength(6),
          this.isRestrictedName.bind(this) // .bind(this) check self validation
          ]),
        emailAddress: new FormGroup({ // use FormGroup to group FormControls
          email: new FormControl(null, 
            [Validators.email, 
              Validators.required
            ]),
          address: new FormControl(null, Validators.required),
        }),
        hobbies : new FormArray([])
      })
  }

  // add dynamic form
  addHobby() {
    const control = new FormControl(null, Validators.required); // change to formgroup when dynamic reactiveForm
    console.log('Console : ', control);
    (<FormArray>this.reactiveForm.get('hobbies'))?.push(control);  // to use push() method we need to wrap <FormArray>; we push control to hobbies array
    console.log('Reactive form : ', this.reactiveForm);
  }
 
  // get hobby data
  get hobbiesControls(){
    return (<FormArray>this.reactiveForm?.get('hobbies'))?.controls;
  }

  // remove hobby
  removeHobby(index : number){
    const control = <FormArray>this.reactiveForm.controls['hobbies'];
  // console.log('Remove : ', this.reactiveForm.controls['username']);
    control.removeAt(index);
  }

  handleSubmit() {
    // this.handleSubmit
    console.log(this.reactiveForm.value)
  }

  // AbstractControl is the main class for controlling the behavior and properties of
  // FormGroup, FormControl and FormArray
  isRestrictedName(control: AbstractControl): ValidationErrors | null {
    if (this.restrictName.includes(control.value)) {
      return { nameIsRestricted: true }
    }
    return null;
  }

  // set default values in reactive form
  setDefaultValues(){
    this.reactiveForm.setValue({
      username : 'New-username',
      emailAddress : {
        email : 'email@gmail.com',
        address : 'Phnom-penh'
      },
      hobbies : []
    })
  }

  // update username
  updateUsername(){
    this.reactiveForm.patchValue({
      username : 'Updated-Name'
    })
  }
}
