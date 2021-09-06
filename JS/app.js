var firstname=document.getElementById("txtFirstName");
var lastname=document.getElementById("txtLastName");
var email=document.getElementById("txtEmail");
var phone=document.getElementById("txtPhone");
var image=document.getElementById("txtimg");
var randomNumber;

//To restrict user entering special char or numeric value
function validateFullName(event){ 
  var key = event.keyCode; 
  return ((key >= 65 && key <= 90) || (key >= 95 && key <= 122)|| key == 8 || key==32);
}

//To validate email entered by user
function validateEMail(value){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
    {
    return true;
    }
    else{
       return false;
    }
}

//To accpet only numeric value from user for phone number
function validatePhone(event){

  var ASCIICode = (event.which) ? event.which : event.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
  {
      return false;
  }
  else{
    //Code to show phone logo based on first three digit
    var first3digit= document.getElementById("txtPhone").value.substring(1, 4);
    formatPhoneNumber(event);
    if(first3digit>=621 && first3digit<=799){
      //jio
    document.getElementById('imageLogo').src="../images/jio.png"
    document.getElementById('imageLogo').style.visibility='visible';
    } 
    else if(first3digit>=801 && first3digit<=920){
 //idea
    document.getElementById('imageLogo').src="../images/idea.png"
    document.getElementById('imageLogo').style.visibility='visible';
    }
    else if(first3digit>=921 && first3digit<=999){
      //vodaphone
     document.getElementById('imageLogo').src="../images/voda.png"
     document.getElementById('imageLogo').style.visibility='visible';
     }
    else{
     document.getElementById('imageLogo').style.visibility='hidden';
    }
    return true;
  }

}
function formatPhoneNumber(e){
  if(document.getElementById("txtPhone").value!=undefined && document.getElementById("txtPhone").value!="" 
     && document.getElementById("txtPhone").value!=''){
   var txtValue=document.getElementById("txtPhone").value;
   var y=(typeof(e.target)!=='undefined')?e.target:e[0];
   var x=y.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);      
   document.getElementById("txtPhone").value=!x[2] ? x[1] :'(' + x[1] + ') '
                                               + x[2] + (x[3] ? '-' +x[3] :'');
  }
}
function formatPhoneNumberonchange(){
 if(document.getElementById("txtPhone").value!=undefined && document.getElementById("txtPhone").value!="" 
    && document.getElementById("txtPhone").value!=''){
  var txtValue=document.getElementById("txtPhone").value;
  var x=txtValue.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);      
  document.getElementById("txtPhone").value=!x[2] ? x[1] :'(' + x[1] + ') '
                                              + x[2] + (x[3] ? '-' +x[3] :'');
 }
}


//button
function SubmitVal(){
    var validateName = /^[A-Za-z ]{3,}$/;
    var validatePhone = /^[0-9() -]+$/;
    var allValidate=true;
      if(!firstname.value.match(validateName))
      {
        allValidate=false;
         document.getElementById("errorFirstName").innerHTML="Please enter valid name, it should have alteast 4 charcters";
      }
      else if(firstname.value.match(validateName)){
        document.getElementById("errorFirstName").innerHTML="";
      }
      if(!lastname.value.match(validateName)){
        allValidate=false;
        document.getElementById("errorLastName").innerHTML="Please enter valid last name, it should have alteast 4 charcters";
      }
      else if(lastname.value.match(validateName)){
        document.getElementById("errorLastName").innerHTML="";
      }
     if(!validateEMail(email.value))
      {
          allValidate=false
        document.getElementById("errorEmail").innerHTML="Please enter valid email id";
      }
      else if(validateEMail(email.value)){
        document.getElementById("errorEmail").innerHTML="";
      }
      if(!phone.value.match(validatePhone)) {
          allValidate=false;
          document.getElementById("errorTelephone").innerHTML="Please enter valid phone number";
      }
      else if(phone.value.match(validatePhone)){
        document.getElementById("errorTelephone").innerHTML="";
      }

      if(allValidate){
        clearAllError();
        randomNumber= Math.floor(1000 + Math.random() * 9000);
        console.log(randomNumber);
        localStorage.setItem("randomNumber", randomNumber);  
        localStorage.setItem("fullname",firstname.value +" "+ lastname.value);
        localStorage.setItem("phone",phone.value);
        console.log(localStorage.getItem("randomNumber"));
        alert("Your otp is-    " +localStorage.getItem("randomNumber"));
        location.href ="../HTML/OTPValidate.html";
       
      }
      else{

      }

}
function clearAllError(){
  document.getElementById("errorFirstName").innerHTML="";
  document.getElementById("errorLastName").innerHTML="";
  document.getElementById("errorEmail").innerHTML="";
  document.getElementById("errorTelephone").innerHTML="";
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById("lblFullName").innerHTML=localStorage.getItem("fullname");
        document.getElementById("lblPhoneNumber").innerHTML=localStorage.getItem("phone");  
    }
  };


function ValidateOTP(){

    var txtOTP=document.getElementById("enterOTP");
    if(txtOTP.value==localStorage.getItem("randomNumber")){
        location.href ="../HTML/Pixel6Home.html";
    }
    else{
console.log("Cant redirect");
alert("invalid otp");
    }
}
