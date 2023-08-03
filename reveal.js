const observer = new IntersectionObserver(entries =>{
entries.forEach(entry =>{
  if(entry.isIntersecting){
    document.querySelectorAll(".animation")[0].classList.add("fadeInLeft");
  }
})
})

observer.observe(document.querySelector(".containerr"));