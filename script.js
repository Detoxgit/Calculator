
let number1="";
let number2="";
let operator_val="";


const number=document.querySelectorAll(".number");
const display=document.querySelector(".display");
const operator=document.querySelectorAll(".operator");
const eq=document.querySelector(".eq");
const all_clear=document.querySelector(".clearall");
const clear=document.querySelector(".clear");
const button=document.querySelectorAll(".button");


clear.addEventListener("click",()=>{
    if(number2!==""){
        number2=number2.slice(0,-1);
    }
    else if(operator_val!==""){
        operator_val=operator_val.slice(0,-1);
    }
    else{
        number1=number1.slice(0,-1);
    }
    display.innerText=number1+operator_val+number2;
})


all_clear.addEventListener("click",()=>{
    number1="";
    number2="";
    operator_val="";
    display.innerHTML="";
})

eq.addEventListener("click",()=>{
    if(number1!=="" && number2===""){
        display.innerText=number1;
    }
    else if(number1!=="" && number2!==""){
        const total=operate(parseFloat(number1),parseFloat(number2),operator_val);
        number1=total.toString();
        number2="";
        operator_val="";
        display.innerText=`${total}`;
    }
})

operator.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        if(number1==="")return;
        operator_val=operator.innerText;
        display.innerText=number1+operator_val+number2;
    })
    
})

number.forEach((number)=>{
    number.addEventListener("click",()=>{
        if(operator_val===""){
            number1+=number.innerText;
        }
        else{
            number2+=number.innerText;
        }
        display.innerText=number1+operator_val+number2;
    })
})


const operate=(number1,number2,operator)=>{
    
    if(operator==='+'){
        return number1+number2;
    }
    else if(operator==='-'){
        return number1-number2;
    }
    else if(operator==='*'){
        return number1*number2;
    }
    else if(operator==='/'){
        if(number2===0){
            return "syntax error";
        }else{
            return number1/number2;
        }
        
    }

}
