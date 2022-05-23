
// Функция `sumInput()`

function getSum() {
    
    function sumInput() {

        let arr = [];
  
            while (true) {
            let value = prompt("Введите значение");
            if (value === "" || value === null || !isFinite(value)) break;
            arr.push(+value);
            }
    
        let sort = arr.sort ((a,b) => a-b);
        alert (`Отсортировано по возрастанию: ${sort}`);

        let sum = 0;
        for (let arrItem of arr) {
        sum += arrItem;
        }
        return sum;
    }

        alert(`Сумма равна ${sumInput()}`);
}

let button = document.querySelector('button');
button.onclick = getSum;

// 2. Калькулятор расчета стоимости автомобиля в зависимости от комплектации. 

let arrCost = [];

let mark = document.querySelector("#mark");

mark.addEventListener("change", function(e) {
    document.querySelector('#error_marks').innerHTML = ''
    let selectMark = this.options[this.selectedIndex].value;
    if (this.selectedIndex == 0) {
        selectMark = 0;
        document.querySelector('#error_marks').innerHTML = 'Выберите марку автомобиля';
    }
    arrCost.push (+selectMark);
});

let gearbox = document.querySelector("#gearbox");

gearbox.addEventListener("change", function(e) {
    document.querySelector('#error_gearbox').innerHTML = ''
    let selectGearbox = this.options[this.selectedIndex].value;
    if (this.selectedIndex == 0) {
        selectGearbox = 0;
        document.querySelector('#error_gearbox').innerHTML = 'Выберите коробку передач';
    }
    arrCost.push (+selectGearbox);
});

let drive = document.querySelector("#drive");

drive.addEventListener("change", function(e) {
    document.querySelector('#error_drive').innerHTML = ''
    let selectDrive = this.options[this.selectedIndex].value;
    if (this.selectedIndex == 0) {
        selectDrive = 0;
        document.querySelector('#error_drive').innerHTML = 'Выберите привод';
    }
    arrCost.push (+selectDrive);
});

let carbody = document.querySelector("#carbody");

carbody.addEventListener("change", function(e) {
    document.querySelector('#error_carbody').innerHTML = ''
    let selectСarbody = this.options[this.selectedIndex].value;
    if (this.selectedIndex == 0) {
        selectСarbody = 0;
        document.querySelector('#error_carbody').innerHTML = 'Выберите тип кузова';
    }
    arrCost.push (+selectСarbody);
});

let btn1 = document.querySelector('.btn1');
let runs = document.querySelectorAll('input[name="runRadio"]');

btn1.addEventListener ('click', function() {
    document.querySelector('#error_run').innerHTML = ''
    for (let run of runs) {
    if (run.checked) {
        arrCost.push(+run.value);
        } else {  
        document.querySelector('#error_run').innerHTML = 'Выберите пробег автомобиля';
        }
    }
});

let btn2 = document.querySelector('.btn2');
let ages = document.querySelectorAll('input[name="ageRadio"]');

btn2.addEventListener ('click', function() {
    document.querySelector('#error_age').innerHTML = ''
    for (let age of ages) {
    if (age.checked) {
        arrCost.push(+age.value);
        } else {  
        document.querySelector('#error_age').innerHTML = 'Выберите возраст автомобиля';
        }
    }
});


let btn3 = document.querySelector('.btn3');

btn3.addEventListener ('click', function() {
    let checkboxes = document.querySelectorAll('input[name="check"]');
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                arrCost.push(+checkboxes[i].value); 
            }
        } 
    });
        
console.log(arrCost);


let result = document.querySelector(".main-form__button");

result.addEventListener("click", function(e) {
    document.querySelector('#error_all').innerHTML = '';
    if (arrCost.length == 0) {
    document.querySelector('#error_all').innerHTML = 'Заполните все поля!';
    } else {
    document.querySelector('#result span').innerHTML = arrCost.reduce((a,b)=>a+b);
    ;
    }
});



// тренировка

let arrOne = ['js', 'css', 'html'];

function getElement() {
    alert(arrOne[0]);
}    

///////////////////////////////////////////////////////

let arrTwo = [0, 1, false, 2, undefined, '', 3, null];

function filterArr() {
    alert(arrTwo.filter(Boolean));
    }

/////////////////////////////////////////////////////////

let arrThree = [[1,2], [1,2,3], [1,2,3,4]];

function findIndex() {
    arrThree.forEach (function (item, index, array) {
        if (item.length > 3) {
            alert(index)
        }
    });
}
