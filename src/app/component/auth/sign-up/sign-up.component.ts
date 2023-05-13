import {Component} from '@angular/core';
import {SignUpService} from "../../../service/auth/signUp/sign-up.service";
import {SignUpForm} from "../../../dto/SignUpForm";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form: any = {};
  // @ts-ignore
  signUpForm: SignUpForm;
  status: string = '';

  constructor(private signUpService: SignUpService) {
  }

  // @ts-ignore
  ngSubmit() {

    if (!this.validateSignUpForm()) {
      this.status = 'Thông tin nhập form chưa đúng';
      return this.status;
    }

    this.signUpForm = new SignUpForm(
      this.form.username.trim(),
      this.form.email.trim(),
      this.form.phone.trim(),
      this.form.password.trim()
    )

    this.signUpService.signUp(this.signUpForm).subscribe(data => {
      this.form.reset();
    });
  }

  validateSignUpForm() {
    return this.validateUsername(this.form.username) &&
      this.validateEmail(this.form.email) &&
      this.validatePassword(this.form.password, this.form.confirmPassword) &&
      this.validatePhone(this.form.phone);
  }

  // Hàm kiểm tra tên đăng nhập
  validateUsername(username: string) {
    return username.trim().length > 0;
  }

  // Hàm kiểm tra email
  validateEmail(email: string) {
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  // Hàm kiểm tra mật khẩu
  validatePassword(password: string, confirmPassword: string) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password) && password == confirmPassword;
  }

  // Hàm kiểm tra số điện thoại
  validatePhone(phone: string) {
    var phoneRegex = /^0[0-9]{9}$/;
    return phoneRegex.test(phone);
  }
}
