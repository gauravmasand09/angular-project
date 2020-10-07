import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

//Defining some basic action types

//this is Creating the Action
export const login = createAction(
    "[Login Page] User Login",
    props<{user: User}>()
)

//logout action
//action is basically an event
export const logout = createAction(
    "[Top Menu] Logout",
    // props<{user: User}>()
)