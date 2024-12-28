import Form from "./components/Form.tsx";
import {useReducer, useEffect, useMemo} from "react";
import {activityReducer, initialState} from "./reducers/activityReducer.ts";
import ActivityList from "./components/ActivityList.tsx";


function App() {

    const [state, dispatch] = useReducer(activityReducer, initialState)
    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities))
    }, [state.activities]);

    const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities])

    return (
        <>
            <header className='bg-lime-600 py-3'>
                <div className='max-w-4xl mx-auto flex justify-between'>
                    <h1 className='text-center text-lg font-bold text-white uppercase'>
                        Contador de Calorías
                    </h1>
                    <button
                        onClick={() => dispatch({ type: 'CLEAR_ACTIVE_ACTIVITY' })}
                        disabled={!canRestartApp}
                        className='bg-gray-800 hover:bg-gray-900 uppercase font-bold text-white px-3 py-1 rounded-lg cursor-pointer text-xs disabled:opacity-30'
                    >
                        Reiniciar App
                    </button>
                </div>
            </header>
            <section className='bg-lime-500 py-20 px-5'>
                <div className='max-w-4xl mx-auto'>
                    <Form dispatch={dispatch} state={state} />
                </div>
            </section>
            <section className='p-10 mx-auto max-w-4xl'>
                <ActivityList
                    activities={state.activities}
                    dispatch={dispatch}
                />
            </section>
        </>
    )
}

export default App
