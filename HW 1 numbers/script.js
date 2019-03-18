
function numbersLength(num) {
    let str = '';
    str += num + '<br>';
    if (num === 1) {
        return str;
    }
    else
        {
        return str + numbersLength(num - 1);
    }
}
document.write(numbersLength(10));

//рекурсивна функція, яка виведе числа від 1 до n.
//function(10) повинна вивести 10, перенос строчки, 9...1.

