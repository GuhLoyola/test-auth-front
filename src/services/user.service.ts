import { IUserForm } from "../interfaces/users/IUserForm";
import { instance } from "./axios"

export class UserService {
    static create = async (data: IUserForm) => {
        try {
            const response = await instance({
                method: "POST",
                url: `/register`,
                data
            });

            return response.data
        } catch (error) {
            throw error
        }
    }
}