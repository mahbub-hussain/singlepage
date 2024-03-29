const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");
const navOpen = document.querySelector(".nav-open-btn");
const navClose = document.querySelector(".nav-close-btn");
const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".navbar");
const backDrop = document.querySelector(".backdrop");

navOpen.addEventListener("click", () => {
  navBar.style.display = "flex";
  navClose.style.display = "flex";
  backDrop.style.display = "flex";
  navOpen.style.display = "none";

  navBar.classList.remove("animate__slideOutRight");
  navClose.classList.remove("animate__slideOutRight");
  
  navBar.classList.add("animate__slideInRight");
  navClose.classList.add("animate__slideInRight");
});

navClose.addEventListener("click", () => {
  navBar.classList.remove("animate__slideInRight");
  navClose.classList.remove("animate__slideInRight");

  navBar.classList.add("animate__slideOutRight");

  navOpen.style.display='flex'
  navOpen.style.opacity='1'
 
  navClose.style.display = "none";
  backDrop.style.display='none'

});

backDrop.addEventListener("click",()=>{
  navBar.classList.remove("animate__slideInRight");
  navClose.classList.remove("animate__slideInRight");

  navBar.classList.add("animate__slideOutRight");
  navOpen.style.display='flex'
  navOpen.style.opacity='1'
  navClose.style.display = "none";
  backDrop.style.display='none'
})

window.onscroll = () => {
  sections.forEach((sec) => {
    const headerHeight = header.getBoundingClientRect().height;
    const top = window.scrollY
    const offsetTop = sec.offsetTop -150;
    const offsetHeight = sec.offsetHeight
    const id = sec.getAttribute("id");
    if ((top >= offsetTop) & (top < offsetTop + offsetHeight)) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
       document.querySelector(`nav a[href='#${id}'`).classList.add("active");
        document.documentElement.style.setProperty(
          "scroll-padding-top",
          headerHeight + "px"
        );
    }
  });
};
