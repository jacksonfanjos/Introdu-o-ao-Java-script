function substituiPares(array){
  if(!array) return -1;
  if(!array.length) return -1;
  

  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      console.log("Voe já é zero")
    } else if (array[i] % 2 === 0) {
       console.log(`Substituindo ${array[i]} por 0...`);
      array[i] = 0;
    }
  }

  return array;
}

let arr =[1, 3, 4, 6, 80, 33, 223, 90]
console.log(substituiPares(undefined));
  
        
      
         
  

      