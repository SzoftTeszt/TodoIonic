import { afterRender, Component, Input, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent  implements OnInit {

  @Input() messages:any
  scroll=true
  scrollTop=0

  constructor() { 
    afterRender(
      ()=>{
        if (this.scroll){
        document.getElementsByClassName('vege')[0]
        .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }
    )
  }

  ngOnInit() {}
  handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(ev.detail));
    this.scrollTop=Number(ev.detail.scrollTop)
    this.scroll=false
  }

  handleScrollEnd() {
    console.log('scroll end');
    console.log(document.getElementsByClassName('ion-padding')[0]);
    console.log(document.getElementsByClassName('container')[0]);

    let iph=Number(document.getElementsByClassName('ion-padding')[0].clientHeight)
    let ch=Number(document.getElementsByClassName('container')[0].clientHeight)
    console.log("ion magasság:", iph)
    console.log("ch magasság:", ch)
    if (this.scrollTop+iph>=ch) this.scroll=true
    else this.scroll=false
  }

}
