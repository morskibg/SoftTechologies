function main(input){
     let size = input.length;
     let dict = {};
     for(let i = 0; i < size - 1; ++i){
         let query = input[i].split(' ');
         let currKey = query[0];
         let value = query[1];
         dict[currKey] = value;
}
     let keyToLog = input[size - 1];
     let isKeyPresent = false;
     for(let key of Object.keys(dict)){
         if(key === keyToLog){
             isKeyPresent = true;
             break;
         }
     }
     if(!isKeyPresent){
         console.log('None');
     }
     else{
         console.log(dict[keyToLog]);
     }
}
let inn = ['key value', 'key eulav', 'test tset', 'key'];
main(inn);