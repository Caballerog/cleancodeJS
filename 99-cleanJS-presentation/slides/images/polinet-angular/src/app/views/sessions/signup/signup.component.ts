import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
  ) { }

ngOnInit() {
  this.signupForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });
}

signup() {

  this.submitButton.disabled = true;
  this.progressBar.mode = 'indeterminate';
}

}
