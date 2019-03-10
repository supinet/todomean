import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { TodoService } from '../todo.service';
import { Todo } from './../todo.interface';

import { EdittaskComponent } from './../edittask/edittask.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    public dialog: MatDialog,
    private data: TodoService
    ) { }

  ngOnInit(): void {
    this.data.getTodos()
      .subscribe(
        (data: Todo[]) => this.todos = data,
        (error: any) => console.log(error),
        () => console.log('all data gets')
      );
  }

  deleteItem(_id: string) {
    this.data.deleteTodo(_id)
      .subscribe(
        (res: any) => location.reload(),
        (error: any) => console.log(error)
      );
    return this.todos;
  }

  openEditDialog(_id: string): void {
    this.data.getTodo(_id)
      .subscribe(
        (resp: Todo) => {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.width = '500px';
          dialogConfig.data = resp;
          const dialogRef = this.dialog.open(EdittaskComponent, dialogConfig);

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
        },
        (error: any) => console.log(error),
        () => console.log('complete')
      );
  }

}
