const alunos = [
  { 
    nome: 'João',
    nota: 5,
    turma: '18',
  },
  { 
    nome: 'Sofia',
    nota: 9,
    turma: '5b',
  },
  { 
    nome: 'Jackson',
    nota: 10,
    turma: '8l',
  },
  { 
    nome: 'Thais',
    nota: 4,
    turma: '8l',
  },
]

function alunosAprovados(arr, media) {
  let aprovaddos = [];

  for( let i= 0 ; i < arr.length; i++ ) {

    const {nota, nome } = arr[i];
  

    if( nota >= media) {
      aprovaddos.push(nome);
    }
  }

  return aprovaddos;
}

console.log(alunosAprovados(alunos, 5))