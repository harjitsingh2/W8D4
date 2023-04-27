function curriedSum(numArgs) {
    let numbers = []
    let sum = 0
    function _curriedSum(num) {
        
        numbers.push(num)

        if (numbers.length === numArgs) {
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i] 
                              
            }
            console.log(sum)
        } else {
            return _curriedSum;
        } 

    }
    return _curriedSum
}

const sum = curriedSum(4);
sum(5)(30)(20)(1); // => 56