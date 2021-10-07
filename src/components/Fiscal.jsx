import React from "react";

import DatePicker from './tools/DatePicker';

const Fiscal = () => {
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-xl font-medium leading-7 text-gray-700">Datos Fiscales</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Datos de tu registro fiscal
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Razón Social
                                    </label>
                                    <input
                                    type="text"
                                    name="razon-social"
                                    id="razon-social"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Nombre fiscal de empresa, S.A."
                                    />
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nombre Comercial
                                    </label>
                                    <input
                                    type="text"
                                    name="nombre-comercial"
                                    id="nombre-comercial"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Nombre comercial de empresa"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nacionalidad
                                    </label>
                                    <input
                                    type="text"
                                    name="nacionalidad"
                                    id="nacionalidad"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Mexicana"
                                    />
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Fecha de constitución
                                    </label>
                                    <DatePicker />
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        RFC
                                    </label>
                                    <input
                                    type="text"
                                    name="rfc"
                                    id="rfc"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Registro de RFC"
                                    />
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Régimen Fiscal
                                    </label>
                                    <select
                                    type="text"
                                    name="regimen-fiscal"
                                    id="regimen-fiscal"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    >
                                        <option>General</option>
                                        <option>Sin fines de lucro</option>
                                        <option>Acumulación de ingresos</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Industria
                                    </label>
                                    <input
                                    type="text"
                                    name="industria"
                                    id="industria"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Industria registrada"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-8">
                <div className="border-t border-gray-300" />
                </div>
            </div>
        </>
    )
}

export default Fiscal