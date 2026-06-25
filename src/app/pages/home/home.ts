import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  constructor( private readonly router: Router ) {}
  startQuiz(): void { this.router.navigate(['/quiz']); }
}