// arrow__left.addEventListener("click", slider_left())
// // var clicked = document.getElementsByClassName('tasty__slider-arrow-left');
// // clicked.addEventListener("click", slider_left);
// //
// // var clicked = document.getElementsByClassName('tasty__slider-arrow-right');
// // clicked.addEventListener("click", slider_right);
//
// function slider_left() {
// var slide = document.getElementsByClassName('tasty__current-cake');
// alert('ffafafafa');
// }
var tasty_current = document.getElementById('tasty__current');
var tasty_item_1 = document.getElementById('tasty__slider-item-1');
var tasty_item_2 = document.getElementById('tasty__slider-item-2');
var tasty_item_3 = document.getElementById('tasty__slider-item-3');
var count = 5;
arrow__left.onclick = function () {
    var img = getComputedStyle(tasty_current).backgroundImage;
    tasty_current.style.backgroundImage = getComputedStyle(tasty_item_1).backgroundImage;
    tasty_item_1.style.backgroundImage = getComputedStyle(tasty_item_2).backgroundImage;
    tasty_item_2.style.backgroundImage = getComputedStyle(tasty_item_3).backgroundImage;
    tasty_item_3.style.backgroundImage = img;

}
arrow__right.onclick = function () {
    var img = getComputedStyle(tasty_current).backgroundImage;
    tasty_current.style.backgroundImage = getComputedStyle(tasty_item_3).backgroundImage;
    tasty_item_3.style.backgroundImage = getComputedStyle(tasty_item_2).backgroundImage;
    tasty_item_2.style.backgroundImage = getComputedStyle(tasty_item_1).backgroundImage;
    tasty_item_1.style.backgroundImage = img;
}
// var slide_item = document.getElementsByClassName("tasty__slider-items");
//
// var clicked_func = function () {
//     var img = getComputedStyle(this).backgroundImage;
//     getComputedStyle(this).backgroundImage = tasty_current.style.backgroundImage;
//     tasty_current.style.backgroundImage = img;
// }
//
// for (var i = 0; i < slide_item.length; i++) {
//     slide_item[i].addEventListener('click', clicked_func, false);
// }
// <img src = "1.jpg" onerror = "this.style.display = 'none'">

// "url("file:///C:/Project/Bakery_test/img/1.jpeg")"
// var img_next = 'url("file:///C:/Project/Bakery_test/img/' + count + ".jpg";