export interface AuthUser {
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        otherName: string | null;
        profileImageUrl: string | null;
    };
    token: string;
}
