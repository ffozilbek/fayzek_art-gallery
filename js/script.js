window.addEventListener("DOMContentLoaded", ()=> {
    const elHeader = document.querySelector(".header"),
        elLoader = document.querySelector(".loader");

    setTimeout(() => {
      elLoader.classList.remove("active");
    }, 5000);

    elLoader.classList.add("active");

    window.addEventListener("scroll", ()=> {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            elHeader.classList.add("scroll");
          } else {
            elHeader.classList.remove("scroll");
          }
    })
})