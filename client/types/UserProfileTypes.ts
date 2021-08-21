export type IUserData = {
    readonly id: number;
    readonly name: string;
    readonly status: string;
    readonly favorites?: any;
    readonly avatar?: string;
    readonly phone?: string;
    readonly email?: string;
    readonly token?: string;
}
export type UserState = {
    data: IUserData | null;
};


export enum UserProfileTypes {
    SET_PROFILE = "user/SET_USER_PROFILE_DATA",
}

interface SetProfileAction {
    type: UserProfileTypes.SET_PROFILE,
    payload: IUserData
}

export type UserAction =
    SetProfileAction