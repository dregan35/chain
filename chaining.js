// Requirements

// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

//     Sort the numbers in descending order (10, 9, 8, 7, etc).
//     Remove any integers greater than 19.
//     Multiply each remaining number by 1.5 and then subtract 1.
//     Then output (either in the DOM or the console) the sum of all the resulting numbers.

// pass the entire array into the console.log which blew my mind then used sort to return the numbers in order then subtracked them next put in a return to only bring back numbers less than 19, then used .map to a new array into a function to mutipy the numbers, then supriseingly used .reduce to add the numbers




console.log("numbers", [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8].sort(function(a, b) {return b - a;}).filter(function(numbers) {return numbers < 19;}).map(function(multi){return multi * 1.5 - 1;}).reduce(function(x , z)	{return x + z;}));



    