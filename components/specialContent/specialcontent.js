
const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/specialContent/specialcontent.css">
<div class="prouct-specialsale-titlebtn">
<h3 class="specialsale-title"><slot name="title"></slot></h3>
<a href="#" class="specialsale-btn itemt><slot name="btnlink"></slot></a>
</div>
`



class specialContent extends HTMLElement{
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
    connectedCallback (){
        this.shadowRoot.querySelector('.specialsale-btn').innerHTML =this.getAttribute('button')
    }

    static observedAttributs(){
        return ['button']
    }
}

export {specialContent}