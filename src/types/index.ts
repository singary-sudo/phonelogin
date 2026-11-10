export interface User {
    id: string;
    phoneNumber: string;
    name?: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface LoginFormValues {
    phoneNumber: string;
}