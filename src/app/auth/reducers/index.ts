import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";

export interface AuthState {
  user: User;
}

//creating reducer reducer is a function which defines what to do with the action
//creates a new state
//reducers function basically tells the store to what to do with the action

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    //A store is like a In Memory Db which contains data whose data gets shared by multiple components of the application
    // each component cant modify the state directly if a component want to modify a data the component can dispatch
    //an action and action is plain javascript payload or object or anything and a type type is mandatory 
    // and depending on the type of action  the store calls a reducerFunction.
    //reducer function is a plain javascript function that calculates or modifies a new version of state
    //basically a new version of AuthState is being modified by reducer  that is basically a user object initlLLY it was emtpty
    return {
      user: action.user
    };
  }),
  on(AuthActions.logout, (state, action) => {
    //A store is like a In Memory Db which contains data whose data gets shared by multiple components of the application
    // each component cant modify the state directly if a component want to modify a data the component can dispatch
    //an action and action is plain javascript payload or object or anything and a type type is mandatory 
    // and depending on the type of action  the store calls a reducerFunction.
    //reducer function is a plain javascript function that calculates or modifies a new version of state
    //basically a new version of AuthState is being modified by reducer  that is basically a user object initlLLY it was emtpty
    return {
      user: undefined
    };
  })
);