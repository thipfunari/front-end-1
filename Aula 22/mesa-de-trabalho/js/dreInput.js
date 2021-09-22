//DRE - Demonstração dos resultados do exercicio - Podendo ser feita no periodo de 1 mês, 1 trimestre, 1 semestre ou 1 ano//


let contas = {
    //Receita Operacional Bruta - Faturamento total da empresa no periodo
    receitaBruta: 200000,
    //Devoluções do periodo;
    devolucoes: -2000,
    //Devoluções pagos no periodo;
    impostosSobreVenda: -5000,
    //Custo mercadoria vendida;
    cmv: -10000,
    //Custo produto vendido;
    cpv: -15000,
    //Custo serviço prestado;
    csp: -4000,
    //Despesas Administrativas - Gastos com o departamento administrativo;
    despAdm: -25000,
    //Despesas Comerciais - Gastos com o departamento comercial, departamento de vendas;
    despCom: -40000,
    //Despesas de Depreciação - Equipamentos e maquinas quebrados, obsoletos;
    despDep: -3000,
    //Despesas financeiras - Taxas de emprestimos;
    despFin: -6000,
    //Despesas não Operacionais - Gastos que não te relação com a operação EX: gastos de reforma de imoveis;
    despNaoOp: -1000,
    //Receitas Financeira - Investimentos em ações, aluguel de algum bem, ou seja, dinheiro que rende;
    recFin: 30000,
    //Receita Não Operacionais - São receitas não relacionadas com a operação. EX: lucro do aluguem de imoveis;
    recNaoOp: 20000,
}


let formulas = {
//1º - Fução para saber a receita liquida
receitaLiq: function(liqReceita){
    return liqReceita = contas.receitaBruta + contas.devolucoes + contas.impostosSobreVenda;
},
//2º - Função para saber lucro bruto
lucroBruto: function(lucBruto){
    let custosProd = contas.cmv + contas.cpv + contas.csp;
    return lucBruto =  formulas.receitaLiq() + custosProd;
},
//3º - Fução para saber lucro/prejuizo operacional
lucPrejOp: function(lucPre){
    let custosProd = contas.despDep + contas.despAdm + contas.despCom + contas.despFin + contas.recFin;
    return lucPre = formulas.lucroBruto() + custosProd;
},
//4º - Função para saber o L.A.I.R - Lucro antes do Imposto de Renda;
lair: function(LucIP){
    let antesIP = contas.recNaoOp + contas.despNaoOp;
    return LucIP = formulas.lucPrejOp() + antesIP;
},
//5º - Função: Provisão do Imposto de Renda,  calcular 15% sobre o LAIR e;
provisaoIR: function(p1){
    p1 = formulas.lair() / 100 * 15
    return p1
},
///6º - Função:Provisão Contribuição Social sobre o lucro liquido, calcular 9% sobre o LAIR;
provisaoCSLL: function(p2){
    p2 = formulas.lair() / 100 * 9
    return p2
},
//7º - Função para saber o Lucro Liquido
LucroLiquido: function(LC){
    let resulImp = formulas.provisaoIR() + formulas.provisaoCSLL()
    return LC = formulas.lair() - resulImp
},
}

console.log(`A receita liquida do periodo foi: ${formulas.receitaLiq()}`)
console.log(`O lucro bruto do periodo foi: ${formulas.lucroBruto()}`)
console.log(`O lucro/prejuizo operacional do periodo foi: ${formulas.lucPrejOp()}`)
console.log(`O L.A.I.R - Lucro antes do Imposto de Renda do periodo foi: ${formulas.lair()}`)
console.log(`A Provisão do Imposto de Renda do periodo foi: ${formulas.provisaoIR()}`)
console.log(`A Provisão da Contribuição Social do periodo foi: ${formulas.provisaoCSLL()}`)
console.log(`O Lucro Liquido do periodo foi: ${formulas.LucroLiquido()}`)