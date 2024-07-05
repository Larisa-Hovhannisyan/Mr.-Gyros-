let slickSlider = document.querySelector('.slick-slider');
let prev = document.querySelector('.slider .arrowBlockLeft');
let next = document.querySelector('.slider .arrowBlockRight');
let radio = document.querySelectorAll('.slider input');
let current = -100;
let bool = true;
let radX = 0;

next.onclick = () => {
	if (bool) {
		bool = false;
		radX++;
		radX == radio.length ? radX = 0 : '';
		current -= 100;
		if (current < -300) {
			slickSlider.style.transition = 'none';
			current = 0;
			setTimeout(() => {
				current = -100;
				slickSlider.style.left = current + '%';
				slickSlider.style.transition = '.4s';
			}, 20);
		}
		slickSlider.style.left = current + '%';
		setTimeout(() => bool = true, 4e2);
		radio[radX].checked = true;
	}
};

prev.onclick = () => {
	if (bool) {
		bool = false;
		radX--;
		radX < 0 ? radX = radio.length-1 : '';
		current += 100;
		if (current > 0) {
			slickSlider.style.transition = 'none';
			current = -300;
			setTimeout(() => {
				current = -200;
				slickSlider.style.left = current + '%';
				slickSlider.style.transition = '.4s';
			}, 20);
		}
		slickSlider.style.left = current + '%';
		setTimeout(() => bool = true, 4e2);
		radio[radX].checked = true;
	}
};

radio.forEach((item, index) => {
	item.onchange = () => {
		current = (index+1) * -100;
		slickSlider.style.left = current + '%';
	};
});




