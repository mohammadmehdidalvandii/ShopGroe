const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="./components/footerdown/footerdown.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<section class="footer-down">
<div class="container">
    <div class="footer__down">
        <ul class="footer-down-items">
            <li class="footer-down-item">
                <img src="./images/logo.png" alt="" class="footer-down-img">
            </li>
            <li class="footer-down-item">
                <span class="footer-down-text">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</span>
            </li>
            <li class="footer-down-item">
                <h3 class="footer-down-title">ارتباط باما</h3>
            </li>
            <li class="footer-down-item">
                <a href="#" class="footer-down-media"><i class="fa fa-facebook"></i></a>
                <a href="#" class="footer-down-media"><i class="fa fa-twitter"></i></a>
                <a href="#" class="footer-down-media"><i class="fa fa-telegram"></i></a>
                <a href="#" class="footer-down-media"><i class="fa fa-instagram"></i></a>
            </li>
        </ul>
        <ul class="footer-down-items">
            <li class="footer-down-item"> <a href="#" class="footer-down-link"></a><h3 class="footer-down-title">اطلاعات</h3></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">درباه ما </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link"> تماس با ما </a> </li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link"> شرایط و ظوابط </a> </li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">برند ها  </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link"> موارد مهم  </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">حریم خصوصی </a></li>
        </ul>
        <ul class="footer-down-items">
            <li class="footer-down-item"><h3 class="footer-down-title">پشتبانی</h3></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">موقعیت فروشگاه </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">رهگیری سفارش </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">جستجو محصول </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">سوالات </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link"> پشتیبانی انلاین </a></li>
            <li class="footer-down-item"> <a href="#" class="footer-down-link">حریم خصوصی </a></li>
        </ul>
        <ul class="footer-down-items">
            <li class="footer-down-item"><h3 class="footer-down-title">اطلاعات تماس</h3></li>
            <li class="footer-down-item">
                <i class="fa fa-map icon-footer"></i>
                <span class="address-item">ایران.استان تهران.میدان ازادی خیابان 13 شرقی فروشگاه گرو</span>
            </li>
            <li class="footer-down-item"> 
                <i class="fa fa-phone icon-footer"></i>
                <span>021-22446688</span>
            </li>
            <li class="footer-down-item">
                <span class="icon-footer">@</span>
                <span>goreshop@info.com</span>
            </li>
            <li class="footer-down-item"> 
                <h3 class="footer-down-title">ساعت کاری :</h3>
            </li>
            <li class="footer-down-item">شنبه - جمعه 7صبح تا 10 شب</li>
        </ul>
    </div>
</div>
</section>
`


class footerdown extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export { footerdown }