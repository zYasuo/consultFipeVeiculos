import React, { useState } from 'react';
import BrandSelectComponent from './BrandSelectComponent';
import ModelSelectComponent from './ModelSelectComponent';
import YearSelectComponent from './YearSelectComponent';

/**
 * Interface para representar o estado do filtro de veículos.
 */
interface VehicleFilterProps {
    onBrandChange: (marca: string) => void;
    onModelChange: (modelo: string) => void;
    onYearChange: (ano: string) => void;
}


/**
 * Componente que permite aos usuários filtrar veículos por marca, modelo e ano.
 * Criei este componente pensando em uma maneira modular de filtrar veículos.
 * A ideia é que o usuário possa escolher primeiro uma marca, depois um modelo
 * com base na marca escolhida e, por fim, um ano.
 */
const VehicleFilterComponent: React.FC<VehicleFilterProps> = ({ onBrandChange, onModelChange, onYearChange }) => {
    const [marca, setMarca] = useState<string | null>(null);
    const [modelo, setModelo] = useState<string | null>(null);
    const [ano, setAno] = useState<string | null>(null);

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Filtre por veículo</h2>

            <div className="space-y-4">
                {/* Componente para selecionar a marca */}
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="brand">Marca:</label>
                    <BrandSelectComponent onChange={(novaMarca) => {
                        setMarca(novaMarca);
                        setModelo(null);
                        setAno(null);
                        onBrandChange(novaMarca);
                    }} />
                </div>

                {marca && (
                    <div>
                        {/* Componente para selecionar o modelo baseado na marca escolhida */}
                        <label className="block text-sm font-medium mb-2" htmlFor="model">Modelo:</label>
                        <ModelSelectComponent marca={marca} selectedModel={modelo} onChange={setModelo} />
                    </div>
                )}

                {marca && modelo && (
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="year">Ano:</label>
                        <YearSelectComponent marca={marca} modelo={modelo} onChange={setAno} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default VehicleFilterComponent;
