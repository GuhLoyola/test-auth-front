export interface IAuthResponse {
    email: string
    token: {
        access_token: string
    }
}