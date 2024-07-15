import { NgIf } from '@angular/common';
import { Component, HostBinding, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.css'
})
export class ProblemsComponent {
  answer: string = '';
  output: any;
  showQuestion = false;
  previousKey='';

  @HostListener('window:keydown', ['$event'])
  onKeydownMain(event:KeyboardEvent): void {
    if (event.key === 'Enter' && this.previousKey==='Control') {
      this.runProgram();
    }
    this.previousKey=event.key;
  }

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }

  runProgram() {
    try {
      this.output = String(eval(this.answer));
    } catch (error) {
      this.output = error;
    }
  }

  clear() {
    this.output = '';
    this.answer = '';
  }
}
