// JS прототипно ориентированный


//..................................................................................................................
//СОРТИРОВКА МАССИВА С ЦИФРАМИ  
const arr = [2, 12, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
compareNum()


//..................................................................................................................
//ПЕРЕБОР МАССИВА 
const arr = [1, 2, 3, 6, 8];
arr.forEach(function(item, namber, arr){
    console.log(`${namber}: ${item} внутри массива ${arr}`);    
})


//..................................................................................................................
//СКОЛЬКО СВОЙСТВ В ОБЪЕКТЕ
const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    color: {
        border: "black",
        bg: 'red'
    },
};

console.log(Object.keys(options).length);

//..................................................................................................................
//ФИБОНАЧИ
function fib(number) {
    if (number < 0)
    return console.log("Ошибка, проверьте данные");

    if(typeof (number) !== 'number')
    return console.log('')

    let result = 0; // 2 
    let ferst = -1; // 1
    let second = 1; // 2
    let fibo = [];

    for (let i = 1; i <= number; i++) {
        result = ferst + second // 2
        ferst = second // 2
        second = result // 2
        fibo.push(result)
        }
        return console.log(fibo.join(' '))              
}



//..................................................................................................................
// ФАКТОРИАЛ В РЕКУРСИИ

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



//..................................................................................................................
//КАКОЕ ВАШЕ КУПЕ
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number'|| length < 0 || !Number.isInteger(length)) {
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    }
    if (length === 0 || length > 36) {
        return console.log("Таких мест не существует");
    }

return console.log("Ваше купе: " + (Math.ceil(length / 4)));             
}

calculateVolumeAndArea(7);  


//..................................................................................................................
// РАБОТА С ОБЪЕКТАМИ
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);


//..................................................................................................................
// Вычисление бюджета хватает ли
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    ploshad = 0;
    ploshadlocal = 0;
    volume = 0; 
    heightGlobal = data.height
    volumelocal = 0;
    count = 0;
    i = 1
    data.shops.forEach(shop => {
        ploshadlocal = shop.length * shop.width;
        console.log(`Площадь ${i} магазина = ` + ploshadlocal);

        ploshad += shop.length * shop.width;

        volumelocal = shop.length * shop.width * heightGlobal;
        console.log(`Объем ${i} магазина = ` + volumelocal);

        volume += shop.length * shop.width * heightGlobal;

        i += 1 ;
    })
      console.log('Общаяя площадь тц = ' + ploshad + ' метров.'); 
      console.log('Общий объем тц = ' + volume + ' метров квадратных.');
    
      if(data.moneyPer1m3 * volume <= data.budget) {
        console.log('Вам хватает бюджета');

      } else {
        console.log('Проебано')
      }
}
            
isBudgetEnough(shoppingMallData)

//..................................................................................................................
// Рекурсия 

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        some: {

        }
    }
};

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length]
    } else {
        let total = [0 ,0];
        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students)
console.log(result[0] / result[1]);