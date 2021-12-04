import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  public arrWords: Array<string> = [];
  public word!: string;
  public stringWords!: string;
  public textArea!: string;
  public isErrorAdd: boolean = false;
  public isErrorCenzor: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addBadWords(): void {
    if (this.word && !this.arrWords.some( i => i.toLowerCase().trim() == this.word.toLowerCase().trim())) {
    this.arrWords.push(this.word.trim())
    this.word = '';
    this.stringWords = this.arrWords.join(' ');
    this.isErrorAdd = false;
    } else {
      this.isErrorAdd = true;
    }
  }

  resetBadWords(): void {
    this.arrWords = [];
    this.stringWords = '';
    this.textArea = '';
  }

  cenzorCheck(): void {
     if (this.textArea) {
      this.arrWords.forEach((elem) => {
        this.textArea = this.textArea.replace(new RegExp(elem,'ig'), this.starGenerator(elem.length));
      })
      this.isErrorCenzor = false
     } else {
     this.isErrorCenzor = true
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
