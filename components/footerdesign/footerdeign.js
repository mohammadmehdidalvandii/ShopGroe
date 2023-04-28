const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/footerdesign/footerdesign.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<section class="design">
<div class="container">
    <div class="design-content">
        <h4 class="design-text">
            © گرو. تمام حقوق قالب محفوظ است. طراحی و توسعه توسط  <span>mohammadmehdi-dalvadni</span>
        </h4>
    </div>
</div>
</section>
`

class footerdesign extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}


export {footerdesign}