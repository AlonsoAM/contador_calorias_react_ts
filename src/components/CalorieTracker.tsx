import {Activity} from "../types";
import {useMemo} from "react";
import CalorieDisplay from "./CalorieDisplay.tsx";

type CalorieTrackerProps = {
    activities: Activity[]
}

const CalorieTracker = ({activities}: CalorieTrackerProps) => {

    // Contadores
    const caloriesConsumed = useMemo(() => activities.reduce((acc, activity) => activity.category === 1 ? acc + activity.calories : acc, 0), [activities])
    const caloriesBurned = useMemo(() => activities.reduce((acc, activity) => activity.category === 2 ? acc + activity.calories : acc, 0), [activities])
    const caloriesDifference = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesConsumed, caloriesBurned])

    return (
        <>
            <h2 className='text-4xl font-black text-white text-center'>Resumen de Calorías</h2>
            <div className='flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10'>
                <CalorieDisplay calories={caloriesConsumed} text={'Consumidas'}/>
                <CalorieDisplay calories={caloriesBurned} text={'Quemadas'}/>
                <CalorieDisplay calories={caloriesDifference} text={'Diferencia'}/>
            </div>

        </>
    )
}
export default CalorieTracker
