import { Component, inject } from '@angular/core';
import { IDsaQuestion, dsaQuestions } from '../dsaQuestions';
import { Router } from '@angular/router';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [],
  templateUrl: './problems.component.html',
  styleUrl: './problems.component.scss',
})
export class ProblemsComponent {
  dsaQuestions = dsaQuestions;
  router = inject(Router);
  problemService = inject(ProblemService);

  selectProblem(question: IDsaQuestion) {
    this.problemService.currentQuestion.set(question);
    this.router.navigateByUrl(`/selected-problem`);
  }
}
