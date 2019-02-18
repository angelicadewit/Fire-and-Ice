let hamburger = document.querySelector(`.hamburger`)

hamburger.addEventListener(`click`, function(){
    document.body.classList.toggle(`hamburger_open`)
})



window.addEventListener("load", function() {
    TweenMax.staggerFromTo([
        ".first-word-h2", 
        ".second-word-h2", 
        ".third-word-h2",
        ".hero-span"
    ], 1, {
        y: 50,
        opacity: 0,
    }, {
        opacity: 1,
        y: 0,
        delay: 1
    }, 0.2)

})

// var parallaxInstance = new Parallax(document.querySelector('.hero-text'));


window.addEventListener("mousemove", function(e) {
    console.log(e);

    let mouseX = e.clientX / window.innerWidth;

    TweenMax.to([
        ".first-word-h2", 
        ".second-word-h2", 
        ".third-word-h2"
    ], 1,  {
        x: mouseX * -20,
    })
})