import { afterRender, Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent  implements OnInit {
  
  messages:any
  constructor(private base:BaseService) {

   }  
  ngOnInit() {
    this.base.getFireMessages().valueChanges().subscribe(
      (res)=>this.messages=res
    )
  }


  getMessages(){
    this.base.getMessages().subscribe(
      (data)=>this.messages=data
    )
  }

  addMessage(message:string){
    this.base.addFireMessage(message)
    // this.base.addMessage(this.message).subscribe(
    //   ()=>this.getMessages()
    // )
  }
}
