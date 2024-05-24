import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import Shepherd from 'shepherd.js';
import { Tour } from 'shepherd.js/tour';
import { StepOptions } from 'shepherd.js/step';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  tour: Tour | undefined;

  constructor(private readonly router: Router) { }

  ngAfterViewInit() {
    this.tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: 'shadow-md bg-purple-dark',
        scrollTo: true
      }
    });

    const steps: StepOptions[] = [
      {
        id: 'step-1',
        text: 'Step 1 text',
        attachTo: {
          element: '[data-tour-id="tour-1-id-potato-1"]',
          on: 'bottom'
        },
        buttons: [
          {
            text: 'Next',
            action: () => {
              this.router.navigate(['cheese']).then(() => {
                this.tour?.next();
              });
            }
          }
        ]
      },
      {
        id: 'step-2',
        text: 'Step 2 text',
        attachTo: {
          element: '[data-tour-id="tour-1-id-cheese-1"]',
          on: 'top'
        },
        buttons: [
          {
            text: 'Next',
            action: () => {
              this.router.navigate(['']).then(() => {
                this.tour?.next();
              });
            }
          }
        ]
      },
      {
        id: 'step-3',
        text: 'Step 3 text',
        attachTo: {
          element: '[data-tour-id="tour-1-id-potato-2"]',
          on: 'right'
        },
        buttons: [
          {
            text: 'Next',
            action: () => {
              window.localStorage.setItem('tour-completed', 'true');
              this.tour?.complete();
            }
          }
        ]
      }
    ];

    this.tour.addSteps(steps);
  }

  startTour() {
    if (this.tour && window.localStorage.getItem('tour-completed') !== 'true') {
      this.tour.start();
    }
  }
}
