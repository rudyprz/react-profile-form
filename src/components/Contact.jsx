import React from "react";

const Contact = (props) => {
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-xl font-medium leading-7 text-gray-700">Contacto</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Datos de contacto principales
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Número telefónico
                                    </label>
                                    <input
                                    type="text"
                                    name="telefono"
                                    id="telefono"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Número de diez dígitos"
                                    onChange={props.onChangeContactHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorContact['telefono']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Dirección de correo electrónico
                                    </label>
                                    <input
                                    type="text"
                                    name="correo"
                                    id="correo"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Email"
                                    onChange={props.onChangeContactHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorContact['correo']}</span>
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

export default Contact