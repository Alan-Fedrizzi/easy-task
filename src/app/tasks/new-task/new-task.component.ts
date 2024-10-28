import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<INewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // com signals o ngModel no html fica igual
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  // inject function
  private tasksService = inject(TasksService);
  // dá no mesmo esse inject ou no constructor
  // constructor (private tasksService: TasksService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    const newTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    };
    this.tasksService.addTask(newTask, this.userId);
    this.close.emit();

    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate,
    // });
  }
}
