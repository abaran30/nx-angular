import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-lib-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-b.component.html',
  styleUrl: './lib-b.component.css',
})
export class LibBComponent {}
