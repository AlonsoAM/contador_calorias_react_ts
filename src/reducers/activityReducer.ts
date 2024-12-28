import {Activity} from "../types";

export type ActivityActions =
    { type: 'ADD_ACTIVITY', payload: { newActivity: Activity } } |
    { type: 'DELETE_ACTIVITY', payload: { id: Activity['id'] } } |
    { type: 'SET_ACTIVE_ACTIVITY', payload: { id: Activity['id'] } }

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = (): Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}
export const activityReducer = (state: ActivityState = initialState, action: ActivityActions): ActivityState => {

    switch (action.type) {
        case 'ADD_ACTIVITY':
            let updatedActivities: Activity[] = []

            if (state.activeId){
                updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
            } else {
                updatedActivities = [...state.activities, action.payload.newActivity]
            }

            return {
                ...state,
                activities: updatedActivities,
                activeId: ''
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