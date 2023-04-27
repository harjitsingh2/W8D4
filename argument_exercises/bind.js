// bind with args

// with arguments
Function.prototype.myBind = function(context) {
    //console.log("arguments1:" + arguments);
    let arg1 = [];
    let that = this 
    for (let i = 0; i < arguments.length; i++) {
        if (!Array.isArray(arguments[i])) {
            arg1.push(arguments[i])
        }
    }
    //console.log("arg1:" + arg1)
    return function() {
        //console.log("arguments2:" + arguments);
        let arg2 = [];
        for (let j=0; j<arguments.length; j++) {
            if (!Array.isArray(arguments[j])) {
                arg1.push(arguments[j])
            }
        }
        //console.log("arg2:" + arg2)
        return that.apply(context, arg1.concat(arg2))
    }
}

// with ... rest operator
// Function.prototype.myBind = function(context, ...bindArgs) {
//     //console.log(arguments);
//     //console.log(bindArgs);  // is an array of bindtime arguments
//     let that = this 
    
//     return function(...calltimeArgs) {
//         //console.log(arguments)
//         //console.log(calltimeArgs);  // is an array of calltime args
//         return that.apply(context, [...bindArgs, ...calltimeArgs])
//         //return func.call(context, ...bindArgs, ...calltimeArgs)
//     }
// }

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true