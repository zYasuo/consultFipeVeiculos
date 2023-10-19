import React, { useEffect, useState } from 'react';
import Select from 'react-select';

/**
 * Propriedades esperadas pelo componente de seleção de marca.
 */
interface BrandSelectProps {
    onChange: (marcas: string[]) => void;
}


/**
 * Componente para selecionar uma marca de carro.
 * Este componente consulta a API da FIPE para obter a lista de marcas de carros disponíveis,
 * exibindo-as em um dropdown para que o usuário possa selecionar uma.
 */
const BrandSelectComponent: React.FC<BrandSelectProps> = ({ onChange }) => {
    // Estado para armazenar as marcas recuperadas da API.
    const [marcas, setMarcas] = useState<{ label: string, value: string }[]>([]);

    // Estado para gerenciar se o componente está em carregamento (buscando dados da API).
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fazendo a chamada à API para recuperar as marcas.
        fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
            .then(response => response.json())
            .then(data => {
                // Transformando os dados recebidos para o formato adequado do componente Select.
                const dadosTransformados = data.map((item: { codigo: string, nome: string }) => ({
                    label: item.nome,
                    value: item.codigo
                }));
                setMarcas(dadosTransformados);
                setLoading(false);
            })
            .catch(error => {
                // Em caso de erro na chamada da API, logamos o erro no console.
                console.error('Erro ao buscar marcas:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="relative">
            {/* Usando o componente Select para exibir as marcas e permitir a seleção */}
            <Select
                isMulti
                isLoading={loading}
                options={marcas}
                onChange={(opcaoSelecionada: any) => onChange(opcaoSelecionada.value)}
                placeholder={loading ? "Carregando..." : "Selecione uma marca"}
                isDisabled={loading}
            />
            {/* Mostrando um loader quando o componente estiver carregando */}
            {loading && <div className="absolute inset-0 bg-gray-200 opacity-50 flex items-center justify-center">
                <span className="loader"></span>
            </div>}
        </div>
    );
}

export default BrandSelectComponent;