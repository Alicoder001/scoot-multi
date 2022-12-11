const togle_btn = document.querySelector(".toggle-btn");
const header_block = document.querySelector(".header__block");
const strelbottom = document.querySelector(".strelbottom");
const subt = document.querySelector(".faq__item-subt");

togle_btn.addEventListener("click", () => {
	header_block.classList.toggle("hidden");
	header_block.classList.toggle("smooth");
});
strelbottom.addEventListener("click", () => {
	subt.classList.toggle("subt-hidden");
});
