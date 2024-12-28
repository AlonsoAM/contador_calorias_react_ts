import {Activity} from "../types";
import {categories} from "../data/categories.ts";
import {useMemo, Dispatch} from "react";
import {PencilSquareIcon, XCircleIcon} from '@heroicons/react/24/outline'
import {ActivityActions} from "../reducers/activityReducer.ts";

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

const ActivityList = ({activities, dispatch}: ActivityListProps) => {

    const categoryName = useMemo(() =>
            (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
        , [activities])
    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

    return (
        <>
            <h2 className='text-4xl font-bold text-slate-600 text-center'>Comida y Actividades</h2>

            {isEmptyActivities ?
                <p className='text-center my-5'>No hay actividades aún...</p> :
                activities.map((activity) => (
                    <div key={activity.id}
                         className='bg-white shadow px-5 py-10 flex justify-between rounded-xl mt-5'>
                        <div className='space-y-2 relative'>
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'} rounded-xl`}>
                                {categoryName(+activity.category)}
                            </p>
                            <p className='text-2xl font-bold pt-5'>
                                {activity.name}
                            </p>
                            <p className='font-black text-4xl text-lime-500'>
                                {activity.calories} {''}
                                <span className='text-slate-500 text-2xl'>Calorías</span>
                            </p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <button
                                onClick={() => dispatch({type: 'SET_ACTIVE_ACTIVITY', payload: {id: activity.id}})}
                            >
                                <PencilSquareIcon
                                    className='h-8 w-8 text-gray-800'
                                />
                            </button>
                            <button
                                onClick={() => dispatch({type: 'DELETE_ACTIVITY', payload: {id: activity.id}})}
                            >
                                <XCircleIcon
                                    className='h-8 w-8 text-red-500'
                                />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default ActivityList
