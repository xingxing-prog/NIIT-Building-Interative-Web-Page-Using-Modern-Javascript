/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern() {

    let row = arguments[0];
    var result ="";
    if(typeof(row) !== "number"){
        return "Invalid Input Type, Row Input Should Be of Type Number !!";
    }

    else{
        
         for (let i=1; i<row+1;i++){
             result += repeat(row-i, " ") + repeat(i, "* ") +"\n";
         }
         return result;
         
    }

}

function repeat(row, symbol){
  let result ="";
  for (let i=0; i<row;i++){
    result += symbol;
  }
  return result;
}
