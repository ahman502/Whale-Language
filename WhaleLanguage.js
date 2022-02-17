//the input provided by the user
let input = 'turpentine and turtles';
//an array of vowels for comparison with the input
const vowels = ['a', 'e', 'i', 'o', 'u'];
//final array which will hold all the vowels in the given input
let resultArray = [];

//outer for loop to loop the input array
for(let i = 0; i < input.length; i++){
    //inner for loop to loop the vowels array
    for(let j = 0; j < vowels.length; j++) {
      
      //if the letter in input and vowels array is same AND it is also the letter 'e'
      if((input[i] === vowels[j]) && (input[i] === 'e')) {
        //then we push 2 ee(s) to the resulting array
        resultArray.push('ee');
      }
      //otherwise if the letter in input and vowels array is same AND it is also the letter 'u'
      else if((input[i] === vowels[j]) && (input[i] === 'u')) {
        //then we push 2 uu(s) to the resulting array
        resultArray.push('uu');
      }
      //otherwise if the letter in input and vowels array is same (i.e, a, i, o)
      else if((input[i] === vowels[j])) {
        //then we just push one of each of those letters
        resultArray.push(vowels[j]);
      }
    }
}

//we joing the resulting array with no space between the letters and assign the result to the variable resultString
let resultString = resultArray.join('');
//we show the given input string on the console
console.log('Given string: ' + input);
//we show vowels found in the given input while showing doubles for every 'e' and 'u' in the input
console.log('Vowels in given string: ' + resultArray);
//we also show these vowels in the form of an array
console.log(resultArray);
//we show the resultString which is in whale language and has no spaces in it, an convert it into uppercase letters
console.log('Given string in Whale language: ' + resultString.toUpperCase());
