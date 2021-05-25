const sliderElems = document.querySelectorAll(".slider__item");
const sliderArrowLeft = document.querySelector(".slider__arrow-left");
const sliderArrowRight = document.querySelector(".slider__arrow-right");
const lastElem = sliderElems.length - 1;
let currentElem = 0;

function addActive() {
	sliderElems[currentElem].classList.add("active");
}

addActive();

sliderArrowRight.addEventListener("click", () => {
	sliderElems[currentElem].classList.remove("active");
	currentElem++;
	if (currentElem >= lastElem + 1) {
		sliderElems[0].classList.add("active");
		currentElem = 0;
	}
	addActive();
});
sliderArrowLeft.addEventListener("click", () => {
	sliderElems[currentElem].classList.remove("active");
	currentElem--;
	if (currentElem <= -1) {
		sliderElems[lastElem].classList.add("active");
		currentElem = lastElem;
	}
	addActive();
});
