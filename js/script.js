var typed = new Typed("#capabilities", {
    strings: ["Web Developer", "Frontend Web Developer", "Graphics Designer", "Video Graphics Editor"],
    typeSpeed: 150,
    bacckSpeed: 150,
    loop: true
}); 

var dm = document.getElementById("moon");
var lm = document.getElementById("light");

document.getElementById("moon").addEventListener("click", function(){
    document.body.classList.add("dark_mode_on");
    lm.classList.remove("mode_active");
    dm.classList.add("mode_active");
})

document.getElementById("light").addEventListener("click", function(){
    document.body.classList.remove("dark_mode_on");
    lm.classList.add("mode_active");
    dm.classList.remove("mode_active");
})


document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("ph_menu").style.display = "flex";
    if (document.getElementById("ph_menu").style.display = "flex"){
        document.getElementById("menu").style.display = "none";
    };
    if (document.getElementById("menu").style.display = "none"){
        document.getElementById("close").style.display = "grid";
    }
})


document.getElementById("close").addEventListener("click", function(){
    document.getElementById("ph_menu").style.display = "none";
    if (document.getElementById("ph_menu").style.display = "none"){
        document.getElementById("menu").style.display = "grid";
    };
    if (document.getElementById("menu").style.display = "grid"){
        document.getElementById("close").style.display = "none";
    }
})