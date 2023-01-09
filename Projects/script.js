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
        }

    }
}