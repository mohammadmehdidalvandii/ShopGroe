const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/NavbarTop/navtop.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <div class="navbar-items">
                    <div class="nav-item-left">
                        <span class="item-left-text">به فروشگاه گرو خوش آمدید!</span>
                        <a href="./mapshop.html" class="item-left-location textHover">موقعیت فروشگاه</a>
                        <a href="./ordertracking.html" class="item-left-order textHover">رهگیری سفارش</a>
                    </div>
                    <div class="nav-item-right">
                        <a href="./account.html" class="item-right-user textHover"><i class="fa fa-user-circle-o"></i>حساب کاریری </a>
                    </div>
                </div>
`



class navbarTop extends HTMLElement{
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

export {navbarTop}