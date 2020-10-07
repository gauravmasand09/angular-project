import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AppState } from './reducers';
import { isLoggedIn , isLoggedOut} from './auth/auth.selectors';
import { logout } from './auth/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = true;
    opened: boolean;
    isLoggedIn$: Observable<boolean>; //$ indicates that it a a observable variable its a convention
    isLoggedOut$: Observable<boolean>; //$ indicates that it a a observable variable its a convention

    constructor(private router: Router,private store:Store<AppState>) {

    }

    ngOnInit() {

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });
      /**
       * old way of doing or quering store new way is using store selectors
      this.isLoggedIn$ = this.store.pipe(
        map(
          state => !!state['auth'].user,
        )        
      );
      this.isLoggedOut$ = this.store.pipe(
        map(
          state => !state['auth'].user
        )
      );
      **/

      //new way using select select is a operator which only emits value when the value has changes is input changes thagt means
      //output has changes only then it will emit a new value 

      this.isLoggedIn$ = this.store.pipe(
        select(isLoggedIn)        
      );
      this.isLoggedOut$ = this.store.pipe(
        select(isLoggedOut) 
      );
    }

    logout() {
      const logoutAction = logout();
      this.store.dispatch(logoutAction);
      this.router.navigateByUrl("/");
    }

    toggleMenu(){
      this.opened = !this.opened;
    }

}
