function calculeIdade(anos){
  return`Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} de idade.`;
}

const pessoa1 = {
  nome: "Maria",
  idade: 30,
};

const pessoa2 = {
  nome: "joão",
  idade: 60,
};

const pessoa3 = {
  nome: "lucas",
  idade: 25,
};

const pet = {
  nome: "bebe",
  idade: 6,
  raça: "pug",
};

console.log(calculeIdade.call(pet, 30));