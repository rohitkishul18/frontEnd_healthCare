import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
 // Assuming you've created AuthService for API calls

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (res:any) => {
        // Navigate to dashboard or home on success
        this.router.navigate(['/habits']);
        // alert('hi welcome to our project');
      },
      (err:Error) => {
        console.error('Login failed', err);
      }
    );
  }
}
