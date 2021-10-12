import React from "react";

const Address = (props) => {
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-xl font-medium leading-7 text-gray-700">Domicilio</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Datos de tu domicilio actual
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Calle o Avenida
                                    </label>
                                    <input
                                    type="text"
                                    name="calle"
                                    id="calle"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Nombre de calle"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['calle']}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Número exterior
                                    </label>
                                    <input
                                    type="text"
                                    name="num-ext"
                                    id="num-ext"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="#123"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['num-ext']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Numero interior
                                    </label>
                                    <input
                                    type="text"
                                    name="num-int"
                                    id="num-int"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Piso 5"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['num-int']}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Código Postal
                                    </label>
                                    <input
                                    type="text"
                                    name="codigo-postal"
                                    id="codigo-postal"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="66220"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['codigo-postal']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Colonia o Urbanización
                                    </label>
                                    <input
                                    type="text"
                                    name="colonia"
                                    id="colonia"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Nombre de colonia"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['colonia']}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Ciudad o Población
                                    </label>
                                    <input
                                    type="text"
                                    name="ciudad"
                                    id="ciudad"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Nombre de ciudad"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['ciudad']}</span>
                                </div>
                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Entidad Federativa o Estado
                                    </label>
                                    <input
                                    type="text"
                                    name="estado"
                                    id="estado"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Estado"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['estado']}</span>
                                </div>
                                <div className="col-span-6 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        País
                                    </label>
                                    <input
                                    type="text"
                                    name="pais"
                                    id="pais"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="México"
                                    onChange={props.onChangeAddHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorAddress['pais']}</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Comprobante de Domicilio</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                        >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        </svg>
                                        <div className="text-sm text-gray-600">
                                        <label
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            { props.addressData['file-upload'] ? (
                                                    <div className="my-1">
                                                        <span>{props.addressData['file-upload'].name}</span>
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )
                                            }
                                            <span>Sube un archivo</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".png, .jpg, .pdf" onChange={props.onChangeAddFileHandler}/>
                                        </label>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG o PDF</p>
                                        <span className="text-red-500 text-xs" >{props.errorAddress['file-upload']}</span>
                                    </div>
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

export default Address