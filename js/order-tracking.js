import { navbarTop } from "../components/navbartop/navtop.js";
import { navbarCenter } from "../components/navCenter/navcenter.js";
import { newsletters } from "../components/newsletters/newsletters.js";
import { footerdown } from "../components/footerdown/footerdown.js";
import { footerdesign } from "../components/footerdesign/footerdeign.js";
import { downNav } from "../components/downNav/downnav.js";
import { nowMenu  } from "../components/nowmenu/nowmenu.js";
import { responMenu } from "../components/respon-menu/resmenu.js";

window.customElements.define('respon-menu' ,responMenu)
window.customElements.define('menu-now' , nowMenu)
window.customElements.define('down-nav' , downNav)
window.customElements.define('footer-design', footerdesign)
window.customElements.define('footer-down' , footerdown)
window,customElements.define('newsletter-footer' , newsletters)
window.customElements.define('nav-center' , navbarCenter)
window.customElements.define('nav-top', navbarTop)