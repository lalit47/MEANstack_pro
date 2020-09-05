import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public fashoppingBasket = faShoppingBasket;


  public fbFormGroup = this.fb.group({
    Fname: ['', Validators.required],
    Lname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    Cpassword: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void { }

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();


    this.router.navigate(['login']);
  }
}
