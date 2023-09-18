//________ans to the q.no-11________//

var firstName = "John"
var lastName  = "Doe,"
var age       = "23,"
var result    ="4.75,"

// var userInfo =`Name: ${firstName+" "+lastName} 

// or

var userInfo  =`Name : ${firstName.concat(" " ,lastName)}
age: ${age}
result: ${result}`
console.log(userInfo)

______ans to the  q no-19______//

var employeeId = '199'
var result = employeeId.padStart(8,'0')
console.log(result)

______ans to the q no-20_____//

var recepientName = "jewel";
var senderName = "xyz";
var coustomMessage = "I hope this email finds you well.";
var emailTemplete = `dear ${recepientName},
${coustomMessage}
from,
${senderName}`
console.log(emailTemplete)

//_____ans to the q no-16______//
var x =55
var result = isNaN(x)
console.log(result)

// _____ans to the q no-15_____//
var x =55.456;
var result =x.toFixed(0)
console.log(result)


//____ans to the q no-13____
var x =3.14159;
var result =x.toFixed(2)
console.log(result)

//_____ans to the q no-12_____//
var text = "congratulation"
var result = text.length
console.log(result)
