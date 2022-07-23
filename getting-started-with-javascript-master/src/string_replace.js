/*

The replaceString() function should accept 3 string inputs.

The function should search for second string in first string and if found should replace it with third string.

The function should return the replaced string.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type String !!", 
for any non-numeric value passed to the function.

*/

module.exports = function replaceString(inputString, searchString, replaceWith) {

    
    if(typeof(inputString) !=="string" || typeof(searchString) !=="string" || typeof(replaceWith) !== "string"){
        return "Invalid Input Types, All Inputs Should Be of Type String !!";
    }

    else{
        var index = inputString.indexOf(searchString);
        var result ="";
        if(index !== -1){
            result = inputString.substring(0, index) +replaceWith +inputString.substring(index+searchString.length);
            return result;
        }
        else{
            return inputString;
        }
         
        
    }

}