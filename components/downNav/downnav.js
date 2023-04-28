const template =document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/downNav/downnav.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<section class="down-nav">
<div class="container">
    <div class="nav-items">
        <div class="nav-items-right">
            <div class="items-right-item">
                <i class="fa fa-bars"></i>
                <span class="right-item-text">دسته بندی</span>
                <i class="fa fa-angle-down icon-down"></i>
            </div>
            <div class="menu-rights">
                <ul class="menu-rights-items">
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/1.png" alt="">میوه های تازه</a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/2.png" alt="">سبزیجات </a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/3.png" alt="">گوشت تازه</a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/4.png" alt="">نان </a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/5.png" alt="">مواد غذایی</a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/6.png" alt="">نظافت نکهداری</a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/7.png" alt="">رشته فرنگی</a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/8.png" alt="">خوراک منجمد</a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/9.png" alt="">رشته فرنگی</a></li>
                    <li class="rights-item">
                        <a href="./products.html" class="rights-item-lin"> 
                            <img src="./images/FoodIcon/10.png" alt="">حبوبات</a></li>
                </ul>
            </div>
        </div>
        <div class="nav-items-left">
            <div class="items-left-menus">
                <ul class="left-menus">
                    <li class="left-menu"><a href="./Groe.html" class="left-menu-link ">خانه</a></li>
                    <li class="left-menu tooltip">فروشگاه
                            <span class="tooltip-menu">
                                <ul class="tooltip-items">
                                    <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link">مواد غذایی</a></li>
                                    <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link"> گوشت</a></li>
                                    <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link">نظافت</a></li>
                                    <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link">نان</a></li>
                                    <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link"> خوراکی منجمد</a></li>
                                </ul>
                            </span>
                        <i class="fa fa-angle-down"></i></li>
                    <li class="left-menu tooltip">صفحات
                            <span class="tooltip-menu">
                                <ul class="tooltip-items">
                                    <li class="tooltip-item"><a href="./mapshop.html" class="tooltip-item-link">موقعیت فروشگاه</a></li>
                                    <li class="tooltip-item"><a href="./ordertracking.html" class="tooltip-item-link">رهگیری سفارش</a></li>
                                    <li class="tooltip-item"><a href="./account.html" class="tooltip-item-link">حساب کاربری</a></li>
                                    <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ</a></li>
                                    <li class="tooltip-item"><a href="#" class="tooltip-item-link">سبد خرید</a></li>
                                </ul>
                            </span>
                        <i class="fa fa-angle-down"></i></li>
                    <li class="left-menu tooltip"> وبلاگ
                       <span class="tooltip-menu">
                        <ul class="tooltip-items">
                            <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ-1</a></li>
                            <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ-2</a></li>
                            <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ-3</a></li>
                           
                        </ul>
                       </span>
                        <i class="fa fa-angle-down"></i></li>
                    <li class="left-menu">تماس با ما</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</section>

`

class downNav extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    

    connectedCallback(){
        
     let menuRights =   this.shadowRoot.querySelector('.menu-rights')
        this.shadowRoot.querySelector('.items-right-item').addEventListener('click'  ,()=>{
            // console.log('click');
            if(menuRights.style.right === '-40rem'){
                menuRights.style.right = '4rem'
            } else {
                menuRights.style.right= "-40rem"
            }
            
        })
    }

}


export {downNav}