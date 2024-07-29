import { Injectable, signal } from '@angular/core';
import { IDsaQuestion, dsaQuestions } from './dsaQuestions';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  currentQuestion=signal<IDsaQuestion>(dsaQuestions[0].questions[0]);

}
