import { Injectable, signal } from '@angular/core';
import { IDsaQuestion, dsaQuestions } from './dsaQuestions';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  get question() {
    try {
      return JSON.parse(localStorage.getItem('currentQuestion') ?? 'null');
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  currentQuestion = signal<IDsaQuestion>(this.question ?? dsaQuestions[0].questions[0]);

}
