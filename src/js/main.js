// Catalog accordion

// Это один из возможных вариантов использования. Ссылка на github плагина https://github.com/michu2k/Accordion

// ВАЖНО!!! Этот пример аккордеона работает с версией плагина  3.1.1. Вот она: https://unpkg.com/accordion-js@3.1.1/dist/accordion.min.js

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// Табы
const params = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active"
};

function setTabs(params) {
  const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${params.wrap}`);
    const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${params.content}`);

    contents.forEach((el) => {
      el.classList.remove(params.active);
    });

    currentContent.classList.add(params.active);

    tabBtns.forEach((el) => {
      el.classList.remove(params.active);
    });

    this.classList.add(params.active);
  }

  tabBtns.forEach(function(el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(params);


/*hero swiper*/

const swiper = new Swiper('.js-hero-swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

const mySwiper = new Swiper('.slider-2', {
  direction: 'horizontal',
  slidesPerView: '3',
  slidesPerGroup: 3,
  spaceBetween: 50,



  pagination: {
    el: ".gallery .swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
})




document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
})


const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})


const choices = new Choices('.gallery_filter-select', {
  searchEnabled: false,
  placeholder: true,
  itemSelectText: ''
});


/* modal */
var galleryModal = document.getElementById('gallery__modal');
var blockLink = document.getElementById('gallery__swiper-hover');
var span = document.getElementById('modal-close');
var swiperImage = document.querySelectorAll('.slide-gallery');
let modalImage = document.querySelector('.gallery__modal-image');

blockLink.onclick = function() {
  galleryModal.style.display = "block";
}

span.onclick = function() {
  galleryModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target !== galleryModal && !event.target.closest('.slide-gallery')) {
    galleryModal.style.display = "none";
  }
}


swiperImage.forEach(element => {
  element.addEventListener('click', () => {
    // let img = element.querySelector('.gallery__image').getAttribute('src');

    // modalImage.src = img;
    galleryModal.style.display = "block";
  })
})
