const swiper = new Swiper('.swiper', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      renderBullet: function(index, className){
        return '<span class = "' + className + '">' + (index + 1) + '</span>';
      }
    },
simulateTouch: true,
touchRatio: 45,
touchRatio: 1,
grabCursor: true,
slideToClickedSlide: true,
hasNavigation: {
watchState: true,
},
/*
keyboard: {
   enabled: true,
   onlyInViewport: true,
   pageUpDown: true,
},
*/
mousewheel:{
sensitivity: 1,
},
slidesPerView: 1,
  });

  const swiperNew = new Swiper('.swiper__photo',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
         
        },
    simulateTouch: true,
    touchRatio: 45,
    touchRatio: 1,
    grabCursor: true,
    slideToClickedSlide: true,
    hasNavigation: {
    watchState: true,
    },
    
    keyboard: {
       enabled: true,
       onlyInViewport: true,
       pageUpDown: true,
    },
    mousewheel:{
    sensitivity: 1,
    },
    slidesPerView: 3,
  })



  let btn = document.querySelector('.burger__menu');
  let link = document.querySelector('.header__link');
  btn.addEventListener('click', function(e){
    e.preventDefault;
     btn.classList.toggle('active');
     link.classList.toggle('active');

  })