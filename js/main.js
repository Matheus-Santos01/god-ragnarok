var swiper = new Swiper('.swiper-container',{
    slidesPerView: 4, 
    spaceBetween: 19,
    freeMode: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320:{
            slidesPerView: 1.3,
        },
        768:{
            slidesPerView: 2.1,
        },
        992:{
            slidesPerView: 3.1,
        },
        1200:{
            slidesPerView: 3.5,
        }
    },
});

const anime = document.querySelectorAll("[data-anime]")
const classAnime = "animate"

const animeScroll = () =>{
    const windowTop = window.pageYOffset + window.innerHeight * 0.80
    anime.forEach((element) => {
        if(windowTop > element.offsetTop){
            element.classList.add('animate')
        }
    });
}

animeScroll()

window.addEventListener("scroll", () => {
    animeScroll()
})