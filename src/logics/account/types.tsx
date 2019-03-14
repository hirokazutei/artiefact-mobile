
export interface UserState {
    userID: number | null,
    username: string | null,
    handle: string | null,
    profilePic: string | null,
    website: string | null,
    bio: string | null,
    email: string | null,
    phoneNumber: string | null,
    gender: Gender | null,
}

export enum Gender { Male, Female, Undisclosed, Other }