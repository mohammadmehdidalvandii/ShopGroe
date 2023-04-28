const template = document.createElement('template')
template.innerHTML =   `
<link rel="stylesheet" href="./components/newsletters/newsletter.css">
<section class="newsletter">
            <div class="container">
                <div class="newsletter-items">
                    <h3 class="newsletter-title">
                        عضویت در خبرنامه ما
                    </h3>
                    <span class="newsletter-text">
                     برای اصلاع ازآخرین بروزرسانی ها در خبرنامه مشترک شوید
                    </span>
                    <form  class="newsletter-add">
                        <input type="email" class="newsletter-eamil" placeholder="ایمیل شما">
                        <button class="newsletter-submit">مشترک شدن</button>
                    </form>
                    <span class="newsletter-text">
                        ماهرکز آدرس ایمیل شما را با دیگران به اشتراک نمی گذاریم
                    </span>
                </div>
            </div>
        </section>
`

class newsletters extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {newsletters}