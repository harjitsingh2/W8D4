// Sum Function
// 1) Using arguments keyword
function sum1() {
    let totalSum = 0
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i]
    }
    return totalSum;
}
// console.log(sum1(1,2,3))
// console.log(sum1(1,2,3,7,9))

// 2) Using the rest operator
function sum2(...numArray) {
    let totalSum = 0;
    for (let i = 0; i < numArray.length; i++) {
        totalSum += numArray[i]
    }
    return totalSum;
}

// console.log(sum2(1,2,3))    // 6
// console.log(sum2(1,2,3,7,9))    //22

