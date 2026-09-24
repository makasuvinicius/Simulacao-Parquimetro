import { Parquimetro } from "./classes.js";

const parquimetro = new Parquimetro();

// Pegar valor do input tratando os dados.

export const obterValorInformado = () => {
    const input = document.getElementById("valorGasto");
    const valor = parseFloat(input.value);
    return isNaN(valor) ? null : valor;
};

// Limpar campos de entrada
export const limparInput = () => {
    document.getElementById("valorGasto").value = "";
}

// Atualiza mensagens e resultados na tela
export const atualizarTela = ({ tempoSomado, troco, mensagem }) => {
    const resultado = document.getElementById("resultado");
    const aviso = document.getElementById("aviso");

    aviso.textContent = mensagem || "";

    if (tempoSomado !== undefined && troco !== undefined) {
        resultado.textContent = `Tempo: ${tempoSomado} minutos | Dinheiro retornado: R$ ${troco.toFixed(2)}`;
    } else {
        resultado.textContent = "";
    }
};

// Função principal disparada com click

export function calculoPrincipal() {
    const valor = obterValorInformado();

    if (!valor || valor < 1 || valor > 5) {
        atualizarTela({ mensagem: "Insira um valor válido (entre R$ 1,00 e R$ 5,00)." });
        return;
    }

    const resultadoProcessado = parquimetro.inserirMoeda(valor);

    atualizarTela({
        tempoSomado: resultadoProcessado.tempoSomado,
        troco: resultadoProcessado.troco,
        mensagem: resultadoProcessado.mensagem
    });

    limparInput()
}