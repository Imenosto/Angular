import { Component } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      console.log("Le formulaire est invalide");
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (!username || !password) {
      console.log("Nom d'utilisateur ou mot de passe manquant");
      return;
    }

    this.loginService.login(username, password).subscribe({
      next: (res) => {
        localStorage.setItem("token", res.accessToken);
        this.router.navigate(['profile']).then(() => {
          console.log('Redirection réussie');
        });
      },
      error: (err) => {
        console.log("erreur redirection", err);
      }
    });

  }
}
