//DRE - Demonstração dos resultados do exercicio - Podendo ser feita no periodo de 1 mês, 1 trimestre, 1 semestre ou 1 ano//


const btn = document.querySelector("#send");

btn.addEventListener("click",function(e){

    e.preventDefault();

    const receitaBruta = document.querySelector("#contas-receitaBruta",);
    const recFin = document.querySelector("#recFin",);
    const recNaoOp = document.querySelector("#recNaoOp",);
    const devolucoes = document.querySelector("#devolucoes",);
    const impostosSobreVenda = document.querySelector("#impostosSobreVenda",);
    const cmv = document.querySelector("#cmv",);
    const cpv = document.querySelector("#cpv",);
    const csp = document.querySelector("#csp",);
    const despAdm = document.querySelector("#despAdm",);
    const despCom = document.querySelector("#despCom",);
    const despDep = document.querySelector("#despDep",);
    const despFin = document.querySelector("#despFin",);
    const despNaoOp = document.querySelector("#despNaoOp",);

    const dados = [
        receitaBruta.value, 
        recFin.value, 
        recNaoOp.value, 
        devolucoes.value, 
        impostosSobreVenda.value,
        cmv.value,
        cpv.value,
        csp.value,
        despAdm.value,
        despCom.value,
        despDep.value,
        despFin.value,
        despNaoOp.value,
    ]

    console.log(dados);
})

//Botão Calcula Receita Liquida

const funcao1 = document.querySelector("#funcao1");

funcao1.addEventListener("click",function(e){

    e.preventDefault();

    const receitaLiqF = function(liqReceita){
        return liqReceita = btn.dados[0] + btn.dados[3] + btn.dados[4];
    }
    const receitaLiquida = receitaLiqF().value;

    alert(receitaLiquida)

});

/**************************************************************************/
/* 
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
    console.log(`O Lucro Liquido do periodo foi: ${formulas.LucroLiquido()}`) */