import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  public arrWords: Array<string> = [];
  public word: string = '';
  public stringWords: string = '';
  public textArea: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addBadWords(): void {
    if (this.word && !this.arrWords.some( i => i.toLowerCase().trim() == this.word.toLowerCase().trim())) {
    this.arrWords.push(this.word.trim())
    this.word = '';
    this.stringWords = this.arrWords.join(' ');
    }
  }

  resetBadWords(): void {
    this.arrWords = [];
    this.stringWords = ''
  }

  cenzorCheck(): void {
     if (this.textArea) {
      this.arrWords.forEach((elem) => {
        this.textArea = this.textArea.replace(new RegExp(elem,'ig'), this.starGenerator(elem.length));
      })
     }
  }

  private starGenerator(number: number): string {
    let star: string = '';
    for (let i = 0; i < number; i++) {
        star += '*'
    }
    return star;
  }
}
