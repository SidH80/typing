import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  randomText = lorem.sentence();
  enteredText = '';
  success = false;
  constructor() { }

  ngOnInit() {
  }

  onTypingChallenge(input: string) {
    this.enteredText = input;
  }

  compareLetter(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }

}
