// ConsultaVeiculo.tsx

import React, { useState } from 'react';
import VehicleFilterComponent from './VeiculosComponents/VehicleFilterComponent';
import VehicleDetailsComponent from './VeiculosComponents/VehicleDetailsComponent';

const ConsultaVeiculo: React.FC = () => {
    const [marca, setMarca] = useState<string | null>(null);
    const [modelo, setModelo] = useState<string | null>(null);
    const [ano, setAno] = useState<string | null>(null);


    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Consulta de Veículos</h1>
            <div className="bg-white p-6 rounded shadow-md">
                <VehicleFilterComponent onBrandChange={setMarca} onModelChange={setModelo} onYearChange={setAno} />
                <VehicleDetailsComponent marca={marca} modelo={modelo} ano={ano} />
            </div>
        </div>
    );
}

export default ConsultaVeiculo;
