//Hamburger Button and Navigation Menu
const hamButton = document.querySelector("#ham-menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click",() => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});