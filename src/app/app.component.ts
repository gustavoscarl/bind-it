import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { GameControlComponent } from './game-control/game-control.component';
import { interval } from 'rxjs';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GameControlComponent, OddComponent, EvenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  oddNumbers: number[] = [];
  evennumber : number[] = [];

  onIntervalFired(fireNumber: number){
    if (fireNumber % 2 !== 0) {
      this.oddNumbers.push(fireNumber)
    } else {
      this.evennumber.push(fireNumber)
    }
  }
}
