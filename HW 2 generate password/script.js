
function passRandom(num) {
    let passNumber = "0123456789";
    let passLettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLettersLow = "abcdefghijklmnopqrstuvwxyz";
    let passAll = passNumber + passLettersUp + passLettersLow;
    let passwordArray = Array(num);
    passwordArray[0] = passNumber;
    passwordArray[1] = passLettersUp;
    passwordArray[2] = passLettersLow;
    passwordArray.fill(passAll, 3);
    console.log(passwordArray);

    return randArray(passwordArray.map(function(x) {
        return x[Math.floor(Math.random() * x.length)] })).join('');
}

function randArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

alert(passRandom(8));

//функція, яка генерує випадковий пароль.
//function(8, дозволити маленькі букви, дозволити великі букви, дозволити числа, не дозволити спец символи)
