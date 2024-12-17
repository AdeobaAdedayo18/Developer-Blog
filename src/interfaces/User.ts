export interface UserProfileToken {
    username: string;
    user_id: number;
    access_token: string;
    refresh_token: string;
    token_type: string;
}

export interface User {
    user_id: number;
    username: string;
}