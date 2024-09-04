function createPopup(id){
    let popupNode = document.querySelector(id)
    let overlay = popupNode.querySelector(".overlay")
    let closeBtn = popupNode.querySelector(".close-btn")
    function openPopup() {
        popupNode.classList.add("active");
    }
    function closePopup() {
        popupNode.classList.remove("active")
    }
    overlay.addEventListener("click", closePopup)
    closeBtn.addEventListener("click", closePopup)
    return openPopup
}


let popup1 = createPopup("#popup1");
let popup2 = createPopup("#popup2");
let popup3 = createPopup("#popup3");
let popup4 = createPopup("#popup4")
document.querySelector("#identity-popup").addEventListener("click", popup1);
document.querySelector("#vision-popup").addEventListener("click", popup2)
document.querySelector("#mission-popup").addEventListener("click", popup3)
document.querySelector("#cv-popup").addEventListener("click", popup4)