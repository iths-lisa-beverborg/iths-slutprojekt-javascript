let element = document.querySelector("#menu-btn");
element.addEventListener("click", toggleMenu)
element = document.querySelector(".fade-layer");
element.addEventListener("click", toggleMenu)

function toggleMenu(){
    let element = document.querySelector("nav");
    element.classList.toggle("menu-hidden");
    element = document.querySelector(".fade-layer");
    element.classList.toggle("hidden");
}

let buttonToTop = document.querySelector(".scrollTop")
let scroller = () => window.scrollTo({ 
    top: 0,
    behavior: 'smooth',
    
})

buttonToTop.addEventListener("click", scroller);


let pathname = window.location.pathname.split('/')
let rightPath = pathname[pathname.length-1]
let inputEmail = document.querySelector("input")


if (rightPath == "index.html"){
    let popupClose = document.querySelector(".popup-close")
    let submit = document.getElementById("button-submit")
      
    function showPopup(msg){  
        if (inputEmail.value.length > 0){
            document.querySelector(".popup").style.visibility = "visible"
            document.querySelector(".popup").style.width = "50%"
            document.querySelector(".popup").style.height = "50%"
            text = document.querySelector(".popup >.content")
            text.innerText =  "You signed up for the newsletter!"
        }
        else{
            document.querySelector(".popup").style.visibility = "visible"
            document.querySelector(".popup").style.width = "50%"
            document.querySelector(".popup").style.height = "50%"
            text = document.querySelector(".popup >.content")
            text.innerText =  "Please enter a valid mailaddress" 
        }
    }
    
    function hidePopup(){
        document.querySelector(".popup").style.visibility = "hidden"
    }
    
    submit.addEventListener("click", showPopup);
    popupClose.addEventListener("click", hidePopup);
    
}
