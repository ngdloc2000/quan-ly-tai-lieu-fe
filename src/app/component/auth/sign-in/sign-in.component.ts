import {Component} from '@angular/core';
import {SignInForm} from "../../../dto/SignInForm";
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  form: any = {};
  // @ts-ignore
  signInForm: SignInForm;
  status: string = '';

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private userService: UserService,
              private router: Router) {
  }

  ngSubmit() {

    this.signInForm = new SignInForm(
      this.form.username.trim(),
      this.form.password.trim()
    )

    this.authService.signIn(this.signInForm).subscribe(data => {
      if (data != undefined) {
        this.tokenService.setToken(data.body.token);
        this.userService.getDetailPresent().subscribe(data => {
          this.tokenService.setUserId(data.body.id);
          this.tokenService.setFullName(data.body.fullName);
          this.router.navigate(['/management']).then(() => {
            window.location.reload();
          });
        })
      } else {
        this.status = 'Nhập sai tài khoản hoặc mật khẩu';
      }
    });
  }
}
