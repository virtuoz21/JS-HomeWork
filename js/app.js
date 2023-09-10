let firstName = "Billie";
let lastName = "Jean"
let fullName = `${firstName} ${lastName}`
console.log(fullName)

let lenght = 8;
let width = 16;
console.log (lenght*width)

console.log (Math.pow(10, 6))

console.log (Math.floor(Math.random()*50))

let number = 21;
    if (number<0){
        console.log ('negative value')
    } else{
        console.log ('positive value')
    }

let text = "abobus228"
     if (text.length>1){
        console.log (text[text.length-2])
     }

let month = 1;
     switch(month){
        case 1:
            console.log('January');
            break;
        case 2:
            console.log('February');
            break;
        case 3:
            console.log('March');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
             console.log('May');
            break;
        case 6:
            console.log('June');
            break;
        case 7:
            console.log('July');
            break;
        case 8:
            console.log('August');
            break;
        case 9:
            console.log('September');
            break;
        case 10:
            console.log('October');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('December');
            break;
        default:
            console.log ('Month is not found!')
     }

let password = "trulala&&&"
     if (password.length>5 && password.indexOf("&")>=1){
        console.log ('This password is strong!')
     } else{
        console.log ('This password is weak!')
     }

let a = 12;
let b = 33;
     if (typeof a =="number" && typeof b =="number"){
        console.log (a + b)
     } else {
        console.log ( "Sum of those items can\’t be counted!")
     }

let textOne = "dratutii"
let textTwo = "dosvidos"
     if (typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length){
        console.log ("Those items are strings and they’re equa!")
     }else{
        console.log ("Items are not compareble!")
     }

