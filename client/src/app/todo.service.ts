import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  todos = [];

  getTodo(_id: string): Observable<Todo> {
    return this.http.get<Todo>(`${environment.apiUrl}/api/todos/${_id}`);
  }

  getTodos(): Observable<Todo[]> {
    console.log('getting all todos from the server');
    return this.http.get<Todo[]>(`${environment.apiUrl}/api/todos`);
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.apiUrl}/api/todos`, newTodo, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }

  updateTodo(editedTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${environment.apiUrl}/api/todos/${editedTodo._id}`, editedTodo, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }

  deleteTodo(_id: string) {
    return this.http.delete<Todo>(`${environment.apiUrl}/api/todos/${_id}`);

  }
}
