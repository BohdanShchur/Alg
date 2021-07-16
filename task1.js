/*
    Дано натуральне число n. Знайти першу цифру числа n
*/

const firstNum = (num)=>{
    if(!Number.isInteger(num)){
        return NaN
    }

    const arr = String(num).split("").map((num)=>{
        return Number(num)
      })
    return arr[0]
}

console.log(firstNum(123))
console.log(firstNum(91))
console.log(firstNum(000023121))
console.log(firstNum('skdslkd'))


