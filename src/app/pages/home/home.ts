import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Start } from '../../components/start/start';

@Component({
  selector: 'app-home',
  imports: [Start, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
