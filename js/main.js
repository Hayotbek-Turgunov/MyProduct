// DARK MODE

const elSiteThemeToggler = document.querySelector('.site-header__togler-moon');

elSiteThemeToggler.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode')
})

// REPONSIVE-MENU
const elSiteHeader = document.querySelector('.site-header');
const elSiteHeaderSitenav = elSiteHeader.querySelector('.site-header__sitenav-wrapper');
const elSiteHeaderSitenavToggler = elSiteHeader.querySelector('.site-header__sitenav-toggler');

if(elSiteHeaderSitenavToggler){
  elSiteHeaderSitenavToggler.addEventListener('click',function(){
    elSiteHeader.classList.toggle('site-header--open')
  })
}