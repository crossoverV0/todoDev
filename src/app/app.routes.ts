import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
   {
      path: '',
      children: [
         {
            path: '',
            loadComponent: () => import('./pages/todo-list/todo-list.component').then((c) => c.TodoListComponent)
         },
         {
            path: 'historico',
            loadComponent: () => import('./pages/history/history.component').then((c) => c.HistoryComponent)
         }
      ]
   }
]