
// Write a function in java script to calculate the age of a person,birth date given (28-02-1995) and output should be 27

function calculateAge(dob) {
    let temp = dob.toString();
    temp = temp.split('-').join('');

    const day = Number(temp.substr(0, 2));
    const month = Number(temp.substr(2, 2));
    const year = Number(temp.substr(4, 4));

    const dateOfBirth = new Date(year, month - 1, day);

    var diff_ms = Date.now() - dateOfBirth.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log('Your Age : ', calculateAge('28-02-1995'));