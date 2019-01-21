let hamburger = document.querySelector(`.hamburger`)

hamburger.addEventListener(`click`, function(){
    let overlayMenu = document.querySelector(`.overlay`)
    hamburger.classList.toggle(`active`)
    overlayMenu.classList.toggle(`open`)
})