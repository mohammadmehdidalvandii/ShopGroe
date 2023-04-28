const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/navCenter/navcenter.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="navbar-center">
<div class="center-logo">
    <img src="./images/logo.png" alt="" class="center-logo-img">
</div>
<div class="center-search">
    <input type="text" class="center-search-text" placeholder="جستجو  محصصولات...">
    <i class="fa fa-search"></i>
</div>
<div class="center-basket">

<a href="./basket.html" class="center-basket-lick">
<span class="center-box-icon">
<sub>0</sub>
<i class="fa fa-shopping-basket"></i>
</span> 
<span class="center-basket-price">10000تومان</span>
</a>
  
</div>
</div>
`



class navbarCenter extends HTMLElement{
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

export {navbarCenter}