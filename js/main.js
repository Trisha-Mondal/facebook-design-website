//flour constructor

function Flour(egg, bakingPowder, whiteSugar) {
    this.egg = egg;
    this.bakingPowder = bakingPowder;
    this.whiteSugar = whiteSugar;

}

//slogan
Flour.prototype.slogan = function() {
        return 'the cake is the best';
    }
    //create an objectb from the constructor now

let make = newFlour(2, 500, 10);
console.log(make.slogan());
//cake
function cake(egg, bakingPowder, whiteSugar, water, oven) {
    Flour.call(this, egg, bakingPowder, whiteSugar);
    this.water = water;
    this.oven = oven;

}
//inherit the prototype

cake.prototype = object.create(Flour, prototype);
//manually set the constructor

cake.prototype.constructor = cake;
let cook = newcCake(2, 500, 10, 70, 5);
console.log(newCake);