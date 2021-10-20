

window.onload= function(){
    document.getElementById("loginbtn").onclick = function(){
      
        if( document.getElementById("name").value == "name" &&  document.getElementById("password").value =="pwd"){
            document.getElementById("form").action = "./dashboard.html";

        }else {
            alert("Incorrect credentials! Please check your email and password.");
             
        }
        
  
    }
    


}
       
    