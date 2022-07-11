const numberList = [1, 2, 3, 4, 5, 6, 7];

//find: tìm phần tử đầu tiên thỏa điều kiện nào đó
Array.prototype.myFind = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        const number = this[i];
        if (callbackFn(number)) {
            return number;
        }
    }
}
function laSoChan(number) {
    return number % 2 === 0;
}

// console.log(numberList.myFind(laSoChan));

//findIndex:  hàm dùng để tìm vị trí đầu tiên của phần tử được tìm thấy thỏa điều kiện nào đó.
Array.prototype.myFindIndex = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        const number = this[i];
        if (callbackFn(number)) {
            return i;
        }
    }
};
function laSoChan(number) {
    return number % 2 === 0;
}
// console.log('Vị trí chẵn đầu tiên là ' + numberList.myFindIndex(laSoChan));

const soLeList = [1, 3, 5, 7, 8, 9];

//some: Lặp qua các phần tử của mảng nếu phần tử trong hàm callback thỏa thì trả về true còn ngược lại thì false
//Lưu ý: Nếu có 1 giá trị đúng thì sẽ trả về true

Array.prototype.mySome = function (callbackFn) {
    let result = false;
    for (let i = 0; i < this.length; i++) {
        const number = this[i];
        console.log(number);
        if (callbackFn(number)) {
            result = true;
            break;
        }
    }
    return result;
};

function laSoLe(number) {
    return number % 2 !== 0;
}

// console.log(soLeList.mySome(laSoLe));

//every: Nếu tất cả phần tử đều thỏa thì sẽ trả về true, ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về false.
//Lưu ý: Nếu tất cả đều đúng thì sẽ trả về true ngược lại có 1 phần tử sai thì sẽ trả vê false
Array.prototype.myEvery = function (callbackFn) {
    let result = true;
    for (let i = 0; i < this.length; i++) {
        const number = this[i];
        console.log(number);
        if (!callbackFn(number)) {
            result = false;
            break;
        }
    }
    return result;
};

function laSoLe(number) {
    return number % 2 != 0;
}
console.log(soLeList.myEvery(laSoLe));

//map: lặp qua từng phần tử của mảng, tham số truyền vào là một anonymous function.
Array.prototype.myMap = function (callbackFn) {
    const newArray = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        const number = this[i];
        const newNumber = callbackFn(number);
        newArray.push(newNumber);
    }

    return newArray;
};

function doubleNumber(number) {
    return number * 2;
}
console.log(numberList.myMap(doubleNumber));

//filter: lọc mảng theo điều kiện cho trước
Array.prototype.myFilter = function (callbackFn) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const number = this[i];
        if (callbackFn(number)) {
            newArray.push(number);
        }
    }
    return newArray;
};
function timSoLonHon4(number) {
    return number > 4;
}
// console.log(numberList.myFilter(timSoLonHon4));