import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-lib-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-a.component.html',
  styleUrl: './lib-a.component.css',
})
export class LibAComponent {}
