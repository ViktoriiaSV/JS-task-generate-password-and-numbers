
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














//
// // function passRandom (num) {
// //
// //     // let stringPass = '';
// //
// //     let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L,' 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k,' 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// //
// //     let randomPass = [];
// //
// //     for (let i = 0; i <= num; i++){
// // randomPass += Math.random()*random.length;
// //
// // // stringPass += random[i];
// //
// //         console.log(randomPass);
// //     }
// //
// //
// //
// // }
// // passRandom(8);

// !@#$%^&*'

//let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])$/;

//функція, яка генерує випадковий пароль.
//function(8, дозволити маленькі букви, дозволити великі букви, дозволити числа, не дозволити спец символи)
