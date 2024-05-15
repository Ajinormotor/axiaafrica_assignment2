// ANALYZING AND OPTIMIZING SCOPE:
 
//  analyze and optimize the global scope for the following code block:
 
// code:



 function redGreenBlueCount(arr) {

  var counter = new Array(3).fill(0);
    var RED = 0, 
    GREEN = 1, BLUE = 2;

  var counter = new Array(3).fill(0);
  for (var i=0; i < arr.length; i++) {
   var curr = arr[i];
    if (curr == RED) {
      counter[RED]++;
    } else if (curr == GREEN) {
      counter[GREEN]++;
    } else if (curr == BLUE) {
     counter[BLUE]++;
  }
 
  }
 return counter;
  }


  var resultDiv = document.getElementById("result");
  const result = redGreenBlueCount([0,1,1,1,2,2,2]); // [1, 3, 3]
  
  
  resultDiv.innerText = "Red: " + result[0] + ", Green: " + result[1] + ", Blue: " + result[2];


//  * Problem: 
//  *global variables are used where not necessary. 
//  * albeit small, the global variables RED, GREEN, and BLUE bloat the global scope and should be moved inside the redGreenBlueCount function.
//  */


// Solution
// To optimize the global scope for the  code block, we move the definitions of RED, GREEN, and BLUE inside the redGreenBlueCount function. This way, they won't pollute the global
//  scope and will only be used inside the function where they are required.
