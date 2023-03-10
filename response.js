function getBotResponse(input) {
    //rock paper scissors
 
    // Simple responses
 
    if (input == "") {
        return"please choose the appropriate request";
    } else if (input == "replace" || input== "Replace" ||input == "refund" || input== "Refund" ) {
        
        return "please choose the reason for replacing 1)The product damaged 2) the product was not i ordered 3) not satisified with the product";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "The product damaged" || input == "the product was not i ordered" || input == "not satisified with the product" ) {

        return "your feedback was noted and rectified in your next orders!";
    } else if(input == "0"){
        
        return "your request is confirmed👍"
    }
    else {
        return "Try asking something else!";
    }
 
}   