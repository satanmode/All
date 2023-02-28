// n! = n * (n - 1) * (n - 2) * ...*1

function factorial(data) {
    if (typeof(data) !== 'number' || !Number.isInteger(data)) {
        console.log('Ошибочка');
    }

    if (data >= 1) {
        return data * factorial (data -1);
    } else {
        return 1
    }
}
console.log(factorial(5))


function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    return n ? n * factorial(n - 1) : 1;
}

factorial(5)