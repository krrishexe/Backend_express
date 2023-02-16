const items = ['item1' , 'item2' , 'item3'];
// it can also be exported as :-
module.exports.items = ['item1' , 'item2' , 'item3'];

const person = {
    name : 'billy jean'
}
module.exports.singlePerson = person;



// whenever we export something as module.exports , it will always first convert that thing in an object and then export it 