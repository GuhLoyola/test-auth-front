import { destroyCookie, parseCookies, setCookie } from "nookies"
import { useState } from "react"

export const useCookie = (cookieKeyName: string, defaultValue: any) => {
    const [storedValue, setStoreValue] = useState(() => {

        try {
            const cookies = parseCookies();            

            if(cookies[cookieKeyName]) {
                return JSON.parse(cookies[cookieKeyName])
            } else {
                setCookie(null, cookieKeyName, JSON.stringify(defaultValue))

                return defaultValue
            }

        } catch (error) {
            return defaultValue
        }
    });

    const setValue = (cookieValue : any) => {
        try {
            setCookie(null, cookieKeyName, JSON.stringify(cookieValue))
        } catch (error) { }      

        setStoreValue(cookieValue);
    };

    const clearCookie = (cookieKeyName: string) => {
        destroyCookie(null, cookieKeyName)
    };

    return [storedValue, setValue, clearCookie]
}