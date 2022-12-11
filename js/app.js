const togle_btn = document.querySelector(".toggle-btn");
const header_block = document.querySelector(".header__block");

togle_btn.addEventListener("click", () => {
	header_block.classList.toggle("hidden");
	header_block.classList.toggle("smooth");
	
});
