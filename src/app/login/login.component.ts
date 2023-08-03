import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  frm_username = new FormControl('', [Validators.required, Validators.email]);
  frm_password = new FormControl('', [Validators.required, Validators.pattern('')]);
  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    //check for the two validators mentioned while initializing the formcontrol
    if (this.frm_username.hasError('required') || this.frm_password.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.frm_username.hasError('email')) {
      return 'Not a valid email';
    }
    else {
      return '';
    }
  }

  loginFunction() {
    let user: any = { 'LoggedInUser': (this.frm_username.value ?? '').split("@")[0] };
    localStorage.setItem('user', JSON.stringify(user))
    // localStorage.setItem('user', (this.frm_username.value ?? '').match(/^([^@]+)/)[1]) //alternatively this will also work
    this.router.navigate(['/loggedin/home']);
  }
}
