import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string =  "https://jsonplaceholder.typicode.com/todos";

  constructor(private http:HttpClient) { }


  getTodos():Observable<Todo[]>{

    return this.http.get<Todo[]>(this.todosUrl);
  }

  // getTodos(){
  //   return [
  //     {
  //       "userId": 1,
  //       "id": 1,
  //       "title": "delectus aut autem",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 2,
  //       "title": "quis ut nam facilis et officia qui",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 3,
  //       "title": "fugiat veniam minus",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 4,
  //       "title": "et porro tempora",
  //       "completed": true
  //     },
  //     {
  //       "userId": 1,
  //       "id": 5,
  //       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //       "completed": false
  //     }
  //   ]

  // }
}
