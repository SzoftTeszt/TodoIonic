import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { MessagesComponent } from './messages/messages.component';
import { SendComponent } from './send/send.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, MessagesComponent,SendComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    FormsModule, NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
