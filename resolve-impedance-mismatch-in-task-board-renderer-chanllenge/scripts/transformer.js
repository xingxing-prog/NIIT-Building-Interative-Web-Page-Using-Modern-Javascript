/*

The transform() function should accept data as input and transform it

The contents of data folder is fetched from `input.js` file

The function has to transform the data and generate as per the structure given in `expected-output.js`.

The expected-output data is used to render it on the browser using the code provided in `board-renderer.js` file.

The function should return error message 
"Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!"
if the data is not an object and / or does not contain boards, lists, cards and comments as its array properties

DO NOT MODIFY THE CODE IN OTHER FILES AS IT WILL IMPACT THE TEST OUTCOME AND BROWSER OUTPUT.

*/
export const transform = (data) => {

    // Provide Solution Code Here

    if(data.hasOwnProperty('boards') && data.hasOwnProperty('lists') && data.hasOwnProperty('cards') && data.hasOwnProperty('comments') &&
       Array.isArray(data["boards"]) && Array.isArray(data["lists"]) && Array.isArray(data["cards"]) && Array.isArray(data["comments"])){
       var result = [];
       var output ={};
       let boards = data["boards"];
       let cards = data["cards"];
       let comments = data["comments"];

       boards.forEach(element=>{
        output["boardId"] =element.boardId;
        output["boardTitle"] = element.boardTitle;
        const transformedList = data["lists"].filter(list=> 
            list["boardId"] === element["boardId"])
            .map(element => {
            return {
                "listId": element["listId"],
                "listTitle": element["listTitle"]
            };
        })
    
    
    
        transformedList.forEach(list=>{
            const transformedCard = cards.filter(card=>
                card['listId'] === list["listId"])
            .map(item=> {
                return{
                    "cardId": item["cardId"],
                    "cardTitle":item["cardTitle"]
                };
            })
            
            list["cards"] = transformedCard;
            
            
            transformedCard.forEach(card=>{
                
                const transformedComment= comments.filter(comment=>
                    comment["cardId"] === card["cardId"])
                .reduce((total, currentComment)=>
               {
                   if(currentComment["cardId"] === card["cardId"]){
                       total += 1;
                   }
                   return total;
               },0)
    
               card["comments"] = transformedComment;
               
            })
    

           
        })
    
        output["lists"] = transformedList;
        result.push(output);
      
        

    })

          return result;
    }


     else{
        return ("Invalid Input Type, Input Type Must Be An Object with Array Type Boards, Lists, Cards and Comments Properties !!");
     }
    
};
