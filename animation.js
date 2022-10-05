const intro = document.querySelector(".anime");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.controller();

//scences
let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPint(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, {opicity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);
//video animation

let accelamount = 0.4;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
}, 33.3);

