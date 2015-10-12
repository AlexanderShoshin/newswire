var Slider = function(selector) {
	this.picSlider = $(selector).bxSlider({
		mode: "fade",
		controls: false
	});
};

Slider.prototype.showAllImages = function(slideTime, onDone) {
	this.onDone = onDone;
	setTimeout(this.showNextImage.bind(this), slideTime);
};

Slider.prototype.showNextImage = function() {
	if (this.picSlider.getCurrentSlide() + 1 === this.picSlider.getSlideCount()) {
		this.onDone();
	} else {
		this.picSlider.goToNextSlide();
		setTimeout(this.showNextImage.bind(this), slideTime);
	}
};