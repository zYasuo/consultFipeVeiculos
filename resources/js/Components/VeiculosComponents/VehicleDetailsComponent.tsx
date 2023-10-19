// VeiculosComponents/VehicleDetailsComponent.tsx

import React from 'react';

interface VehicleDetailsProps {
    marca: string | null;
    modelo: string | null;
    ano: string | null;
}


const VehicleDetailsComponent: React.FC<VehicleDetailsProps> = ({ marca, modelo, ano }) => {
    console.log("Marca:", marca);
    console.log("Modelo:", modelo);
    console.log("Ano:", ano);
    return (
        <div className="mt-6 p-4 rounded shadow-md bg-white">
            <h3 className="text-xl font-medium mb-4">Detalhes do Veículo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <span className="text-gray-500">Marca:</span> {marca || '-'}
                </div>
                <div>
                    <span className="text-gray-500">Modelo:</span> {modelo || '-'}
                </div>
                <div>
                    <span className="text-gray-500">Ano:</span> {ano || '-'}
                </div>
            </div>
        </div>
    );
};

export default VehicleDetailsComponent;
