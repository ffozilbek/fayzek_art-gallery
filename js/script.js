window.addEventListener("DOMContentLoaded", ()=> {
    const elHeader = document.querySelector(".header"),
        elHeaderLink = document.querySelector(".header__link");

    window.addEventListener("scroll", ()=> {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            elHeader.classList.add("scroll");
          } else {
            elHeader.classList.remove("scroll");
          }
    })
})