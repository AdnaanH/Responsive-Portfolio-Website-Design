var darkMode = document.getElementById("dark");
darkMode.onclick = function(){
    document.body.classList.toggle("dark_mode");
    if(document.body.classList.contains("dark_mode")){
        darkMode.src = "images/light.png";
    }else{
        darkMode.src = "images/dark.png"
    }
}

document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("nav").style.display = "flex";
    if(document.getElementById("nav").style.display = "flex"){
        document.getElementById("menu").style.display = "none";
    }
    if(document.getElementById("menu").style.display = "none"){
        document.getElementById("close").style.display = "grid";
    }
})

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("nav").style.display = "none";
    if(document.getElementById("nav").style.display = "none"){
        document.getElementById("close").style.display = "none";
    }
    if(document.getElementById("close").style.display = "none"){
        document.getElementById("menu").style.display = "grid";
    }
})

document.getElementById("resume").addEventListener("click", function(){
    document.getElementById("pview").style.display = "flex";
    if(document.getElementById("pview").style.display = "flex"){
        document.getElementById("back").addEventListener("click", function(){
            document.getElementById("pview").style.display = "none";
        })        
    }
})

/*
const projImage = document.querySelector('.projects');
const projDetails = document.querySelector('.proj_details');

projImage.addEventListener('mouseover', function(event){
    const project = event.target.parentNode;
    project.onmouseover = function(event){    
        const showDetails = event.target.parentNode;    
        sh.style.display = "grid";
    }
});
*/
/*
const projImage = document.getElementsByClassName("proj_image");
const projDetails =  document.getElementsByClassName("proj_details");

for (var i=0; i<projImage.length; i++)
{
    projImage[ijk n].onmouseover = function(){
        projDetails.style.display = "grid";
    }
}

*/

/*
projImage.onmouseover = function(){
   
}

projDetails.onmouseleave = function(){
    projDetails.style.display = "none";
}
*/