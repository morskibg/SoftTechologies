function printLines(lines) {

    for (let line of lines) {
        if (line === "Stop") {
            break;
        }

        console.log(line);
    }
}