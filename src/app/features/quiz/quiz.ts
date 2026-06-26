import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    CommonModule, 
    Header, 
    Footer],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.scss'],
})
export class Quiz {}