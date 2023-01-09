//check if an element is in viewPort Function
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


//add event Lister for scrolling
window.addEventListener("scroll", reveal);
function reveal(){
    //for container that are not window
    const allContainer = document.getElementsByClassName("reveal");
    for(let i = 0; i < allContainer.length; i++){
        if(!isInViewport(allContainer[i])){
            allContainer[i].classList.add("hidden");
        }
        else{
            allContainer[i].classList.remove("hidden");
        }
    }
}

// Typeing Text
function typeText(){
    const textCont = document.getElementsByClassName("reveal-typeText");
    for(let i = 0; i < textCont.length; i++){
        let text = textCont[i].textContent;
        textCont[i].textContent = "";
        for(let y = 0; y < text.length; y++){
            setTimeout( () => {
                textCont[i].textContent += text[y];
            }, y * 10);
        }
    }
    
}
