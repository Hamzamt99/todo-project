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

questions = (userArray) => {
    
    let q1 = prompt("Do you know the function ?")
  
    let q2 = prompt("do you know java script ? ")
    
    let q3 = prompt("have you ever used css ?")
  
     userArray =[q1,q2,q3];
  
    return userArray;
     }
  
let userInput = questions();
      
// console.log(userInput)
  
checkArray = (arr) => {
  
    for(let i =0 ; i< arr.length; i++){
  
        if(arr[i]== null || arr[i] =='' || arr[i]== undefined ){
         arr[i]= ("invalid")
          }
      }
      return arr;
  
     }
  
let checked = checkArray(userInput);
     
console.log(checked)
  
  
  