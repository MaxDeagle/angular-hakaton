import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      username: this.fb.control(null),
      password: this.fb.control(null)
    });
   }

  ngOnInit() {
  }

  public signIn () {
    console.log('sign')
    console.log(this.loginForm)
    if (this.loginForm.controls.username.value === 'admin' && this.loginForm.controls.password.value === '1234') {
      console.log('in')
      localStorage.setItem('authed', '1');
      this.router.navigate(['/main']);
    }
  }
}
