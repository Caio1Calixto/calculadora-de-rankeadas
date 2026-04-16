var niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

var nomeDoHeroi = "Gaius"

function retornalSaldoDeRankeadas(vitorias, derrotas){
    let quantidade1 = vitorias
    let quantidade2 = derrotas
    let saldo = quantidade1 - quantidade2
    return saldo
}

//valores de exemplo: 134 vitórias e 45 Vitórias

let retornoDoSaldo = retornalSaldoDeRankeadas(134, 45)

while(retornoDoSaldo >= 0){
    if(retornoDoSaldo < 10){
        console.log(`O herói ${nomeDoHeroi} possui um saldo de ${retornoDoSaldo} que é menor do que 10 e está classificado como ${niveis}[0]`)
        break
    } else if(retornoDoSaldo > 10 && retornoDoSaldo <= 20){
        console.log(`O herói ${nomeDoHeroi} possui um saldo de ${retornoDoSaldo} e está classificado como ${niveis}[1]`)
        break
    } else if(retornoDoSaldo > 20 && retornoDoSaldo <= 50){
        console.log(`O herói ${nomeDoHeroi} possui um saldo de ${retornoDoSaldo} e está classificado como ${niveis}[2]`)
        break
    } else if(retornoDoSaldo > 50 && retornoDoSaldo <= 80){
        console.log(`O herói ${nomeDoHeroi} possui um saldo de ${retornoDoSaldo} e está classificado como ${niveis}[3]`)
        break
    } else if(retornoDoSaldo > 80 && retornoDoSaldo <= 90){
        console.log(`O herói ${nomeDoHeroi} possui um saldo de ${retornoDoSaldo} e está classificado como ${niveis[4]}`)
        break
    } else if(retornoDoSaldo > 90 && retornoDoSaldo <= 100){
        console.log(`O herói ${nomeDoHeroi} possui um saldo de ${retornoDoSaldo} e está classificado como ${niveis}[5]`)
        break
    } else if(retornoDoSaldo > 100){
        console.log(`O herói ${nomeDoHeroi} possui um saldo de ${retornoDoSaldo} e está classificado como ${niveis}[6]`)
        break
    }
}

if(retornoDoSaldo < 0){
    console.log("Impossível")
}