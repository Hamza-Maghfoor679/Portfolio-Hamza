console.log("Script running....")

document.querySelector(".hamburg").addEventListener("click", ()=>{
    
    document.querySelector(".sidebar").classList.toggle("sidebar-go");
    if(document.querySelector(".sidebar").classList.contains("sidebar-go")){
        document.querySelector(".show").style.display = 'inline'
        document.querySelector(".close").style.display = "none"
    }
    else{
        document.querySelector(".show").style.display = 'none'
        setTimeout(() => {
            document.querySelector(".close").style.display = "inline"
            
        }, 400);
    }
})