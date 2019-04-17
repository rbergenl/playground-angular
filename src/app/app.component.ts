import {Component, OnInit } from '@angular/core';

import { SetPersona } from './actions/user.actions';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromUser from './reducers';

import { ContentService } from './content.service';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My First Angular App';
  persona$: Observable<string>;
  jsonTestAsync$: Observable<any>;
  jsonTestSync: any;
  user$: any;

  constructor(
    private store: Store<fromUser.State>,
    private contentservice: ContentService,
    private userService: UserService
  ) {
     this.persona$ = this.store.pipe(select(fromUser.getUserPersona));
  }

  ngOnInit() {
    this.jsonTestAsync$ = this.contentservice.getContentAsync();
    this.jsonTestSync = this.contentservice.getContentSync();
    this.user$ = this.userService.loadUser();
  }

  test() {
    this.store.dispatch(new SetPersona({persona: 'starter'}));
  }
  submitForm() {
    //console.log(this.user$)
    // const newUser: User = {
    //   persona: this.form.value.persona,
    //   sector: this.form.value.sector,
    //   turnover: this.form.value.turnover
    // }
    //this.userService.updateUser(this.user$: User);
  }
}
