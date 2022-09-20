try {
  if(window.location.pathname == '/snaps') {
    let snapExpanded = false;
    let snapContainer = document.querySelector(".masonry-container");
    /* Phrase toggle event listener */
    snapContainer.addEventListener("mouseenter", function() {
      phrase.className += " blur";
    });
    snapContainer.addEventListener("mouseleave", function() {
      if(!snapExpanded) { // if expanded image exists, not working
        phrase.className = "phrase-box";
      }
    });
    let snaps = document.querySelectorAll(".masonry-content");
    let phrase = document.querySelector(".phrase-box");
    /* Masonry Detail page creation */ 
    [].forEach.call(snaps, function(snap) {
      snap.addEventListener("click", function(e) {
        const src = e.target.getAttribute('src');
        const navbar = document.querySelector('.navbar-container');
        const expand = document.createElement('div');
        const expandImgs = document.createElement('img');
        let phraseBox = document.querySelector('.phrase-box');
        expand.className = 'expand-bg';
        expandImgs.className = 'expand-img';
        expandImgs.src = src;
    
        // create expanded imgs
        expand.appendChild(expandImgs);
        document.body.prepend(expand);
    
        // Hide navigation
        navbar.style.visibility = 'hidden';
    
        phraseBox.className += " blur";
        expand.className += " visible";
        snapExpanded = true;
    
        // Deactivate scroll when expanded
        document.body.style.overflowY = 'hidden';
    
        // Remove created expanded imgs
        expand.addEventListener("click", function(e) {
          if(snapExpanded) {
            phraseBox.className = "phrase-box";
            // show navigation
            navbar.style.visibility = 'visible';
            // remove snap expanded
            e.target.remove();
            // activate scroll
            document.body.style.overflowY = 'auto';
            snapExpanded = false;
          }
        });
      });
    });
  }
} catch(err) {
  console.log(err);
}

try {
  if (window.location.pathname == '/home') {
    const swiper = new Swiper('.swiper', {
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
      },
      autoHeight: true,
      speed: 2000, // ms
      spaceBetween: 0,
      direction: "horizontal",
      mousewheel: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '">0' + (index+1) + '</span>';
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
    // const maxLength = document.querySelector(".swiper-wrapper").getAttribute("max-length");
    // swiper.on('slideNextTransitionStart', function() {
    // });
  }
} catch(err) {
  console.log(err);
}

/* CUSTOM CURSOR SCRIPT */

/* Smooth page transition */
// barba.js 사용하는 듯? https://ihatetomatoes.net/page-transitions-tutorial-barba-with-css/
