import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CommonModule, 
    Header, 
    Footer],
  templateUrl: './result.html',
  styleUrls: ['./result.scss'],
})
export class Result {}