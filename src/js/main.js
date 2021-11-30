

let burger = $(".burger");
let navigation = $(".header__nav");

burger.on ("click", function () {
    burger.toggleClass("burger_active");
    navigation.toggleClass("header__nav_active");
});