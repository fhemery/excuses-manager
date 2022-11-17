import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginData } from '../../../model/login-data';

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

  @Output() submitLogin = new EventEmitter<LoginData>();

  constructor(private readonly formBuilder: FormBuilder) {}

  onSubmit() {
    let loginFormValues = this.loginForm.value;
    this.submitLogin.emit(
      new LoginData(loginFormValues.login || '', loginFormValues.password || '')
    );
  }
}
