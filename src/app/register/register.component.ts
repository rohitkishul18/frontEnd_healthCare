import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.username, this.email, this.password).subscribe(
      (res:any) => {
        const userDetails = {
          userId: res.user._id,
          username: res.user.username,
          email: res.user.email
        };
        localStorage.setItem('token', res.token);
        localStorage.setItem('user',JSON.stringify(userDetails));
        this.router.navigate(['/habits']);
      },
      (err) => {
        console.error('Registration failed', err);
      }
    );
  }
}
