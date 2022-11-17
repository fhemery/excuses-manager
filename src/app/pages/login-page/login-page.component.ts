import { Component } from '@angular/core';
import { LoginData } from '../../model/login-data';
import { UserService } from '../../services/user.service';
import { take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(
    private readonly userService: UserService,
    private readonly snackbar: MatSnackBar,
    private readonly translate: TranslateService
  ) {}

  onSubmitLogin(data: LoginData) {
    this.userService
      .login(data.email, data.password)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          history.back();
        } else {
          this.snackbar.open(this.translate.instant('login.error'), '', {
            panelClass: ['error-snackbar'],
            duration: 3000,
          });
        }
      });
  }
}
