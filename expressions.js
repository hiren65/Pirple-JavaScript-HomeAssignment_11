/*
*
* Homework Assignment #11: Exceptions
*
 */
let tmp;
let inputStr;


//convert array to json string
function convertArrayToJson(input){
    return JSON.stringify(input);
}

// input json string in to function to convert in to array with reverse
function main(strArr) {
    // make string to array
    let strRsvArr = JSON.parse(strArr);
    //convert in to reverse
    strRsvArr.reverse();

    return convertArrayToJson(strRsvArr);
}
//create exceptions throw to contain error
function exceptionthrow(str) {
    console.log("Data " +str + " type " + typeof str);
    try{
        if (isNumber(str) === true){
            throw new SyntaxError("Incomplete data:  Number");
        }
        if (typeof str === 'boolean' ){
            throw new SyntaxError("Incomplete data:  Boolean");
        }
        if (str === undefined){
            throw new SyntaxError("Incomplete data: undefined");
        }
        if ( Array.isArray(str)){
            //tmp = JSON.stringify(str);
            //let strR = JSON.parse(str);

            //console.log(tmp);
            throw new SyntaxError("Incomplete data: Array");
            //return false;
        }

        else if (str === null ){
            throw new SyntaxError("Incomplete data: null string");
        }
        else if (typeof str === 'string' || value instanceof str ){
            tmp = JSON.parse(str);
            if (Array.isArray(tmp)) {
                if (tmp.length ===0){
                    console.log("JSON OBJECT contains array is blank");
                    return true;
                }if (tmp.length === 1){
                    console.log("JSON OBJECT contains array is has one element");
                    return true;
                }
                if (containsEvenNums(tmp) === true){
                    //throw new SyntaxError("Incomplete data: Array contain all even number");
                    console.log("JSON OBJECT contains array is has all even number");
                    return true;
                }
                if (containsOddNums(tmp) === true) {
                    //throw new SyntaxError("Incomplete data: Array contains all odd number");
                    console.log("JSON OBJECT contains array is has all odd number");
                    return true;
                }

                console.log("JSON OBJECT contains array!!");
                return true
            }else
            throw new SyntaxError("Incomplete data:  string other than array");
        }
        else if (isNaN(str)){
            throw new SyntaxError("Incomplete data: nil string");
        }

        else{
            tmp = JSON.stringify(str);
            //console.log(tmp);
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
//check even number in array

var containsEvenNums = function(numArray) {
    let count = 0;
    numArray.forEach(function(element) {
        if (isNumber(element) === false){
            return false ;
        }
        if(element % 2 == 0) {
            count++;
            //return true;
        }
    });
    if (numArray.length === count){
        console.log("array contains all even number");
        return true;
    }
    console.log("array contains not all even or odd number");
    return false;
};

//check odd number
var containsOddNums = function(numArray) {
    let count = 0;
    numArray.forEach(function(element) {
        if (isNumber(element) === false){
            return false ;
        }
        if(element % 2 !== 0 || element === 2 ) {
            count++;
            //return true;
        }
    });
    if (numArray.length === count){
        console.log("array contains all odd number");
        return true;
    }
    console.log("array contains not all even or odd number 111");
    return false;
};


//console.log("is even " + containsEvenNums([4,6,7]));
//console.log("is odd " + containsOddNums([1,2,3,7]));

function isNumber (value) {
    return typeof value === 'number' && isFinite(value);
}
//console.log(isNumber(16));


//reverseJsonArray
let myReverseArray = function reverseJsonArray(st) {
            let cch = exceptionthrow(st);
            if (cch === false){
                //console.log("wrong data");
                return false;
            }else{
            //let inputStrConverted =  convertArrayToJson(st);

            //console.log("what arr " + inputStrConverted);
            //console.log("check " + exceptionthrow(st));
            let getArr = main(st);
            console.log("reverse "+getArr);
            return getArr;
            }
        };
//different inputs combinations
inputStr = '["a","b","c"]';
console.log(myReverseArray(inputStr));
inputStr = 12;
console.log(myReverseArray(inputStr));
inputStr = null;
console.log(myReverseArray(inputStr));
inputStr = "jfggfjgfj";
console.log(myReverseArray(inputStr));


//now check all posibilities of throw error
/*
1. Without any arguments
2. With a boolean as the argument
3. With an Array (non-stringified) as the argument
4. With a string argument that is not properly formatted JSON
5. With a stringified-array that only has one value
6. With a stringified-array that is empty
7. With a stringified-array that has an even-number of values
8. With a stringified-array that has an odd-number of values
 */
//testing array of above conditions total 8 has mate
let exceptionErrorInputArray = [ "no argument",true,["a1","b1","c1"],'{[1,2]}',"[1]",'[]', '[2,4,6]','[1,3,5]'];

//check all 8 conditions through array loop
for (let i=0;i<exceptionErrorInputArray.length;i++) {

    //console.log(whatAmI(exceptionErrorInputArray[i]));
    if (i===0){
        console.log(myReverseArray() + "\n");
    } else
    console.log(myReverseArray(exceptionErrorInputArray[i]) + "\n");

}




////////////////////////////////////alternative/////////////////////////////////////////////////////
//Another way to get data type
function whatAmI(me){ return Object.prototype.toString.call(me).split(/\W/)[2]; }

// tests
/*console.log(
    whatAmI(["aiming","@"]),
    whatAmI({living:4,breathing:4}),
    whatAmI(function(ing){ return ing+" to the global window" }),
    whatAmI("going to do with you?"),
    whatAmI(67),
    whatAmI(),
    whatAmI(true),
    whatAmI([1] )
);*/
////////////////////////////////////////////////////////////////////////////////////////////