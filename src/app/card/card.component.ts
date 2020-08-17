import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  randomText = '';
  success = false;
  constructor() { }

  ngOnInit() {
    this.randomText = lorem.sentence()
  }

  onTypingChallenge(input) {
    console.log(input)
  }

}
