// CRIAÇÃO DA CLASSE PRINCIPAL

let tempoSomado = 0;

class Parquimetro {
    constructor(valorColocado) {
        this.valorColocado = valorColocado;
        this.tempoConvertido = null;
        this.troco = null;
    }

    // CALCULAR O TEMPO QUE APARECERÁ NO PARQUIMETRO
    // Se um valor for entre um e outro, aparecerá certo tempo.

    calcularTempo() {

        if(this.valorColocado >= 1 && this.valorColocado < 1.75) {this.tempoConvertido = 30}

        else if(this.valorColocado >= 1.75 && this.valorColocado < 3) {this.tempoConvertido = 60}

        else if(this.valorColocado >= 3) {this.tempoConvertido = 120}

        else(document.getElementById("aviso").textContent = "Saldo insuficiente para conversão");

    }

    // TROCO QUE RETORNARÁ
    // O troco será: Valor Total Inserido - Valor usado para pegar a quantidade específica de tempo no Parquimetro.

    calcularTroco() {

        if(this.tempoConvertido === 30) {this.troco = this.valorColocado - 1}

        else if(this.tempoConvertido === 60) {this.troco = this.valorColocado - 1.75}

        else if(this.tempoConvertido === 120) {this.troco = this.valorColocado - 3}

        else { this.troco = null }

        // Para evitar de ultrapassar o limite permitido.
        
        tempoSomado += parseFloat(this.tempoConvertido);

        if (tempoSomado > 120) {

            tempoSomado -= this.tempoConvertido
            this.troco = this.valorColocado
            document.getElementById("aviso").textContent = "Com este valor, excede o tempo permitido por pessoa."

            return
        }

    }

    // APENAS EXIBIR RESULTADO

    exibirResultado() {

        document.getElementById("resultado").textContent = `Tempo: ${tempoSomado} minutos | Dinheiro retornado: R$ ${this.troco.toFixed(2)}`;

    }
}

// FUNÇÃO PRINCIPAL PARA FAZER TUDO FUNCIONAR

function calculoPrincipal() {

    const valor = parseFloat(document.getElementById("valorGasto").value)

    if (isNaN(valor) || valor < 1 || valor > 5) {

        document.getElementById("aviso").textContent = "Insira um valor válido. (Valores entre R$ 1,00 e R$ 5,00)";
        return
    }

    if (valor >= 1 && valor <= 5) {

        document.getElementById("aviso").textContent = ""

    }

    const parquimetroCalculado = new Parquimetro(valor)

    parquimetroCalculado.calcularTempo();
    parquimetroCalculado.calcularTroco();
    parquimetroCalculado.exibirResultado();

    document.getElementById("valorGasto").value = "";

}