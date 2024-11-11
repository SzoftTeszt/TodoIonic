import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url="https://chat-4b282-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
  constructor(private http:HttpClient) { }

  addMessage(message:any){
    let body ={name:"Attila", message:message}
    return this.http.post(this.url,body)
  }
  getMessages(){
    return this.http.get(this.url)
  }

}
