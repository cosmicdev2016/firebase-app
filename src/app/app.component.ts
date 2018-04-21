import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;

  constructor(public db: AngularFireDatabase) {
    db.list('users').valueChanges().subscribe(
      res => {
        console.log(res);
        this.users = res;
      }
    )
  }
}
