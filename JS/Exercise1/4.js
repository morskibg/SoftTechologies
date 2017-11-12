function main(input){


    let minusCounter = 0;
    let isZero = false;
    for(let i = 0; i < 3; ++i){
        if(input[i] < 0){
            ++minusCounter;
        }
        if(input[i] === 0){
            isZero = true;
            break;
        }
    }
    if(isZero || minusCounter % 2 == 0){

        console.log('Positive');
    }
    else{
        console.log('Negative');
    }
}
let iin = ["2", "3", "-1"]
main(iin)
