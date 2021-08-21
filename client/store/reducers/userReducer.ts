import {UserState, UserAction, UserProfileTypes} from "@/types/UserProfileTypes";
import produce from "immer"

const initialState: UserState = {
    data:null
}

export const userReducer = (state = initialState, {type, payload}: UserAction): UserState => {
    switch (type) {
        case UserProfileTypes.SET_PROFILE:
            return produce(state, draft => {
                draft.data = payload
            })
        default:
            return state;
    }
}

