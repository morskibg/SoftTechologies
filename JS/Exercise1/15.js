function main(input){
   let obj = {};
   for(let kvp of input){
      let query = kvp.split(' -> ');
      if(query[0] === 'age' || query[0] === 'grade' ){
          obj[query[0]] = Number(query[1]);
      }
      else{
          obj[query[0]] = query[1];
      }

  }
  let  stringify = JSON.stringify(obj);
    console.log(stringify);
}
main(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia' ])