/*
    Дано дійсні числа [a[i], ...a[n]], p, натуральне число k (k<=n).
    Видалити з масиву елемент з індексом k і вставити замість нього елемент p
*/

const replaceNum = (arr, k, p) =>{
    if(arr.length < k){
        return NaN
    }
    arr.splice(k-1, 1, p)
    return arr
}

const testArr = [1, 3, 4, 6, 8]
console.log(replaceNum(testArr, 3, 3))