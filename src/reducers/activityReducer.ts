import {Activity} from "../types";

export type ActivityActions =
    { type: 'ADD_ACTIVITY', payload: { newActivity: Activity } }

type ActivityState = {
    activities: Activity[]
}
export const initialState: ActivityState = {
    activities: []
}
export const activityReducer = (state: ActivityState = initialState, action: ActivityActions): ActivityState => {

    switch (action.type) {
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
        default:
            return state
    }

}