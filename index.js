
let resultado = ranking(80, 15);
  console.log(resultado);
  

    function ranking(vitorias, derrotas){
        let saldoVitorias = vitorias - derrotas
        let nivel
        if (vitorias < 10){
            nivel = "Ferro"
        }else if (vitorias >= 11 && vitorias <= 20){
           nivel = "Bronze"
        }else if (vitorias >= 21 && vitorias <= 50) {
           nivel = "Prata"
        }else if (vitorias >= 51 && vitorias <= 80){
            nivel = "Ouro"
        } else if(nivel >= 81 && vitorias <=90){
             nivel = "Diamante"
        }else if (nivel >= 90 && vitorias <= 100){
           nivel = "Lendário"
        } else if (nivel > 101) {
            nivel = "Imortal"
        
    }
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
}


