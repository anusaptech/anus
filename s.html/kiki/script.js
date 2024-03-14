 let name = "ali";
 let email = "ali@gmail.com";
 let password = "123";
 let uemail = prompt("enter your email");
 let upassword = prompt("enter your password");
 if(uemail==email && upassword==password){
  document.write("<h1> dear "+name+ "</h1>")
  document.write("<h2>YOU HAVE SUCESSFULLY LOGGIN</h2>")
 }else{
   alert("invalid data") 
 }

 