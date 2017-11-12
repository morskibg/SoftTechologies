function main(input){

    let size = Number(input[0]);
    let nums = new Array(size).fill(0);
    for(let i = 1; i < input.length; ++i){
        let pair = input[i].split(' - ').map(Number);
        nums[pair[0]] = pair[1];
    }

    console.log(nums.join('\n'));
}
let inp = ['5', '0 - 3', '3 - -1', '4 - 2'];
main(inp);