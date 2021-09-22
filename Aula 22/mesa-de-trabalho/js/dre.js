//DRE - Demonstração dos resultados do exercicio - Podendo ser feita no periodo de 1 mês, 1 trimestre, 1 semestre ou 1 ano//

//Receita Operacional Bruta - Faturamento total da empresa no periodo
let receitaBruta = 100000;


//***********Despesas******************/
//Devoluções do periodo;
let devolucoes = 1000;
//Devoluções pagos no periodo;
let impostosSobreVenda = 19000;
//Custo mercadoria vendida;
let cmv = 15000;
//Custo produto vendido;
let cpv = 15000;
//Custo serviço prestado;
let csp = 10000;
//Despesas Administrativas - Gastos com o departamento administrativo;
let despAdm = 10000;
//Despesas Comerciais - Gastos com o departamento comercial, departamento de vendas;
let despCom = 5000;
//Despesas de Depreciação - Equipamentos e maquinas quebrados, obsoletos;
let despDep = 2000;
//Despesas financeiras - Taxas de emprestimos;
let despFin = 1000;
//Despesas não Operacionais - Gastos que não te relação com a operação EX: gastos de reforma de imoveis;
let despNaoOp = 10000;


//***********Receitas******************/
//Receitas Financeira - Investimentos em ações, aluguel de algum bem, ou seja, dinheiro que rende;
let recFin = 3000;
//Receita Não Operacionais - São receitas não relacionadas com a operação. EX: lucro do aluguem de imoveis;
let recNaoOp = 15000;



/*******************************Funções DRE***********************************/

//1º - Fução para saber a receita liquida
function receitaLiq(liqReceita){
    return liqReceita = receitaBruta - (devolucoes + impostosSobreVenda);
}
console.log(receitaLiq());
console.log(`O total da Receita Liquida foi:  ${receitaLiq()}`)




//2º - Função para saber lucro bruto
//Variavel para adicionar a função 1
let funcao1 = [receitaLiq()];
//Função2
function lucroBruto(lucBruto){
    let custosProd = cmv + cpv + csp;
    return lucBruto =  funcao1 - custosProd;
}
console.log(lucroBruto())
console.log(`O total do Lucro Bruto foi:  ${lucroBruto()}`)



//3º - Fução para saber lucro/prejuizo operacional
//Variavel para adicionar a função 2
let funcao2 = [lucroBruto()];
//Função3
function lucPrejOp(lucPre){
    let custosProd = (despDep + despAdm + despCom + despFin) - recFin;
    return lucPre = funcao2 - custosProd;
}
console.log(lucPrejOp())
console.log(`O total do lucro/prejuizo operacional foi:  ${lucPrejOp()}`)





//4º - Função para saber o L.A.I.R - Lucro antes do Imposto de Renda;
//Variavel para adicionar a função 3
let funcao3 = [lucPrejOp()];
//Função4
function lair(LucIP){
    let antesIP = recNaoOp - despNaoOp;
    return LucIP = funcao3 - antesIP;
}
console.log(lair())
console.log(`O total do LAIR - Lucro antes do Imposto de Renda foi:  ${lair()}`)




/*5º - Função: Provisão do Imposto de Renda,  calcular 15% sobre o LAIR e;
Provisão Contribuição Social sobre o lucro liquido, calcular 9% sobre o LAIR;*/
//Variavel para adicionar a função 4*/
let funcLair = [lair()];
//Função5*/
function provisaoIR(p1){
    p1 = funcLair / 100 * 15
    return p1
}
console.log(provisaoIR())
console.log(`O total da provisao do IR foi:  ${(provisaoIR())}`)

function provisaoCSLL(p2){
    p2 = funcLair / 100 * 9
    return p2
}
console.log(provisaoCSLL())
console.log(`O total da provisao do CSLL foi:  ${(provisaoCSLL())}`)




//6º - Função para saber o Lucro Liquido
//Variavel para adicionar a função 5
let provIR = [provisaoIR()]
let provCSLL = [provisaoCSLL()]
//Função6
function LucroLiquido(LC){
    
    return LC = funcLair - (provIR - provCSLL)
}
console.log(LucroLiquido())
console.log(`O total do Lucro Liquido foi:  ${(LucroLiquido())}`)

