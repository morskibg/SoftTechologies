function main(input){

    let parsedObj = input.map(JSON.parse);
    function print(person) {
        console.log(`Name: ${person.name}\n` +
                    `Age: ${person.age}\n` +
                    `Date: ${person.date} `);
    }
    parsedObj.map(print);
}

main(['{"name":"Gosho","age":10,"date":"19/06/2005"}', '{"name":"Tosho","age":11,"date":"04/04/2005"}']);
