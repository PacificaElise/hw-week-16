
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


let runs = document.querySelectorAll('input[name="runRadio"]');
for (let run of runs) {
    if (run.checked) {
        console.log(+run.value);
    }
} // не получается вывести значение выбранной кнопки, хотела его добавить в массив(((

function getCheckedCheckBoxes() {
    let checkboxes = document.getElementsByClassName('main-form__radio-checkbox');
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                arrCost.push(+checkboxes[i].value); 
            }
        } 
    } // и тут тоже не получилось добавить в массив выбранные чекбоксы(((

console.log(arrCost);

let result = document.querySelector("#result");

result.addEventListener("click", function(e) {
    document.querySelector('#result span').innerHTML = arrCost.reduce((a,b)=>a+b);
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
