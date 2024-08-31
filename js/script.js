window.addEventListener("load", ()=> {
  const elLoader = document.querySelector(".loader");
  elLoader.style.display = "none";
})

window.addEventListener("DOMContentLoaded", ()=> {
    const elHeader = document.querySelector(".header");
    window.addEventListener("scroll", ()=> {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            elHeader.classList.add("scroll");
          } else {
            elHeader.classList.remove("scroll");
          }
    })
})