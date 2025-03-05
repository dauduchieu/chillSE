const s_loadingPage = document.querySelector('.page.loading')
const s_loginPage = document.querySelector('.page.login')

const s_textWrapper = document.querySelector('.text-wrapper')
const s_bar = document.querySelector('.bar')
const s_barInner = document.querySelector('.bar .inner')

const s_loadingBarTime = 2000
let s_loadingInterval = null

s_textWrapper.addEventListener('mouseenter', () => {
    s_barInner.style.width = '100%'
    s_barInner.style.transition = `${s_loadingBarTime}ms linear`
    s_loadingInterval = setTimeout(() => {
        console.log('done')
        s_loadingPage.classList.add('hidden')
        s_loginPage.classList.remove('hidden')
    }, s_loadingBarTime)
})

s_textWrapper.addEventListener('mouseleave', () => {
    s_barInner.style.transition = `none`
    s_barInner.style.width = '0%'
    if (s_loadingInterval) {
        clearTimeout(s_loadingInterval)
        s_loadingInterval = null
    }
})

