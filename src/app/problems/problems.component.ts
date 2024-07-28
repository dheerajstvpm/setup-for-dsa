import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDsaQuestion, dsaQuestions } from '../dsaQuestions';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.scss',
})
export class ProblemsComponent {
  dsa = dsaQuestions;
  question:IDsaQuestion = Object.keys(this.dsa).map((key) => this.dsa[key])[0][0];
  answer: string = localStorage.getItem(this.question.id) || '';
  output: any;
  showQuestion = false;
  showSolution = false;
  previousKey = '';

  @HostListener('window:keydown', ['$event'])
  onKeydownMain(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.previousKey === 'Control') {
      this.runProgram();
    }
    this.previousKey = event.key;
  }

  toggleQuestion() {
    this.showQuestion = !this.showQuestion;
  }

  toggleSolution() {
    this.showSolution = !this.showSolution;
  }

  runProgram() {
    try {
      this.output = String(eval(this.answer));
      localStorage.setItem(this.question.id, this.answer);
    } catch (error) {
      this.output = error;
    }
  }

  clear() {
    this.output = '';
  }
}
