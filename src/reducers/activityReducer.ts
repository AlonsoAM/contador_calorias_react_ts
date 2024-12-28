import {Activity} from "../types";

export type ActivityActions =
    { type: 'ADD_ACTIVITY', payload: { newActivity: Activity } } |
    { type: 'DELETE_ACTIVITY', payload: { id: Activity['id'] } } |
    { type: 'SET_ACTIVE_ACTIVITY', payload: { id: Activity['id'] } }

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}
export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}
export const activityReducer = (state: ActivityState = initialState, action: ActivityActions): ActivityState => {

    switch (action.type) {
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
        case 'DELETE_ACTIVITY':
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload.id)
            }
        case 'SET_ACTIVE_ACTIVITY':
            return {
                ...state,
                activeId: action.payload.id
            }
        default:
            return state
    }

}