Function.prototype.curry = function(numArgs) {
    let argsArray = [];
    let that = this;
    function _curry(arg) {
        argsArray.push(arg)
        if (argsArray.length === numArgs) {
           return that.apply("gee golly", argsArray)
        } else {
           return _curry 
        }
    } 
    return _curry  
}

function sumThree(el1, el2, el3) {
    //console.log(el1);
    return el1 + el2 + el3;
}

const currySumThree = sumThree.curry(3)

console.log(currySumThree(1)(2)(3));