import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'problems',
    pathMatch: 'full',
  },
  {
    path: 'problems',
    loadComponent: () =>
      import('./problems/problems.component').then((c) => c.ProblemsComponent),
  },
  {
    path: 'selected-problem',
    loadComponent: () =>
      import('./selected-problem/selected-problem.component').then((c) => c.SelectedProblemComponent),
  },
];
