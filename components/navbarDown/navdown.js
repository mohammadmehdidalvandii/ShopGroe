const template = document.createElement('template')
 
template.innerHTML = `
<link rel="stylesheet" href="./components/navbarDown/navdown.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="navbar-menus">
<div class="menu-left">
  <i class="fa fa-bars"></i>
  <span class="menu-left-text">دسته بندی</span>
  <i class="fa fa-angle-down"></i>
 </div>
 <div class="menu-right">
   <ul class="menu-left-items">
    <li class="left-item"><a href="./Groe.html" class="left-item-link">خانه</a></li>
    <li class="left-item tooltip">
        فروشگاه
        <span class="tooltip-menu">
            <ul class="tooltip-items">
                <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link">مواد غذایی</a></li>
                <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link"> گوشت</a></li>
                <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link">نظافت</a></li>
                <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link">نان</a></li>
                <li class="tooltip-item"><a href="./products.html" class="tooltip-item-link"> خوراکی منجمد</a></li>
            </ul>
        </span>
    <i class="fa fa-angle-down"></i>
    </li>
    <li class="left-item tooltip">
        صفحات
        <span class="tooltip-menu">
            <ul class="tooltip-items">
                <li class="tooltip-item"><a href="./mapshop.html" class="tooltip-item-link">موقعیت فروشگاه</a></li>
                <li class="tooltip-item"><a href="./ordertracking.html" class="tooltip-item-link">رهگیری سفارش</a></li>
                <li class="tooltip-item"><a href="./account.html" class="tooltip-item-link">حساب کاربری</a></li>
                <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ</a></li>
                <li class="tooltip-item"><a href="#" class="tooltip-item-link">سبد خرید</a></li>
            </ul>
        </span>
    <i class="fa fa-angle-down"></i>
    </li>
    <li class="left-item tooltip">
        وبلاگ
        <span class="tooltip-menu">
            <ul class="tooltip-items">
                <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ-1</a></li>
                <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ-2</a></li>
                <li class="tooltip-item"><a href="#" class="tooltip-item-link">وبلاگ-3</a></li>
            </ul>
        </span>
    <i class="fa fa-angle-down"></i>
    </li>
    <li class="left-item"><a href="#" class="left-item-link">تماس با ما</a></li>
   </ul>
 </div>
</div>
`

class navbarDown extends HTMLElement {
    constructor(){
        super ()
            this.attachShadow({mode: 'open'})
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        
    }
}

export {navbarDown}