import AOS                         from 'aos'
import Swiper, { Pagination }      from 'swiper'
import controlsSupportInsideSwiper from './helpers/controls-support-inside-swiper.js'
import NavigationModule            from './modules/NavigationModule.js'

//#region AOS

AOS.init({
    duration: 750,
    easing: 'ease-out',
    offset: 0,
})

//#endregion

//#region Swipers

Swiper.defaults.slidesPerGroup = 1
Swiper.defaults.grabCursor     = true
Swiper.defaults.speed          = 500

const swipers = [

    new Swiper('.categories-slider', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 35,
        pagination: {
            el: '.categories-slider-pagination',
            clickable: true,
            bulletElement: 'button'
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                spaceBetween: 15,
            },
            769: {
                spaceBetween: 20,
            },
            1025: {
                spaceBetween: 25,
            },
            1201: {
                spaceBetween: 30
            },
            1441: {
                spaceBetween: 35
            }
        }
    }),

    new Swiper('.products-slider', {
        modules: [Pagination],
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.products-slider-pagination',
            clickable: true,
            bulletElement: 'button'
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            601: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1201: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
            1441: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    })

]

controlsSupportInsideSwiper(swipers, ['a', 'button'])

//#endregion

//#region NavigationModule

const navigationModule = new NavigationModule({
    navigationElement: {
        sourceClassName: 'navigation',
        activeClassName: 'navigation--active',
    },
    burgerElement: {
        sourceClassName: 'burger-button',
        activeClassName: 'burger-button--active',
    },
    linkElement: {
        sourceClassName: 'navigation-link',
        activeClassName: 'navigation-link--active',
    },
    topIndentElementOnScroll: {
        sourceClassName: 'header-section'
    },
    immediatelyInitializeModule: true,
})

//#endregion
