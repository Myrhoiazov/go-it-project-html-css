(()=>{const e={menuBtn:document.querySelector("[data-menu-button]"),mobileMenu:document.querySelector("[data-menu]"),arrModalOpeners:document.querySelectorAll("[data-btn-open]"),backdrop:document.querySelector("[data-modal]"),arrBtnClose:document.querySelectorAll(".btn-close"),arrMenuItems:document.querySelectorAll(".nav__link"),btnGotoTop:document.querySelector("[data-goto-top]")};function t(){if(window.matchMedia("(min-width: 1280px)").matches)return;const t="true"==e.menuBtn.getAttribute("aria-expanded")|!1;e.menuBtn.classList.toggle("is-open"),e.menuBtn.setAttribute("aria-expanded",!t),e.mobileMenu.classList.toggle("is-open"),document.body.classList.toggle("no-scroll"),document.body.classList.toggle("menu-opened")}e.menuBtn&&e.menuBtn.addEventListener("click",t),e.backdrop&&e.arrBtnClose&&e.arrModalOpeners&&(e.arrModalOpeners.forEach((t=>{t.addEventListener("click",(()=>{const o=t.getAttribute("data-btn-open");if(0==o.length)return;e.backdrop.setAttribute("data-modal",o);const n=document.querySelector(`.${o}`);n&&n.addEventListener("click",(e=>e.stopPropagation())),document.body.classList.add("no-scroll"),e.menuBtn.classList.contains("is-open")&&(e.menuBtn.classList.remove("is-open"),e.menuBtn.setAttribute("aria-expanded","false"),e.mobileMenu.classList.remove("is-open"),document.body.classList.remove("menu-opened"))}))})),e.arrBtnClose.forEach((t=>t.addEventListener("click",(()=>{e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")})))),e.backdrop.addEventListener("click",(()=>{e.backdrop.setAttribute("data-modal",""),document.body.classList.remove("no-scroll")}))),e.arrMenuItems&&e.arrMenuItems.forEach((e=>{e.addEventListener("click",t)})),e.btnGotoTop&&e.btnGotoTop.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?e.btnGotoTop.classList.remove("goto-top--hide"):e.btnGotoTop.classList.add("goto-top--hide")}})(),$(".reviews__slider").slick({dots:!0,arrows:!1,adaptiveHeight:!0,customPaging:function(e,t){return'<button class="sl-link"><div class="sl-inner"></div></button>'}});
//# sourceMappingURL=index.8d963cc2.js.map
