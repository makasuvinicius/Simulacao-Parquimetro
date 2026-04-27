
// LISTA DE COISAS QUE FALTAM NO CÓDIGO

    // Colocar limite de valor que pode ser adicionado no próprio campo. (Talvez uns 3)
    // Fazer um somatório no tempo adicionado (Exp abaixo)
    // > Se colocar 1.15, tempo = 30min, volta .15 no troco. Se colocar + 2 por exemplo: Tempo "30min" + 60min = 90 MINUTOS, volta .25 no troco.

// CRIAÇÃO DA CLASSE PRINCIPAL

class Parquimetro {
    constructor(valorColocado) {
        this.valorColocado = valorColocado;
        this.tempoConvertido = null;
        this.troco = null;
    }

    // CALCULAR O TEMPO QUE APARECERÁ NO PARQUIMETRO
    // Se um valor for entre um e outro, aparecerá certo tempo.

    calcularTempo() {

        if(this.valorColocado >= 1 && this.valorColocado < 1.75) {this.tempoConvertido = "30 minutos"}

        else if(this.valorColocado >= 1.75 && this.valorColocado < 3) {this.tempoConvertido = "60 minutos"}

        else if(this.valorColocado >= 3) {this.tempoConvertido = "120 minutos"}

        else(alert ("Ativação do ELSE no [calcularTempo()]")) // Depois dar uma olhada melhor nessa linha do else.

    }

    // TROCO QUE RETORNARÁ
    // O troco será: Valor Total Inserido - Valor usado para pegar a quantidade específica de tempo no Parquimetro.

    calcularTroco() {

        if(this.tempoConvertido === "30 minutos") {this.troco = this.valorColocado - 1}

        else if(this.tempoConvertido === "60 minutos") {this.troco = this.valorColocado - 1.75}

        else if(this.tempoConvertido === "120 minutos") {this.troco = this.valorColocado - 3}

        else(alert ("Ativação do ELSE no [calcularTroco()]")) // Outro ELSE, depois dar uma olhada, e tenta ativá-lo nos testes.

    }

    // RESULTADO COM IF PARA EVITAR ERROS.

    exibirResultado() {

        //Depois criar os IF e ELSES para esta seção.

        document.getElementById("resultado").textContent = `Tempo: ${this.tempoConvertido} | Troco: R$ ${this.troco.toFixed(2)}`;
        // Depois dar uma olhada nas CLASSES do CSS. (Erro e Sucesso). Exibidos nessa linha aqui

    }
}

// FUNÇÃO PRINCIPAL PARA FAZERT TUDO FUNCIONAR

function calculoPrincipal() {

    const valor = parseFloat(document.getElementById("valorGasto").value)

    if (isNaN(valor) || valor < 0) {

        alert("Digite um valor válido | ATIVAÇÃO IF EM FUNCTION [calculoPrincipal()]")
        // document.getElementById("resultado").textContent = "Digite um valor válido" || DEPOIS MODIFICAR ESTE IF, FAVOR NÃO ESQUECER!!!
        return
    }

    const parquimetroCalculado = new Parquimetro(valor)

    parquimetroCalculado.calcularTempo();
    parquimetroCalculado.calcularTroco();
    parquimetroCalculado.exibirResultado();

    document.getElementById("valorGasto").value = "";

}