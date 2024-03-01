import { registerForm } from '@/lib/actions'
import React from 'react'

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-4">Registrate</h2>
                <form action={registerForm} className="flex flex-col">
                    <div className="flex space-x-4 mb-4">
                        <input
                            placeholder="Juan"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-golden transition ease-in-out duration-150"
                            type="text"
                            name='name'
                        />
                        <input
                            placeholder="Pérez"
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-golden transition ease-in-out duration-150"
                            type="text"
                            name='lastname'
                        />
                    </div>
                    <input
                        placeholder="tunombre@ejemplo.com"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-golden transition ease-in-out duration-150"
                        type="email"
                        name='email'
                    />
                    <input
                        placeholder="Colombia"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-golden transition ease-in-out duration-150"
                        type="text"
                        name='country'
                    />
                    <input
                        placeholder="edad"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-golden transition ease-in-out duration-150"
                        type="number"
                        name='age'
                    />
                    <input
                        placeholder="peso"
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-golden transition ease-in-out duration-150"
                        type="number"
                        name='weight'
                    />
                    <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="gender">
                        Género
                    </label>
                    <select
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-golden transition ease-in-out duration-150"
                        id="gender"
                        name='gender'
                    >
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                    <label className="text-sm mb-2 text-gray-200 cursor-pointer" htmlFor="age">
                        Fecha de Nacimiento
                    </label>
                    <input
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
                        id="age"
                        type="date"
                    />
                    <p className="text-white mt-4">
                        Already have an account?
                        <a className="ml-2 text-sm text-golden -200 hover:underline mt-4" href="#"
                        >Login</a>
                    </p>
                    <button
                        className="bg-gradient-to-r from-golden to-clear-gold text-white font-bold py-2 px-4 rounded-md mt-4 hover:scale-95 hover:to-clear-gold transition ease-in-out duration-150"
                        type="submit"
                    >
                        ¡Empezar Ya!
                    </button>
                </form>
            </div>
        </div>
    )
}
