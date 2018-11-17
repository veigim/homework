    var characters = [
        { 'name': 'barney', 'age': 36 },
        { 'name': 'fred', 'age': 40 },
        { 'name': 'tom', 'age': 22 }
    ];
var ages = _.pluck(characters, 'age') ;
var names = _.pluck(characters, 'name') ;
console.log(ages);
console.log(names);
