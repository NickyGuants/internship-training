//Check for all the conditions starting with the 
//multiples of both three and five
for(let i=1; i<=100; i++){
    if(i%3===0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%3===0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i)
    }
}

//Less lines of code
//use string concatenation to avoid checking for the multiples 
//of both three and five
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";
    console.log(output || i);
}