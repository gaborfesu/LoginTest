import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup

  constructor(
    private auth:AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    //this.login();
    this.loginForm = this.formBuilder.group({
      user:[''],
      pass:['']
    });
  }
  login(){
    let user = this.loginForm.value.user;
    let pass = this.loginForm.value.pass;
    console.log(user)
    console.log(pass)


    this.auth.login(user,pass)
    .subscribe(res =>{
      console.log(res.success);
      if (res.success){
        
      }
    })
  }

}
