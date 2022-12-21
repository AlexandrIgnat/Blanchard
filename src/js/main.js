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

// gallary swiper

const mySwiper = new Swiper('.slider-2', {
  direction: 'horizontal',
  slidesPerView: '1',
  slidesPerGroup: 1,
  spaceBetween: 34,

  breakpoints: {
    1220: {
      slidesPerView: '3',
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: '2',
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    457: {
      slidesPerView: '2',
      slidesPerGroup: 2,
      spaceBetween: 38,
    }
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },


  pagination: {
    el: ".gallery .swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
    clickable: true,
  },
})

const projectsPartnerSwiper = new Swiper('.slider-3', {
  slidesPerView: '1',
  spaceBetween: 50,

  navigation: {
    nextEl: '.projects-partners__swiper-button-next',
    prevEl: '.projects-partners__swiper-button-prev',
    clickable: true,
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },

  breakpoints: {

    680: {
      slidesPerView: '2',
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    962: {
      slidesPerView: '2',
      spaceBetween: 50,
      slidesPerGroup: 1,
    },

    1025: {
      slidesPerView: '3',
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  }
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


const choices = new Choices('.gallery__filter-select', {
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
    galleryModal.style.display = "block";
  })
})

// events slider

const eventSwiper = new Swiper('.events__slider', {
  slidesPerView: '1',
  spaceBetween: 25,

  navigation: {
    nextEl: '.events__slider-btn-next',
    prevEl: '.events__slider-btn-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    prevSlideMessage: 'предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
    paginationBulletMessage: 'Перейти на слайд {{index}}',
  },

  breakpoints: {

    680: {
      slidesPerView: '2',
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    962: {
      slidesPerView: '3',
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1400: {
      slidesPerView: '3',
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  }
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [55.75846806898367, 37.60108849999989],

    zoom: 15,

    controls: [],
  });
  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-2, -20]
  });

  myMap.geoObjects.add(myPlacemark);
}


const validate = new window.JustValidate('#form');

validate
  .addField('#name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Недопустимая длина',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Достигнута максимальная длина',
    },
    {
      rule: 'required',
      errorMessage: 'Обязательное поле*',
    },

  ])
  .addField('#phone', [{
      rule: 'required',
      errorMessage: 'Вы не ввели телефон*',
    },
    {
      rule: 'number',
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'Достигнута максимальная длина',
    }
  ])

let btnBurger = document.querySelector('.header__burger');

// Смена состояния бургера

btnBurger.addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.toggle-menu').classList.toggle('visible');
  document.body.classList.toggle('is-menu-open');
})

// Запрет на перезагрузку страницы на кнопку поиска

document.querySelector('.header-top__search-form').addEventListener('submit', (e) => {
  e.preventDefault();
})

// Раскрытие и закрытие поиска

var searchBtn = document.querySelectorAll('.header-top__search-btn');
let searchItems = Array.from(document.querySelector('.header-top__search-form').children);

searchBtn.forEach((elemet) => {
  elemet.addEventListener('click', function() {
    document.querySelector('.header-top__search-form').classList.add('active');
    setTabIndex(searchItems, 0, false);
  })
})

document.querySelector('.search-form__close').addEventListener('click', function() {
  document.querySelector('.header-top__search-form').classList.remove('active');
  window.innerWidth <= 768 ? setTabIndex(searchItems, -1, true) : setTabIndex(searchItems, 0, false);
})

let toggleMenuLinks = document.querySelectorAll('.toggle-menu__wraper a');

toggleMenuLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault;
    btnBurger.classList.remove('active');
    document.body.classList.remove('is-menu-open');
    document.querySelector('.toggle-menu').classList.remove('visible');
  })
})

// блок управления табиндексом

function setTabIndex(elements, index, bool) {
  elements.forEach((e) => {
    e.setAttribute('tabindex', index);
    e.setAttribute('aria-hidden', bool);
  });
}

let switcher = true;

window.onresize = function setTabindexSearchHeader() {
  window.innerWidth <= 768 ? setTabIndex(searchItems, -1, true) : setTabIndex(searchItems, 0, false);
  if (window.innerWidth <= 768 && switcher) {
    setTabIndex(searchItems, -1, true);
    switcher = !switcher;
  }
  if (window.innerWidth >= 768 && switcher == false) {
    setTabIndex(searchItems, 0, false);
    switcher = !switcher;
  }
}

window.innerWidth <= 768 ? setTabIndex(searchItems, -1, true) : setTabIndex(searchItems, 0, false);
;
