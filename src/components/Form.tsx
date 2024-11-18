import {categories} from "../data/categories.ts";

const Form = () => {
    return (
        <>
            <form className='space-y-5 bg-white shadow p-10 rounded-xl'>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor='category'>Categoría</label>
                    <select className='border border-slate-300 p-2 rounded-lg w-full bg-white' id='category'>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor='activity'>Actividad</label>
                    <input className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                           placeholder='Ej. Comida. Ejercicio, Pesas, Jugo' type='text' id='activity'/>
                </div>
                <div className='grid grid-cols-1 gap-3'>
                    <label htmlFor='calories'>Calorías</label>
                    <input className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                           placeholder='Ej. 300, 500' type='number' id='calories'/>
                </div>
                <input type='submit'
                       className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-lg w-full uppercase cursor-pointer'
                       value='Guardar Comida o Guardar Ejercicio'/>
            </form>
        </>
    )
}
export default Form
