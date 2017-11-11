function logAllSymetrical(inputNum) {
    let num = Number(inputNum[0]);
    let result = '';
    for (let i = 1; i <= num; ++i) {
        if (isSymetricNum(i.toString())) {
            result += i.toString() + ' ';
        }
    }
    console.log(result);

    function isSymetricNum(stringNum) {

        for (let i = 0; i < stringNum.length / 2; ++i) {
            if (stringNum[i] != stringNum[stringNum.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}
