import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-profil-info',
  standalone: true,
  imports: [],
  templateUrl: './profil-info.component.html',
  styleUrls: ['./profil-info.component.css']
})
export class ProfilInfoComponent implements OnInit {
  user: any = null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getMe().subscribe({
      next: (res) => {
        this.user = res;
        console.log("utilisateur récupérées :", this.user);
      },
      error: (err) => {
        console.error("erreur", err);
      }
    });

  }
}
