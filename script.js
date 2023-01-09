// Typeing Text
function typeText() {
    const textCont = document.getElementsByClassName("reveal-typeText");
    for (let i = 0; i < textCont.length; i++) {
        let text = textCont[i].textContent;
        textCont[i].textContent = "";
        for (let y = 0; y < text.length; y++) {
            setTimeout(() => {
                textCont[i].textContent += text[y];
            }, y * 5);
        }
    }

}


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
//check if class is already revealed
function isActive(element) {
    const classList = element.classList;
    return classList.contains('active');
}

//add event Lister for scrolling
window.addEventListener("scroll", reveal);
let loadBarCalled = false;
function reveal() {
    const allContainer = document.getElementsByClassName("reveal");
    for (let i = 0; i < allContainer.length; i++) {
        //for container that are not visible
        if (!isInViewport(allContainer[i]) && !isActive(allContainer[i])) {
            allContainer[i].classList.add("hidden");
        }
        else {
            allContainer[i].classList.remove("hidden");
            allContainer[i].classList.add("active");
            //for Loading Bar
            if ((allContainer[i].getAttribute('id') === "chart-container") && (!loadBarCalled)) {
                loadBar();
                loadBarCalled = true;
            }
        }

    }
}


//load language Bar
function loadBar() {
    const allBar = document.getElementsByClassName("chart-cont");
    for (let i = 0; i < allBar.length; i++) {
        //get widht length
        let temp = allBar[i].getAttribute("id");
        //console.log(temp);
        var wit = document.getElementById(temp).clientWidth;
        //console.log(wit);
        //put width to 0
       allBar[i].style.width = 0;
        //load width back
        for (let y = 0; y <= wit; y++) {
            setTimeout(() => {allBar[i].style.width = String(y) + "px";}, y * 3);
        }
    }

}


