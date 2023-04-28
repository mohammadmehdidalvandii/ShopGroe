const template =document.createElement('template')
template.innerHTML =  `
<link rel="stylesheet" href="./components/nowmenu/nowmenu.css">
 <section class="now-menu">
    <div class="container">
        <div class="now__menu">
            <a href="./Groe.html" class="now-menu-home">خانه</a>
            /
            <span href="./Groe.html" class="now-menu-now"><slot name="text"></solt></span>

        </div>
    </div>
</section>
`
 class nowMenu extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
 }

 export {nowMenu}