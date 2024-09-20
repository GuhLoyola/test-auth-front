import { instance } from "./axios"

export class AuthService {
    static signin = async (email: string, password: string) => {
        try {
            const response = await instance({
                method: 'POST',
                url: `/signin`,
                data: {
                    email,
                    password
                }
            });

            if(response.status === 400) {
                return response.data
            }
           

            return response.data
        } catch (ex: any) {
            throw ex
        }
    }
}