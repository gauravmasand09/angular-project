import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");
//selecctor is a plain mapping function which uses in memoery cache
export const isLoggedIn = createSelector(
    selectAuthState,
    auth => !!auth.user // Proejector Function 
)

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
)