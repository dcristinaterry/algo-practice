var reverseint=(number) => {
    let tempValue = number.toString();
    // let newNumber = "";
    // for(i=tempValue.length-1 ; i>=0 ; i--){
    //     newNumber = newNumber + tempValue[i];
        
    // }

    let newNumber=parseFloat(number.toString().reverse())*Math.sign(number);
    // newNumber = parseFloat(newNumber)*Math.sign(number);
    let lowEnd = Math.pow(2, 31)*-1
    console.log(lowEnd)
    let highEnd = Math.pow(2,31)
    console.log(highEnd)
    if(newNumber > lowEnd && newNumber < highEnd){
        return newNumber;
    }else{
        return 0;
    }
   
}

let test1=reverseint(-123)

console.log(test1)