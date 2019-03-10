/* material design, animation and form modules */
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* for the form element */
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TasksComponent,
    AddtaskComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    AddtaskComponent,
    EdittaskComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
