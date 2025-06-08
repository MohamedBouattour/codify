import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@code-lab/designer-ui').then((m) => m.DesignerUiComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
