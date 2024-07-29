import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProblemService } from '../problem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-problem',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './selected-problem.component.html',
  styleUrl: './selected-problem.component.scss',
})
export class SelectedProblemComponent implements OnInit {
  problemService = inject(ProblemService);
  router = inject(Router);
  question: any;
  answer: string = '';
  output: any;
  showQuestion = true;
  showSolution = false;
  previousKey = '';

  ngOnInit(): void {
    this.question = this.problemService.currentQuestion;
    this.answer = localStorage.getItem(this.question().id) || '';
  }

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
    if (this.showSolution) {
      this.showQuestion = true;
    }
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
  }

  runProgram() {
    try {
      this.output = String(eval(this.answer));
      localStorage.setItem(this.question().id, this.answer);
    } catch (error) {
      this.output = error;
    }
    this.router.navigate([], { fragment: 'output' });
  }

  clear() {
    this.output = '';
  }
}
