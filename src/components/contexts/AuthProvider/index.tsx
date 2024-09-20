import { createContext } from "react";
import { useCookie } from "../useCookie";
import { IAuthContext, IAuthProvider } from "../../../interfaces/IAuthContext";
import { IAuthResponse } from "../../../interfaces/Response/IAuthResponse";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [ loggedUser, setLoggedUser, clearCookie ] = useCookie("user", null);
    const [token, setToken] = useCookie("token", null);


    async function authenticate(authentication : IAuthResponse) {
        setLoggedUser(authentication.email);

        setToken(authentication.token)
    }

    async function signout() {
        setLoggedUser(null);
        setToken(null);
        clearCookie("user");
        clearCookie("token");

    }

    return (
        <AuthContext.Provider
            value={{ loggedUser, token, authenticate, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};