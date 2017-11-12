function main(input){
    let students = {};
    input.map(x => x.split(' -> '))
        .forEach(query => {
            let key = query[0];
            let value = isNaN(Number(query[1])) ?
                query[1] : Number(query[1]);
                students[key] = value;
        });
    console.log(JSON.stringify(students));
}
main(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia' ])