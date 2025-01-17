import {categories} from "../data/categories.ts";
import React, {ChangeEvent, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'
import {Activity} from "../types";
import {ActivityActions, ActivityState} from "../reducers/activityReducer.ts";

type FormProps = {
    dispatch: React.Dispatch<ActivityActions>,
    state: ActivityState
}
const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

const Form = ({dispatch, state}: FormProps) => {

    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if(state.activeId){
            const activity = state.activities.find(activity => activity.id === state.activeId)
            if(activity) {
                setActivity(activity)
            }
        }

    }, [state.activeId]);

    const handleChangeActivity = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const {name, calories} = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type: 'ADD_ACTIVITY', payload: {newActivity: activity}})
        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

    return (
        <>
            <form className='space-y-5 bg-white shadow p-10 rounded-xl' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor='category'>Categoría</label>
                    <select className='border border-slate-300 p-2 rounded-lg w-full bg-white' value={activity.category}
                            id='category'
                            onChange={handleChangeActivity}>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor='name'>Actividad</label>
                    <input className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                           placeholder='Ej. Comida. Ejercicio, Pesas, Jugo' value={activity.name} type='text'
                           id='name' onChange={handleChangeActivity}/>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor='calories'>Calorías</label>
                    <input className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                           placeholder='Ej. 300, 500' type='number' value={activity.calories} id='calories'
                           onChange={handleChangeActivity}/>
                </div>
                <input type='submit'
                       className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-lg w-full uppercase cursor-pointer disabled:opacity-10'
                       value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                       disabled={!isValidActivity()}
                />
            </form>
        </>
    )
}
export default Form
