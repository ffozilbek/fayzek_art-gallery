document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(".loader").style.visibility = "visible";
  } else {
      document.querySelector(".loader").style.display = "none";
  }
};

setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 10000);



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