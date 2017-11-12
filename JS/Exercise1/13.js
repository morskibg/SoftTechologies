function storingObjects(objects) {

    function parseStudent(str) {
        str = str.split(" -> ");
        return {
            name: str[0],
            age: Number(str[1]),
            grade: Number(str[2])
        };
    }

    let students = objects.map(parseStudent);

    function printStudent(student) {
        console.log(
            `Name: ${student.name}\n` +
            `Age: ${student.age}\n` +
            `Grade: ${student.grade.toFixed(2)}`
        );
    }

    students.map(printStudent);
}
storingObjects(['Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Toni -> 13 -> 4.90']);