let previousFocus = document.querySelectorAll(".mobile-navigation li.active").item(0);
document.querySelectorAll(".mobile-navigation li").forEach(nav => {
   nav.onclick = () => {
       previousFocus.classList.remove("active");
       nav.classList.add("active");
       previousFocus = nav;
   }
})