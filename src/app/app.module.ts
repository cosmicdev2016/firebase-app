import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//add firebase related imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
//firebase service to interact with DB
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  //add firebase service to providers
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
