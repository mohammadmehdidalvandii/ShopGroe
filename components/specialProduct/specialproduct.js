const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/specialProduct/specialproduct.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="specialsael-product">
                                <img src="" alt="" class="product-image">
                                <div class="product-btn-link">
                                    <a href="#" class="product__link"><i class="fa fa-heart-o"></i></a>
                                    <a href="#" class="product__link"><i class="fa fa-eye"></i></a>
                                    <a href="#" class="product__link"><i class="fa fa-share-alt"></i></a>
                                </div>
                                <div class="product-details">
                                    <h4 class="details-title"> <slot name="product"></slot></h4>
                                    <span class="details-price"><slot name="price"></slot></span>
                                    <span class="details-star">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </span>
                                    <a href="./basket.html" class="details-buy"><i class="fa fa-shopping-cart"></i> افزودن به
                                        سبد</a>
                                </div>
                            </div>

`

class specialProduct extends HTMLElement {
    constructor (){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){
        this.shadowRoot.querySelector('.product-image').setAttribute('src' , this.getAttribute('image'))
    }

    static observedAttributes (){
        return ['image']
    }
}

export {specialProduct}