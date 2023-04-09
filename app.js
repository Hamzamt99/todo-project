let fname = prompt("Please enter your name");
let gender = prompt("Please enter your gender");
if(gender === "male"){
    console.log(gender);
}else if(gender ==="female") {
    console.log(gender);
}else {
    alert("the gender can be only male or female")
}
let age = prompt("please enter your age");
if (age <= 0){
    alert("the age should not be less or equal zero")
}else {
    console.log(age)
}


if (confirm("Press Ok to show the welcome message \n Press Cancel to skip it") == true) {
    switch(gender){
        case 'male':
            alert("Welcome Mr " + fname)
            break;
        case 'female':
            alert('Welcome Ms '+ fname)
            break;
            default:
                alert('Welcome '+ fname)
    }
} else {
  console.log(gender)
}


// if(gender === 'male') {
 
// }else if (gender === 'female'){
//  alert('Welcome Ms '+ fname)
// }else{
//  alert('Welcome '+ fname)
// }
