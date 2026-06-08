
let number1;
let number2;
let operator;
let total;

function add(a,b){
    return a+b;
};

console.log(add(1,2));

const subtract=(a,b)=>{
    return a-b;
}

console.log(subtract(1,2));

const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(5,2));

const divide=(a,b)=>{
    if(b===0)return "syntax error";
    return a/b;
    //should check for if array includes 0 for syntax error
    //keeping in reduce method will cause total to become syntax error cousing nan
}

console.log(divide(50,5));

const operate=(number1,number2,operator)=>{
    let arr=[number1,number2];
    if(operator==='+'){
        total=add(number1,number2);
        return total;
    }
    else if(operator==='-'){
        total=subtract(number1,number2);
        return total;
    }
    else if(operator==='*'){
        total=multiply(number1,number2);
        return total;
    }
    else if(operator==='/'){
        total=divide(number1,number2);
        return total;
    }
}

console.log(operate(4,5,"/"));