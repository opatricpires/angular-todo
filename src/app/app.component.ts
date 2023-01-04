import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Lista de tarefas';
  tasks = [
    {
      id: 0,
      taskName: 'Lavar louça',
      taskDescription: 'Preciso lavar a louça urgente',
    },
    {
      id: 1,
      taskName: 'Tirar o lixo',
      taskDescription: '',
    },
    {
      id: 2,
      taskName: 'Pagar as contas',
      taskDescription: 'Pagar as contas no banco',
    },
  ];
  subtitle = `Você tem um total de ${this.tasks.length} tarefas para hoje.`;
}
