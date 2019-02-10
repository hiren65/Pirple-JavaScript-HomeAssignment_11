/*
*
* Homework Assignment #11: Exceptions
*
 */
let tmp;
let inputStr = ["a","b","c"];
//let inputStr = 12;
//convert array to json string
function convertArrayToJson(input){

    return JSON.stringify(input);
}

                         //convertArrayToJson(inputStr);

// input json string in to function to convert in to array with reverse
function reverseJsonArray(strArr) {

    // make string to array
    let strRsvArr = JSON.parse(strArr);
    //convert in to reverse
    strRsvArr.reverse();

    return convertArrayToJson(strRsvArr);
}




//console.log(getArr);



function exceptionthrow(str) {
    console.log(str + " " + typeof str);
    try{
        if (isNumber(str) === true){
            throw new SyntaxError("Incomplete data:  Number");
        }
        if (typeof str === 'boolean' ){
            throw new SyntaxError("Incomplete data:  Boolean");
        }
        if ( Array.isArray(str)){
            //tmp = JSON.stringify(str);
            console.log(tmp);
            //throw new SyntaxError("Incomplete data: no name");
            return true;
        }else if (isNaN(str)){
            throw new SyntaxError("Incomplete data: nil string");
        }
        else if (str === null ){
            throw new SyntaxError("Incomplete data: null string");
        }
        else if (typeof str === 'string' || value instanceof str ){
            throw new SyntaxError("Incomplete data:  string");
        }
        else{
            tmp = JSON.stringify(str);
            console.log(tmp);
            throw new SyntaxError("Incomplete data: blank unknown");
            //return false;
        }

    }
    catch(e){
        console.log("err 201 " + e );
        return false;
       // return "err 201";
    }

}


function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}
console.log(isNumber(16));

function main(st) {
    let cch = exceptionthrow(st);
    if (cch === false){
        console.log("wrong data");
        return;
    }
    let inputStrConverted =  convertArrayToJson(st);

    console.log("what arr " + inputStrConverted);
    console.log("check " + exceptionthrow(st));
    let getArr = reverseJsonArray(inputStrConverted);
    console.log("reverse "+getArr);

}
main(inputStr);
//exceptionthrow("");