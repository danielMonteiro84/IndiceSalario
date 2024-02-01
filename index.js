import entradaDados from 'readline-sync';

let salarioMinimo = [
    {ano: 1995, salMin: 100.00},
    {ano: 1996, salMin: 112.00},
    {ano: 1997, salMin: 120.00},
    {ano: 1998, salMin: 130.00},
    {ano: 1999, salMin: 136.00},
    {ano: 2000, salMin: 151.00},
    {ano: 2001, salMin: 180.00},
    {ano: 2002, salMin: 200.00},
    {ano: 2003, salMin: 240.00},
    {ano: 2004, salMin: 260.00},
    {ano: 2005, salMin: 300.00},
    {ano: 2006, salMin: 350.00},
    {ano: 2007, salMin: 380.00},
    {ano: 2008, salMin: 415.00},
    {ano: 2009, salMin: 465.00},
    {ano: 2010, salMin: 510.00},
    {ano: 2011, salMin: 545.00},
    {ano: 2012, salMin: 622.00},
    {ano: 2013, salMin: 678.00},
    {ano: 2014, salMin: 724.00},
    {ano: 2015, salMin: 788.00},
    {ano: 2016, salMin: 880.00},
    {ano: 2017, salMin: 937.00},
    {ano: 2018, salMin: 954.00},
    {ano: 2019, salMin: 998.00},
    {ano: 2020, salMin: 1045.00},
    {ano: 2021, salMin: 1100.00},
    {ano: 2022, salMin: 1212.00},
    {ano: 2023, salMin: 1320.00},
  
]

let inflacao = [
    {ano: 1995, ipca: 22.41},
    {ano: 1996, ipca: 9.56},
    {ano: 1997, ipca: 5.22},
    {ano: 1998, ipca: 1.66},
    {ano: 1999, ipca: 8.94},
    {ano: 2000, ipca: 5.97},
    {ano: 2001, ipca: 7.67},
    {ano: 2002, ipca: 12.53},
    {ano: 2003, ipca: 9.30},
    {ano: 2004, ipca: 7.60},
    {ano: 2005, ipca: 5.69},
    {ano: 2006, ipca: 3.23},
    {ano: 2007, ipca: 4.46},
    {ano: 2008, ipca: 5.90},
    {ano: 2009, ipca: 4.31},
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.29},
    {ano: 2015, ipca: 9.32},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 3.45},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 3.67},
    {ano: 2020, ipca: 3.24},
    {ano: 2021, ipca: 10.74},
    {ano: 2022, ipca: 10.78},
    {ano: 2023, ipca: 4.62},
 
]

console.log(" \n\n-------------------------- MENU --------------------------\n");
console.log(` 1 - Listar os salários minímos desde o ínicio do plano real
 2 - Listar o índice IPCA desde o ínicio do plano real
 3 - Comparar o percentual do aumento salarial e o IPCA`);


 let opcao = entradaDados.question("Digite uma opção: ");
 opcao = Number(opcao);

 let anoLabel = "Ano: ";
 let salarioLabel = "Salário mínimo: ";
 let crescimentoLabel= "Crescimento Salarial: ";
 let ipcaLabel = "Inflação IPCA: ";

 anoLabel = anoLabel.padEnd(30,'.');
 salarioLabel = salarioLabel.padEnd(30,'.');
 crescimentoLabel = crescimentoLabel.padEnd(30,'.');
 ipcaLabel = ipcaLabel.padEnd(30,'.');


 switch (opcao){

    case 1:
        for (const salario of salarioMinimo){

            let ano = salario.ano;
            let valor = salario.salMin;

            console.log("\n");
            console.log(anoLabel + ano);
            console.log(salarioLabel + "R$ " + valor);
        }
        break;
    
    case 2:
        for (const indice of inflacao){

            let ano = indice.ano;
            let ipca = indice.ipca;

            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoLabel + ano);
            console.log(ipcaLabel+ipcaFormatado+"%");
        }
        break;
    
    case 3:
        case 3:
    for (let i = 1; i < salarioMinimo.length; i++) {
        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salMin;

        let salarioAnterior = salarioMinimo[i - 1].salMin;
        let diferenca = salario - salarioAnterior;

        let percentualCrescimento = (diferenca / salarioAnterior) * 100;
        let crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",") + "%";

        let ipca = inflacao[i].ipca;

        let salarioFormatado = salario.toFixed(2).replace(".", ",");
        let ipcaFormatado = ipca.toFixed(2).replace(".", ",");

        console.log("\n");
        console.log(anoLabel + ano);
        console.log(salarioLabel + "R$ " + salarioFormatado);
        console.log(crescimentoLabel + crescimentoFormatado);
        console.log(ipcaLabel + ipcaFormatado + "%");
    }
    break;

        default:
        console.log("Opção inválida");
        break;
 }