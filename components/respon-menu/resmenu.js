const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/respon-menu/resmenu.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<section class="menu-respon">
                    <div class="menu__respon">
                        <div class="menu__respon-right">
                            <i class="fa fa-bars"></i>
                            <div class="menu-res">
                                <ul class="res-menus">
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/1.png" alt="food">میوه تازه</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/2.png" alt="food">سبزیجات</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/3.png" alt="food">گوشت تازه</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/4.png" alt="food">نان تازه</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/5.png" alt="food">مواد غذایی</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/6.png" alt="food">نگهداری و نظافت</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/7.png" alt="food">رشته فرنگی</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/8.png" alt="food">خوراک منجمد</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/9.png" alt="food">رشته فرنگی</a></li>
                                    <li class="res-item"><a href="./products.html" class="res-link"><img src="./images/FoodIcon/10.png" alt="food">نظافت</a></li>
                                </ul>
                            </div>
                            <img src="./images/logo.png" alt="" class="respon-right-img">
                        </div>
                        <div class="menu__respon-left">
                            <i class="fa fa-bars"></i>

                            <div class="menu-navbar">
                                <ul class="menu-navbar-items">
                                    <li class="menu-navbar-item"><a href="#" class="navbar-item-link">خانه</a></li>
                                    <li class="menu-navbar-item"><a href="#" class="navbar-item-link">فروشگاه</a></li>
                                    <li class="menu-navbar-item"><a href="#" class="navbar-item-link">صفحات</a></li>
                                    <li class="menu-navbar-item"><a href="#" class="navbar-item-link">وبلاگ</a></li>
                                    <li class="menu-navbar-item"><a href="#" class="navbar-item-link">تماس با ما</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
`

class  responMenu extends HTMLElement {
    constructor (){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        let menuRespon = this.shadowRoot.querySelector('.menu-res') //right menu navbar
      let iconMenuRespon=  this.shadowRoot.querySelector('.menu__respon-right i') //right menu navbar
        let responMenu = this.shadowRoot.querySelector('.menu-navbar') //left menu navbar
        let iconResponMenu = this.shadowRoot.querySelector('.menu__respon-left i')  //left menu navbar

        iconResponMenu.addEventListener('click' , ()=>{
            if(iconResponMenu.classList.contains('fa-bars')){
                iconResponMenu.classList.remove('fa-bars')
                iconResponMenu.classList.add('fa-times')
                responMenu.style.left = '0rem'
            }else{
                iconResponMenu.classList.remove('fa-times')
                iconResponMenu.classList.add('fa-bars')
                responMenu.style.left = '-80rem'
            }
        })


      iconMenuRespon.addEventListener('click' ,()=>{
        if(iconMenuRespon.classList.contains('fa-bars')){
            iconMenuRespon.classList.remove('fa-bars')
            iconMenuRespon.classList.add('fa-times')
            menuRespon.style.right = '0rem'
        }else{
            iconMenuRespon.classList.remove('fa-times')
            iconMenuRespon.classList.add('fa-bars')
            menuRespon.style.right = '-80rem'
        }
      })
            
    }
}

export {responMenu}