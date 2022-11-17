import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { take } from 'rxjs';

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

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService
  ) {}

  onSubmit() {
    let loginFormValues = this.loginForm.value;
    this.userService
      .login(loginFormValues.login || '', loginFormValues.password || '')
      .pipe(take(1))
      .subscribe((res) => console.log('login successful?', res));
  }
}
