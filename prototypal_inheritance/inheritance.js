Function.prototype.inherits = function() {
    function Surrogate () {}
    Surrogate.prototype = SuperClass.prototype
    Subclass.prototype = new Surrogate()
    Subclass.prototype.constructor = Subclass
}

