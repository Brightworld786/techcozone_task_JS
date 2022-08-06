
// Start with any positive integer if the number is odd, then multiply the number by three and add one, otherwise, divide it by two repeat as many times as desired.

function fun(noOfTimes) {
    // gessing some postive integrer (1 - 10).
    let integer = Math.floor(Math.random() * 10) + 1;
    console.log('Poitive Integer : ', integer);

    for (let i = 0; i < noOfTimes; i++) {
        if (integer % 2 == 0) {
            integer = integer / 2;
        } else {
            integer = (integer * 3) + 1;
        }

        console.log('Iteration ' + (i + 1) + ' : ' + integer);
    }
}

fun(5);