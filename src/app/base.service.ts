import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
  
  refMessages:AngularFireList<any>

  constructor(private http:HttpClient, 
    private db:AngularFireDatabase) { 
      this.refMessages=this.db.list("messages")
    }

  addFireMessage(message:any){
    let body ={name:"Attila", message:message}
    this.refMessages.push(body)
  } 

  addMessage(message:any){
    let body ={name:"Attila", message:message}
    return this.http.post(this.url,body)
  }

  getFireMessages(){
    return this.refMessages
  }

  getMessages(){
    return this.http.get(this.url)
  }

}
