import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlContainer, FormControl, NgForm } from '@angular/forms';
import { PersonCenteredPlan } from 'src/app/core/models/personcenteredplan.model';
import { ReferenceType } from 'src/app/core/models/referencetype.model';
import { ReferenceTypeService } from 'src/app/core/service/referencetype.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'main-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm}]
})
export class PersonalDataComponent implements OnInit {
  // @Input() data: any = { value: '' };
  @Input() data: PersonCenteredPlan = new PersonCenteredPlan();
  @Output() formSubmitpersondata = new EventEmitter<any>();
  @Input() upsertForm!: NgForm;
  
  
  //@ViewChild('personalDataForm', { static: true }) personalDataForm: NgForm; // add this line

  
 
  constructor(private formBuilder: FormBuilder

  ) {   
  }
  ngOnInit(): void {
    console.log(this.data, "dataaa")
    

  }
  name: string='';
  formChanged = false;
  personalDataForm!: NgForm;
  isEmailValid: boolean = true;
  isMobileValid: boolean =true;
  isalternatemobilenumber:boolean =true;

  
  
  
  submitForm() {
    // Do something with the form data
    this.formChanged = false;
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.formChanged) {
      $event.returnValue = true;
    }
  }
  checksendmessagemobilenumber() {
    this.data.personaldata.sendmessagemobilenumber = !this.data.personaldata.sendmessagemobilenumber;
    //this.data.personaldata.sendmessagealternatenumber = !this.data.personaldata.sendmessagealternatenumber;
  }
  checksendmessagealternatenumber() {
    //this.data.personaldata.sendmessagemobilenumber = !this.data.personaldata.sendmessagemobilenumber;
    this.data.personaldata.sendmessagealternatenumber = !this.data.personaldata.sendmessagealternatenumber;
  }

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(this.data.personaldata.email);
    this.isEmailValid = isValid;
}
validateMobileNumber() {
  const mobileRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const isValid = mobileRegex.test(this.data.personaldata.mobilenumber);
  this.data.personaldata.mobilenumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  this.isMobileValid = isValid;
}
validatealternatemobilenumber(){
  const mobileRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const isValid = mobileRegex.test(this.data.personaldata.alternatemobilenumber.toString());
  this.isalternatemobilenumber = isValid;
}

phoneNumber: string='';
alternatenumber:string='';

formatPhoneNumber(event: any) {
  // Get the current input value and remove all non-digit characters
  this.data.personaldata.mobilenumber = event.target.value.replace(/\D/g, '');
  const phoneNumberGroups = this.data.personaldata.mobilenumber.match(/(\d{1,3})?(\d{1,3})?(\d{1,4})?/);
  if(phoneNumberGroups!= null){
  this.data.personaldata.mobilenumber = phoneNumberGroups[1];
  if (phoneNumberGroups[2]) {
    this.data.personaldata.mobilenumber += '-' + phoneNumberGroups[2];
  }
  if (phoneNumberGroups[3] != null) {
    this.data.personaldata.mobilenumber += '-' + phoneNumberGroups[3];
  }
  event.target.value = this.data.personaldata.mobilenumber;
  //this.phoneNumber = this.data.personaldata.mobilenumber;
}
}

formatalternatePhoneNumber(event: any) {
  // Get the current input value and remove all non-digit characters
  this.data.personaldata.alternatemobilenumber = event.target.value.replace(/\D/g, '');
  const phoneNumberGroups = this.data.personaldata.alternatemobilenumber.match(/(\d{1,3})?(\d{1,3})?(\d{1,4})?/);
  if(phoneNumberGroups!= null){
    this.data.personaldata.alternatemobilenumber = phoneNumberGroups[1];
  if (phoneNumberGroups[2]) {
    this.data.personaldata.alternatemobilenumber += '-' + phoneNumberGroups[2];
  }
  if (phoneNumberGroups[3] != null) {
    this.data.personaldata.alternatemobilenumber += '-' + phoneNumberGroups[3];
  }
  event.target.value = this.data.personaldata.alternatemobilenumber;
 // this.alternatenumber = this.data.personaldata.alternatemobilenumber;
}
}




 
  

  
}
