import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  loginForm = this.formBuilder.group({
    login: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  });
  get login(): FormControl {
    return this.loginForm.get('login')! as FormControl;
  }

  constructor(private readonly formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
