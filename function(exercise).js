//Minimum

/*function minimum(a,b) {
    if (a < b){
        return a;
    }else{
        return b;
    }
}
console.log(minimum(2,1));*/


// Recursion

function isEven(n){
    if(n%2 ==0){
        return true
    }
    else if( n % 2 != 0){
        return false
    }
    else if(n < 0){
        return isEven(n-2)
    }
    else{
        return isEven(n-2)
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));




