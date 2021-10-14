function getGrade(score){
    if(score>25 && score <=30){
        return 'A'
    }else if(score>20 && score <=25){
        return 'B'
    }else if(score>15 && score <=20){
        return 'C'
    }else if(score>10 && score <=15){
        return 'D'
    }else if(score>5 && score <=10){
        return 'E'
    }else if(score>=0 && score <=5){
        return 'F'
    }else{
        return 'Invalid Score'
    }
}

console.log(getGrade(35))
console.log(getGrade(15))
console.log(getGrade(5))
console.log(getGrade(10))
console.log(getGrade(9))
console.log(getGrade(0))
console.log(getGrade(-1))
console.log(getGrade(2))
console.log(getGrade(16))
console.log(getGrade(29))
console.log(getGrade(24))
console.log(getGrade(11))