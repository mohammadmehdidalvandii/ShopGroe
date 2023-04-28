
// timer 
import { timerProduct } from "./bestproduct.js";


import { navbarTop } from "../components/navbartop/navtop.js";
import { navbarCenter } from "../components/navCenter/navcenter.js";
import { navbarDown } from "../components/navbarDown/navdown.js";
import { specialProduct } from "../components/specialProduct/specialproduct.js";
import { specialContent } from "../components/specialContent/specialcontent.js";
import { newProduct } from "../components/newProduct/newproduct.js";
import { newsletters } from "../components/newsletters/newsletters.js";
import { footerdown } from "../components/footerdown/footerdown.js";
import { footerdesign } from "../components/footerdesign/footerdeign.js";
import { responMenu } from "../components/respon-menu/resmenu.js";

window.customElements.define('respon-menu' ,responMenu)
window.customElements.define('footer-design', footerdesign)
window.customElements.define('footer-down' , footerdown)
window,customElements.define('newsletter-footer' , newsletters)
window.customElements.define('new-product' , newProduct)
window.customElements.define('special-content' ,specialContent)
window.customElements.define('special-product' , specialProduct)
window.customElements.define('nav-down', navbarDown)
window.customElements.define('nav-center' , navbarCenter)
window.customElements.define('nav-top', navbarTop)


$('.slider-contents').slick({
    dots: true,
    infinite: true,
    rtl:true,
    autoplay:true,
    speed:400,
    slidesToShow: 1,
  });

  $('.company-slider').slick({

    infinite: true,
    rtl:true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          rtl:true       }
      },
      {
        breakpoint:800,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          rtl:true 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,

          rtl:true       }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl:true       }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

