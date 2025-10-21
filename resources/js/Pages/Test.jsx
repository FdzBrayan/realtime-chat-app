import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Test({ mensaje, usuario }) {
    // Estado local de React
    const [contador, setContador] = useState(0);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Página de Prueba
                </h2>
            }
        >
            <Head title="Test" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-2xl font-bold mb-4">
                                ¡Inertia funciona!
                            </h3>
                            
                            {/* Datos de Laravel */}
                            <div className="mb-6 p-4 bg-blue-50 rounded">
                                <p className="mb-2">
                                    <strong>Mensaje desde Laravel:</strong> {mensaje}
                                </p>
                                <p>
                                    <strong>Usuario:</strong> {usuario}
                                </p>
                            </div>

                            {/* Estado de React */}
                            <div className="p-4 bg-green-50 rounded">
                                <h4 className="font-bold mb-2">Contador (Estado de React):</h4>
                                <p className="text-3xl font-bold mb-4">{contador}</p>
                                <div className="space-x-2">
                                    <button
                                        onClick={() => setContador(contador + 1)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                    >
                                        Incrementar
                                    </button>
                                    <button
                                        onClick={() => setContador(contador - 1)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Decrementar
                                    </button>
                                    <button
                                        onClick={() => setContador(0)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}