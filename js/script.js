window.addEventListener("DOMContentLoaded", ()=> {
  document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader").style.visibility = "visible";
    } else {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


  const elHeader = document.querySelector(".header");
    window.addEventListener("scroll", ()=> {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            elHeader.classList.add("scroll");
          } else {
            elHeader.classList.remove("scroll");
          }
    })
})