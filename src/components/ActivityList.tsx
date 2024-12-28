import {Activity} from "../types";

type ActivityListProps = {
    activities: Activity[]
}

const ActivityList = ({activities}: ActivityListProps) => {

    return (
        <>
            <h2 className='text-4xl font-bold text-slate-600 text-center'>Comida y Actividades</h2>
            {activities.map((activity) => (
                <div key={activity.id} className='bg-white shadow p-5 flex justify-between rounded-xl mt-5'>
                   <div className='space-y-2 relative'>
                      <p>
                          {activity.category}
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
