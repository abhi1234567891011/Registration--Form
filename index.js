
const form = document.getElementById("form-class");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const button = document.getElementById("btn");


//error message function

function showError(event , message){
   const formDiv = event.parentElement;
   formDiv.className = "form-div error";
   const errorMess = formDiv.querySelector('small');
   errorMess.innerText = message;
}
//sucess message function

function showSucess(event){
   const formDiv = event.parentElement;
   formDiv.className = "form-div sucess";
}

//check validation

function checkValidation(input){
   
    for(const ip of input){
        if(ip.value === ''){
          var abhi = ip.name;
          showError(ip ,  abhi+" must required");
        }
        else
         showSucess(ip);
    }
}

//check length of fields

function checkLength(field , min, max){

    const formDiv = field.parentElement;
    const errorMessage = formDiv.querySelector('small');
    let name = field.name;

    if(field.value.length < min){
        formDiv.classList = "form-div error";
        errorMessage.innerText = name+" must greater than "+min;
    }
    else if(field.value.length > max){
        formDiv.classList = "form-div error";
        errorMessage.innerText = name+" must less than "+max;
    }
    else if(field.value.length > min && field.value.length < max){
        formDiv.classList = "form-div sucess";
    }
    else{
        formDiv.classList = "form-div sucess";
    }
}
//check passwords both 1 and 2
function checkPass(pass1 , pass2){

    const pass1_div = pass1.parentElement;
    const pass2_div = pass2.parentElement;
    let errorM_1 = pass1_div.querySelector('small');
    let errorM_2 = pass2_div.querySelector('small');

    if(pass1.value !== pass2.value){
        pass1_div.className = "form-div error";
        pass2_div.className = "form-div error";
        errorM_1.innerText = "Password doesn't match";
        errorM_2.innerText = "Password doesn't match";

    }
    else{
        pass1_div.className = "form-div sucess";
        pass2_div.className = "form-div sucess";
        
    }
}
//Event listener
button.addEventListener("click" , function(e){
    e.preventDefault();
    
    checkValidation([username, email , password , password2]);
    
    checkLength(username , 3 , 15);
    checkLength(password , 8 , 12);
    checkPass(password , password2);
})


