import { authInstance } from "./axios"

export class DashboardService {
    static dashboard = async (email: string, token: string) => {
        try {
            const response = await authInstance({
                method: 'GET',
                url: '/dashboard',
                data: {
                    email,
                    token
                }
            });

            if(response.status === 400) {
                return response.data
            }

            return response.data
        } catch (error) {
            throw error
        }
    }
}