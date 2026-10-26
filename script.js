// Simulador de Rendimento de Investimento (CDB Agibank)
function calcularRendimento(valorInicial, meses) {
    const taxaMensal = 0.0085; // Simula 0.85% de rendimento ao mês
    let saldoTotal = valorInicial;

    console.log(`--- Simulando Investimento de R$ ${valorInicial.toFixed(2)} por ${meses} meses ---`);

    for (let i = 1; i <= meses; i++) {
        let rendimentoDoMes = saldoTotal * taxaMensal;
        saldoTotal += rendimentoDoMes;
        console.log(`Mês ${i}: Saldo acumulado = R$ ${saldoTotal.toFixed(2)} (Rendeu: R$ ${rendimentoDoMes.toFixed(2)})`);
    }

    let lucroTotal = saldoTotal - valorInicial;
    console.log(`\n--- Resultado Final ---`);
    console.log(`Valor Investido: R$ ${valorInicial.toFixed(2)}`);
    console.log(`Total após o período: R$ ${saldoTotal.toFixed(2)}`);
    console.log(`Lucro Líquido: R$ ${lucroTotal.toFixed(2)}`);
}

// Executa uma simulação de R$ 5.000 investidos por 6 meses
calcularRendimento(5000, 6);

