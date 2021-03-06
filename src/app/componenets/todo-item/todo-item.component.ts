import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item:Todo;

  constructor(private todoService:TodoService) { 
  }

  ngOnInit(): void {
  }

  // set dyamic calls
  setClasses(){
    let classes = {
      todo:true,
      'is-complete':this.item.completed
    }

    return classes;
  }

  //ontoggle
  onToggle(todo){
    console.log('toggle');
    console.log(todo);
    todo.completed = !todo.completed;
    // this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo){
    console.log("Delete");
    console.log(todo);
  }

}
