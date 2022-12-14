import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:any = {
    username:null,
    password:null
  }
  isSuccessful = false
  isSignUpFailed = false
  errorMessage=''

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    const {username, password} = this.form

    this.authService.register(username, password)
    .subscribe(
      data => {
        console.log(data)
        this.isSuccessful=true
        this.isSignUpFailed=false
      },
      error =>{
        this.errorMessage= 'FAIL' //err.error.errorMessage
        this.isSignUpFailed=true
      }
    )
  }
}
