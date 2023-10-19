import React, { useEffect, useState } from 'react';
import Select from 'react-select';

/**
 * Propriedades esperadas pelo componente de seleção de modelo.
 */
interface ModelSelectProps {
    marca: string;
    selectedModel: string | null;
    onChange: (model: string) => void;
}

/**
 * Componente para selecionar um modelo de carro baseado na marca escolhida.
 * Este componente consulta a API da FIPE usando a marca escolhida para obter a lista de modelos disponíveis,
 * exibindo-os em um dropdown para que o usuário possa selecionar um.
 */
const ModelSelectComponent: React.FC<ModelSelectProps> = ({ marca, selectedModel, onChange }) => {
    // Estado para armazenar os modelos recuperados da API.
    const [modelos, setModelos] = useState<{ label: string, value: string }[]>([]);

    // Estado para gerenciar se o componente está em carregamento (buscando dados da API).
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fazendo a chamada à API para recuperar os modelos baseado na marca escolhida.
        fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`)
            .then(response => response.json())
            .then(data => {
                // Transformando os dados recebidos para o formato adequado do componente Select.
                const dadosTransformados = data.modelos.map((item: { codigo: string, nome: string }) => ({
                    label: item.nome,
                    value: item.codigo
                }));
                setModelos(dadosTransformados);
                setLoading(false);
            })
            .catch(error => {
                // Em caso de erro na chamada da API, logamos o erro no console.
                console.error('Erro ao buscar modelos:', error);
                setLoading(false);
            });
    }, [marca]);

    return (
        <div className="relative mt-4">
            {/* Usando o componente Select para exibir os modelos e permitir a seleção */}
            <Select

                value={selectedModel ? modelos.find(m => m.value === selectedModel) : null}
                options={modelos}
                onChange={(opcaoSelecionada: any) => onChange(opcaoSelecionada.value)}
                placeholder={loading ? "Carregando..." : "Selecione um modelo"}
                isDisabled={loading}
            />

            {/* Mostrando um loader quando o componente estiver carregando */}
            {loading && <div className="absolute inset-0 bg-gray-200 opacity-50 flex items-center justify-center">
                <span className="loader"></span>
            </div>}
        </div>
    );
}

export default ModelSelectComponent;