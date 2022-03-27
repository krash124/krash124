window.addEventListener('DOMContentLoaded', function(){

  // Burger nav

  document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.toggle("active");  
  })

  // document.querySelector(".header__nav").addEventListener("click", function() {
  //   this.classList.toggle("active");
  // })

  // Burger btn

  document.querySelector(".header__burger").addEventListener("click", 
  function() {
    this.classList.toggle("active");
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let nav = document.querySelector(".header__nav");
    if (!target.closest(".header__nav") && !target.closest(".header__burger")) {
      console.log("test")
      nav.classList.remove("active");
      document.querySelector(".header__burger").classList.remove("active")
    } 
    if (target.closest(".header__nav__link")) {
      nav.closest.remove("active");
      document.querySelector(".header__burger").classList.remove("active")
      }
  })

  // Search

  document.querySelector(".header__search-btn").addEventListener("click", function() {
    document.querySelector(".header__form").classList.add("header__form-active");
    this.classList.add("active")
  })

  document.querySelector(".header__form__btn-form-close").addEventListener("click", function() {
    document.querySelector(".header__form").classList.remove("header__form-active");
    document.querySelector(".header__search-btn").classList.remove("active")
  })

  document.addEventListener("click", function(e) {   
  let target = e.target;  
  let form = document.querySelector(".header__form");  
  if (!target.closest(".header__form") && !target.closest(".header__search-btn")) {  
  form.classList.remove("header__form-active");
    form.querySelector("input").value = ""; 
    document.querySelector(".header__search-btn").classList.remove("active")
  }
  })




  // Swiper

  const hero__container = document.querySelector(".hero__container")
  const swiper = new Swiper('.hero__swiper', {
    
    speed: 300,

    pagination: {
      el: '.hero__pages',
      type: 'bullets',
      clickable: true
    }

  })
  
  // Tabs

  document.querySelectorAll('.work__steps__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      
      document.querySelectorAll('.work__tubs__list').forEach(function(tubs){
        tubs.classList.remove('work__tubs__list-active')
      })
      
      document.querySelectorAll('.work__steps__btn').forEach(function(btn){
          btn.classList.remove('work__steps__btn__shown')});
        e.currentTarget.classList.add('work__steps__btn__shown');

      
      document.querySelector(`[data-target="${path}"]`).classList.add('work__tubs__list-active');

    });
  });

  // Accordion

  $( function() {
    $( ".quest__list" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false,
    });     
  });
  

})