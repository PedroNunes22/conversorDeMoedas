function converterMoeda() {
    var nomePessoa = document.getElementById('nomePessoa').value;
    var valorEmDolar = parseFloat(document.getElementById('valorDolar').value);
    var cotacaoDoDolar = 4.91;

    var valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal = valorEmReal.toFixed(2);

    var resultado = 'Olá ' + nomePessoa + ', o valor solicitado em dólar convertido em reais é de R$ ' + valorEmReal;

    document.getElementById('resultado').innerText = resultado;
}