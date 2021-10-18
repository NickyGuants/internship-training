//Find the minimum value in a list. 
//(Hint; create your own list of items containing both words and integers

//using javascript Math object 
function findMinimum(arr){
    let integers=arr.filter(value => typeof value === 'number');
    let minValue=Math.min(...integers)
    return minValue;
}
console.log(findMinimum([33,'a',23, 'hello', 4, 100, 'j', 12]))