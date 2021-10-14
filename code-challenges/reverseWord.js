function reverseSentence(sentence){
    //let sentenceArr= sentence.split(' ');
    //reversedArr= sentenceArr.reverse();
    //return reversedArr.join(' ');
    
    //one liner
    return sentence.split(' ').reverse().join(' ');
    
}
console.log(reverseSentence('bob likes dogs'))