import React from "react";

import DatePickerLegal from './tools/DatePickerLegal';

const Legal = (props) => {
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-xl font-medium leading-7 text-gray-700">Representante Legal</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Datos del representante legal
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nombre
                                    </label>
                                    <input
                                    type="text"
                                    name="nombre-rep"
                                    id="nombre-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Nombre del representante"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['nombre-rep']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Género
                                    </label>
                                    <select
                                    type="text"
                                    name="genero-rep"
                                    id="genero-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    onChange={props.onChangeLegalHandler}
                                    >
                                        <option selected disabled hidden>Seleccionar:</option>
                                        <option>Masculino</option>
                                        <option>Femenino</option>
                                        <option>Otro</option>
                                    </select>
                                    <span className="text-red-500 text-xs" >{props.errorLegal['genero-rep']}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Fecha de nacimiento
                                    </label>
                                    <DatePickerLegal onChangeDateLegal={props.onChangeDateLegal} />
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Entidad federativa de nacimiento
                                    </label>
                                    <input
                                    type="text"
                                    name="entidad-rep"
                                    id="entidad-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Estado de nacimiento del representante"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['entidad-rep']}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        País de nacimiento
                                    </label>
                                    <input
                                    type="text"
                                    name="pais-rep"
                                    id="pais-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="País de nacimiento del representante"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['pais-rep']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nacionalidad
                                    </label>
                                    <input
                                    type="text"
                                    name="nacionalidad-rep"
                                    id="nacionalidad-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Mexicana"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['nacionalidad-rep']}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        CURP
                                    </label>
                                    <input
                                    type="text"
                                    name="curp-rep"
                                    id="curp-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Número de CURP del representante"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['curp-rep']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        RFC
                                    </label>
                                    <input
                                    type="text"
                                    name="rfc-rep"
                                    id="rfc-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Número de RFC del representante"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['rfc-rep']}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Domicilio
                                    </label>
                                    <input
                                    type="text"
                                    name="domicilio-rep"
                                    id="domicilio-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Calle, número y colonia"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['domicilio-rep']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Estado Civil
                                    </label>
                                    <select
                                    type="text"
                                    name="estado-civil-rep"
                                    id="estado-civil-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    onChange={props.onChangeLegalHandler}
                                    >
                                        <option selected disabled hidden>Seleccionar:</option>
                                        <option>Soltero(a)</option>
                                        <option>Casado(a)</option>
                                        <option>Divorciado(a)</option>
                                        <option>Viudo(a)</option>
                                    </select>
                                    <span className="text-red-500 text-xs" >{props.errorLegal['estado-civil-rep']}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-6">
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Correo electrónico
                                    </label>
                                    <input
                                    type="text"
                                    name="email-rep"
                                    id="email-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Email del representante"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['email-rep']}</span>
                                </div>
                                <div className="col-span-4 sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Teléfono
                                    </label>
                                    <input
                                    type="text"
                                    name="tel-rep"
                                    id="tel-rep"
                                    className="shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mt-2 px-2 py-2 block w-full sm:text-sm border border-gray-300 rounded-lg"
                                    placeholder="Teléfono de diez dígitos del representante"
                                    onChange={props.onChangeLegalHandler}
                                    />
                                    <span className="text-red-500 text-xs" >{props.errorLegal['tel-rep']}</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Documento de identificación</label>
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
                                            { props.legalData['doc-upload'] ? (
                                                    <div className="my-1">
                                                        <span>{props.legalData['doc-upload'].name}</span>
                                                    </div>
                                                ) : (
                                                    <div></div>
                                                )
                                            }
                                            <span>Sube un archivo</span>
                                            <input id="doc-upload" name="doc-upload" type="file" className="sr-only" accept=".png, .jpg, .pdf" onChange={props.onChangeLegalFileHandler} />
                                        </label>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG o PDF</p>
                                        <span className="text-red-500 text-xs" >{props.errorLegal['doc-upload']}</span>
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

export default Legal