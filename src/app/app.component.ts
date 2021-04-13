import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvaJose';
  wordList 
  currentWord 

  constructor() { }

  addWord(form) {
    this.wordList.push(this.currentWord)
    this.currentWord
    form.resetForm()
  }
}

