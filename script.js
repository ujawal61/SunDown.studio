const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page3Animation (){
    var divImg = document.querySelector(".page-3-img-div")
var elemC = document.querySelector("#elem-container")
elemC.addEventListener("mouseenter", function(){
divImg.style.display="block"
})
elemC.addEventListener("mouseleave", function () {
    divImg.style.display="none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        divImg.style.backgroundImage = `url(${image})`
    })
})
}


function swiperJS(){var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 100,
    centeredSlides: true,
  });
}



page3Animation()
swiperJS()