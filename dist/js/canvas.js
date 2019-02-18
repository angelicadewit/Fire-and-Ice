"use strict";

var app = new PIXI.Application({
    view: document.getElementById("pixiCanvas"),
    width: 800,
    height: 400,
    transparent: true
});

var manifest = [{
    "key": "bg",
    "url": "dist/img/fire-and-ice-canvas.png"
}, {
    "key": "mask",
    "url": "dist/img/fire-and-ice-mask.jpg"
}, {
    "key": "displacement3",
    "url": "dist/img/displacement3.png"
}];

function loadAssets() {
    app.loader.add(manifest);
    app.loader.load(onAssetsLoaded);
}

function onAssetsLoaded(loader, resources) {

    // basicMask()
    setupWave();
    console.log(resources);

    app.ticker.add(function (e) {
        return update(e);
    });
}

function update(e) {}

function resize(e) {
    var canvasAspect = app.screen.width / app.screen.height;
    var screenAspect = window.innerWidth / window.innerHeight;
    var scale = 1;

    if (screenAspect > canvasAspect) {
        scale = window.innerWidth / app.screen.width;
    } else {
        scale = window.innerHeight / app.screen.height;
    }

    app.view.style.transform = "scale(" + scale + ")";
}

// function basicMask(){

//     let bg = new PIXI.Sprite(app.loader.resources.bg.texture)
//     app.stage.addChild(bg)
//     let mask = new PIXI.Sprite(app.loader.resources.mask.texture)
//     app.stage.addChild(mask)

//     console.log(mask)
// }

function setupWave() {
    var bg = new PIXI.Sprite(app.loader.resources.bg.texture);

    app.loader.resources.displacement3.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    var mask = new PIXI.Sprite(app.loader.resources.mask.texture);
    app.stage.addChild(mask);

    var displace = new PIXI.Sprite(app.loader.resources.displacement3.texture, 2048, 2560);
    app.stage.addChild(displace);
    var filter = new PIXI.filters.DisplacementFilter(displace);

    bg.filters = [filter];

    TweenMax.fromTo(filter.scale, 5, {
        x: 0,
        y: 0
    }, {
        x: 30,
        y: 30
    });

    TweenMax.fromTo(displace, 10, {
        x: 0,
        y: 0
    }, {
        x: -1024,
        y: -1280,
        repeat: -1,
        ease: Linear.easeNone
    });

    app.stage.addChild(bg);
}

window.onload = function () {
    window.addEventListener("resize", resize);
    resize();
    loadAssets();
};
//# sourceMappingURL=canvas.js.map
