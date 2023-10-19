import React, { useEffect, useState } from 'react';
import Select from 'react-select';

/**
 * Propriedades esperadas pelo componente de seleção de ano.
 */
interface YearSelectProps {
    marca: string; // Marca do veículo
    modelo: string; // Modelo do veículo
    onChange: (ano: string) => void; // Função a ser chamada quando um ano for selecionado
}

/**
 * Componente para selecionar o ano de fabricação do carro baseado na marca e modelo escolhidos.
 * Este componente consulta a API da FIPE usando a marca e o modelo escolhidos para obter a lista de anos disponíveis,
 * exibindo-os em um dropdown para que o usuário possa selecionar um.
 */
const YearSelectComponent: React.FC<YearSelectProps> = ({ marca, modelo, onChange }) => {
    // Estado para armazenar os anos recuperados da API.
    const [anos, setAnos] = useState<{ label: string, value: string }[]>([]);

    useEffect(() => {
        // Fazendo a chamada à API para recuperar os anos baseado na marca e modelo escolhidos.
        fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos`)
            .then(response => response.json())
            .then(data => {
                // Transformando os dados recebidos para o formato adequado do componente Select.
                const dadosTransformados = data.map((item: { codigo: string, nome: string }) => ({
                    label: item.nome,
                    value: item.codigo
                }));
                setAnos(dadosTransformados);
            })
            .catch(error => {
                // Em caso de erro na chamada da API, logamos o erro no console.
                console.error('Erro ao buscar anos:', error);
            });
    }, [marca, modelo]);

    return (
        // Usando o componente Select para exibir os anos e permitir a seleção
        <Select
            options={anos}
            onChange={(opcaoSelecionada: any) => onChange(opcaoSelecionada.value)}
            placeholder="Selecione um ano"
        />
    );
};

export default YearSelectComponent;
