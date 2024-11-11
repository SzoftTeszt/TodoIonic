import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent  implements OnInit {
  message=""
  messages:any
  constructor(private base:BaseService) { }  
  ngOnInit() {
    this.getMessages()
  }
  getMessages(){
    this.base.getMessages().subscribe(
      (data)=>this.messages=data
    )
  }

  addMessage(){
    this.base.addMessage(this.message).subscribe(
      ()=>this.getMessages()
    )
  }
}
