import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import { title } from 'process';
import {Todo} from '../../models/Todo';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {


  todos:Todo[];

  gg:Todo;
  constructor(private todoservices:TodoService) { }
 
  ngOnInit() {
    this.todoservices.getTodos().subscribe(todos =>{
      this.todos = todos
    });



    // this.todos=this.todoservices.getTodos();
  //   this.todos = [
  //     {
  //     id:1,
  //     title:"firts item",
  //     completed:false
  //     },
  //     {
  //       id:2,
  //       title:"firts item 2",
  //       completed:true
  //       },
  //       {
  //         id:3,
  //         title:"firts item 3",
  //         completed:false
  //         },
  
  // ]
  }
  test(){

    // todos[0];
  }

}
