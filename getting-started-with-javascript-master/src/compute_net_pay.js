/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable() {
   
    var pricePerKilo = arguments[0];
    var quantityInKilo = arguments[1];
    var discountPercentage = arguments[2];

    if(typeof(pricePerKilo) !== "number" || typeof(quantityInKilo) !== "number" || typeof(discountPercentage) !== "number"){
        return "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
    else{
         return (pricePerKilo * quantityInKilo * (1-discountPercentage*0.01)).toString();
    }

}