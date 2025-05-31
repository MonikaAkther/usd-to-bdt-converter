// alert("monika is full stack web developer")
// function fullName(name1,name2){
//     console.log(name1,name2)

// }

// fullName("Monika" ,"Akther")
// fullName("Tahmina" ,"Akther")
// fullName("Hapsa" ,"Akther")




function number() {
    let a=10;
    let b=20;
    let sum=a+b;
    let c=10;
    let d=20;
    let sub=a-b;
    return [sum,sub]
    // return[sum,sub];
    // console.log(sum)
}

// number()

let [sum,sub]=number()//array destructuring .  apni chaila variable ono ta dita partan.
console.log(sum);
console.log("sum :" ,sum); // difference ki 29,30line 
console.log(sub);

console.log(number())


function digit() {
    let ab=100;
    let ac=20;
    let sumation=ab+ac;
    let subtraction=ab-ac;
    return{sumation,subtraction};
}
let {sumation,subtraction}=digit()
console.log(sumation);
console.log(subtraction);
console.log(digit());
