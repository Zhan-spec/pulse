// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         slidesToShow: 1,
//         //adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//               }
//         ]
//       });
// });


// при использовании слайдера tiny-slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false
  //axis: 'vertical'
  // controlsText: [
  //   '<img src="icons/chevron-left.png">',
  //   '<img src="icons/chevron-right.png">'
  // ]
});
// document.querySelector('.prev').onclick = function () {
//   slider.goTo('prev');
// };
// document.querySelector('.next').onclick = function () {
//   slider.goTo('next');
// };
//более новый вариант использования JS
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
