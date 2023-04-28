const template = document.createElement('template')
template.innerHTML =   `
<link rel="stylesheet" href="./components/newProduct/newproduct.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="newproduct-box">
<div class="newproduct-box-img">
    <img src="" alt="" class="box__img">
</div>
<div class="newpoduct-box-link">
    <a href="#" class="box-link-btn"><i class="fa fa-heart-o"></i></a>
    <a href="#" class="box-link-btn"><i class="fa fa-eye"></i></a>
    <a href="#" class="box-link-btn"><i class="fa fa-share-alt"></i></a>
</div>
<div class="newproduct-box-details">
    <h3 class="box-details-title"><slot name="protitle"></slot></h3>
    <span class="box-details-price"><slot name="proprice"></solt></span>
    <span class="box-details-star">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </span>

    <a href="./basket.html" class="box-details-btn"><i class="fa fa-shopping-cart"> سبد خرید</i></a>
</div>
</div>
`


class newProduct extends HTMLElement {
    constructor (){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector('.box__img').setAttribute('src' , this.getAttribute('image'))
    }

    static observedAttributes (){
        return ['image']
    }
}

export {newProduct}