// Tabela com regras para ajudar na criação de funções puras

const regraTarifa = [
    { valorMinimo: 3.00, tempo: 120, custo: 3.00 },
    { valorMinimo: 1.75, tempo: 60,  custo: 1.75 },
    { valorMinimo: 1.00, tempo: 30,  custo: 1.00 }
];

export class Parquimetro {

    #LimiteMaximoTempo = 120;

    constructor() {
        this.tempoSomado = 0;
    }

    // Processar valores com métodos funcionais através da "regraTarifa"
    inserirMoeda(valor) {
        const regraEncontrada = regraTarifa.find(regra => valor >= regra.valorMinimo);

        if (!regraEncontrada) {
            return { sucesso: false, mensagem: "Saldo insuficiente para conversão." };
        }

        // verifica se tempo ultrapassa limite, caso ultrapasse, devolve o dinheiro
        
        if (this.tempoSomado + regraEncontrada.tempo > this.#LimiteMaximoTempo) {
            return {
                sucesso: false,
                mensagem: "Com este valor, excede o tempo permitido por pessoa.",
                tempoSomado: this.tempoSomado,
                troco: valor                   
            };
        }

        // Aplicar alterações ao estado
        this.tempoSomado += regraEncontrada.tempo;
        const trocoCalculado = valor - regraEncontrada.custo;

        return {
            sucesso: true,
            tempoSomado: this.tempoSomado,
            troco: trocoCalculado
        };
    }
}