const burger = document.querySelector(".burger")
let flag = false 
function burgerMenu() {
    if (!flag) {
        burger.style.left = "0"
    } else {
        burger.style.left = "100%"
    }
    flag = !flag
}


// burger-menu dropdownlar
function ac(event) {
    event.preventDefault();
    const burgerDrop = event.target.closest(".burger-drop"); 
    const openn = burgerDrop.querySelector(".open");
    const arrow = burgerDrop.querySelector(".arrow"); 
    const isActive = openn.classList.toggle('active');
    arrow.textContent = isActive ? '⇱' : '⇲';

}

