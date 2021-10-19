//Return distinct values from an array that includes duplicates 
//(i.e., 1, 3, 5, 3, 7, 3, 1, 1, 5) -> (1, 3, 5, 7).

//I start by creating a new array to hold the distinct values
//I then loop through the original array and check whether each element exists in 
//my new array. If the element does not exist, I push it to the new array if it exists 
//we continue to the 
function distinct(arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if(newArr.includes(arr[i])==false){
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(distinct([1, 3, 5, 3, 7, 3, 1, 1, 5]))

