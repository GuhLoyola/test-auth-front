import { IAuthResponse } from "./Response/IAuthResponse";

export interface IAuthContext {
    loggedUser: any
    token: any

    authenticate: (authentication : IAuthResponse) => Promise<void>
    signout: () => void
}

export interface IAuthProvider {
    children: JSX.Element;
}