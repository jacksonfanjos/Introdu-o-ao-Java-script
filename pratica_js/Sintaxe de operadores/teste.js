function comparaNumeros(num1,num2){
  if(!num1 || !num2) return "Defina os numeros "
  const primeiraFrase = criaPrimeirafrase(num1,num2);
  const segundaFrase = criaSegundafrase(num1,num2);

  return`${primeiraFrase} ${segundaFrase}`
}

function criaPrimeirafrase(num1,num2){
  let saoIguais ='';
  
  if(num1 !== num2) {
    saoIguais =`não`;
  }

  return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais`;
}

function criaSegundafrase(num1,num2){

  let resultado10 =`menor`;
  let resultado20 =`menor`;


  const soma = num1 + num2;
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if(compara10){
    resultado10 = ` maior`;
  }
  if(compara10) {
    
  }

  if(compara20) {
    resultado20 = `maior`;
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumeros(5,5));