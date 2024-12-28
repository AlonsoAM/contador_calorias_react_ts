import {Activity} from "../types";
import {categories} from "../data/categories.ts";
import {useMemo} from "react";

type ActivityListProps = {
    activities: Activity[]
}

const ActivityList = ({activities}: ActivityListProps) => {

    const categoryName = useMemo(() =>
            (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
        , [activities])

    return (
        <>
            <h2 className='text-4xl font-bold text-slate-600 text-center'>Comida y Actividades</h2>
            {activities.map((activity) => (
                <div key={activity.id} className='bg-white shadow p-5 flex justify-between rounded-xl mt-5'>
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
                    <div>

                    </div>
                </div>
            ))}
        </>
    )
}
export default ActivityList
