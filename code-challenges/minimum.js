//Find the minimum value in a list. 
//(Hint; create your own list of items containing both words and integers

//using javascript array method
function findMinimum(arr){
    let minimum=filteredArr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i]<minimum && typeof arr[i]==='number'){
            minimum=arr[i];
        }
    }
    return minimum;
}
console.log(findMinimum(['a',23, 'hello', 4, 100, 'j', 12]))