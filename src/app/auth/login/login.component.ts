import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AppState } from "../../reducers";
import { login } from "../auth.actions";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ["gaurav.masand09@gmail.com", [Validators.required]],
      password: ["password", [Validators.required]]
    });
  }

  ngOnInit() {}

  login() {
    this.auth
      .login(
        this.form.controls["email"].value,
        this.form.controls["password"].value
      )
      .pipe(
        tap(user => {
          //main login for storing data inside store
          const loginAction = login({ user });
          this.store.dispatch(loginAction);
          this.router.navigateByUrl("courses");
        })
      )
      .subscribe(noop, () => this.openSnackBar("Login Failed", ""));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, "X", {
      duration: 2000
      // verticalPosition: 'top',
      // horizontalPosition:'right'
    });
  }
}
