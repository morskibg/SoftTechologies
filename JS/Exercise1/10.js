function main(input){

    let size = input.length;
    let nums = [];
    for (let i = 0; i < size; ++i){
        let query = input[i].split(' ');
        let command = query[0];
        let digit = Number(query[1]);
        switch(command){
            case 'add':
                nums.push(digit);
                break;
            case 'remove':
                if(digit >= 0 && digit < nums.length){
                    nums.splice(digit, 1);
                }
                break;
        }
    }
    console.log(nums.join('\n'));
}
let inn = ['add 2', 'add 3', 'add 4', 'remove 0'];
main(inn);