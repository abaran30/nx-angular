import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { libATitle } from '@nx-angular/lib-a';
import { libBTitle } from '@nx-angular/lib-b';
import { libCTitle } from '@nx-angular/lib-c';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-a';

  constructor() {
    console.log(libATitle, libBTitle, libCTitle);
  }
}
