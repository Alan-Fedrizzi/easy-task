import { Component, HostListener, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
// import { ITask } from './tasks.model';
// podemos especificar que é um type, mas não é obrigatório
import { NewTaskComponent } from './new-task/new-task.component';
import { type INewTaskData, type ITask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  // a ? diz que é opcional, podemos não receber
  @Input({ required: true }) name!: string;
  // ou
  // @Input() name: string | undefined;
  isAddingTask = false;

  /*
   tasks: ITask[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  */

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    // return this.tasks.filter((task) => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  /*
  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  */

  onStartAddTaks() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isAddingTask && event.key === 'Escape') {
      this.onCloseAddTask();
    }
  }

  /*
  onAddTask(taskData: INewTaskData) {
    // unshift coloca no início do array, push no final
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
  */
}
