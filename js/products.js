import { navbarTop } from "../components/navbartop/navtop.js";
import { navbarCenter } from "../components/navCenter/navcenter.js";
import { newsletters } from "../components/newsletters/newsletters.js";
import { footerdown } from "../components/footerdown/footerdown.js";
import { footerdesign } from "../components/footerdesign/footerdeign.js";
import { downNav } from "../components/downNav/downnav.js";
import { nowMenu  } from "../components/nowmenu/nowmenu.js";
import { responMenu } from "../components/respon-menu/resmenu.js";
import { specialProduct } from "../components/specialProduct/specialproduct.js";
window.customElements.define('special-product' , specialProduct)
window.customElements.define('respon-menu' ,responMenu)
window.customElements.define('menu-now' , nowMenu)
window.customElements.define('down-nav' , downNav)
window.customElements.define('footer-design', footerdesign)
window.customElements.define('footer-down' , footerdown)
window,customElements.define('newsletter-footer' , newsletters)
window.customElements.define('nav-center' , navbarCenter)
window.customElements.define('nav-top', navbarTop)



let range = document.querySelector('.right-pricing-range')
let contentRange = document.querySelector('.right-pricing-price')

range.addEventListener('input' ,()=>{
    contentRange.innerHTML = range.value
})