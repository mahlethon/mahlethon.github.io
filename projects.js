window.onload= function(){
   
    let imgArray=[
        "pr1.jpeg","pr2.jpeg", "pr3.jpeg", "pr4.jpeg", "pr5.jpeg", "pr6.jpeg", "pr7.jpeg", "pr8.jpeg", "pr9.jpeg", "pr10.jpeg"
    ]
    let index = 0;
    let id;
    let time = 22000;
    let startIndex=0;
    document.getElementById("playbtn").onclick = function(){
        document.getElementById("pausebtn").style.visibility = "visible";
        document.getElementById("stopbtn").style.visibility = "visible";
        document.getElementById("playbtn").style.visibility = "visible";
       
         id=  setInterval(() => {
        document.getElementById("pr1").src = imgArray[index];
    
            index++;
        }, 2000);
        setTimeout(()=> {
            clearInterval(id)
            document.getElementById("pr1").src ="pr1.jpeg";
            document.getElementById("playbtn").style.visibility = "visible";
            document.getElementById("pausebtn").style.visibility = "hidden";
            document.getElementById("stopbtn").style.visibility = "hidden";
           
            index =0;
           
        }, time);

        document.getElementById("pausebtn").onclick = function(){
            document.getElementById("pr1").src =imgArray[index-1];
              startIndex = index-1;
            setTimeout(()=> {
                clearInterval(id)
                
            }, 0);
            
        }

        

        
        
        
        
    }

   

    

    

    
    
  
    
}