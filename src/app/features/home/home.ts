import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Footer
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  constructor( private readonly router: Router ) {}
  startQuiz(): void { this.router.navigate(['/quiz']); }
}