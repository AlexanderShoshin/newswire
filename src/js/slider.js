var Slider = function(selector) {
	var imagesCnt = $(selector + ' li').length;
	this.picSlider = $(selector).bxSlider({
		mode: "fade",
		controls: false,
		pager: imagesCnt === 1 ? false : true
	});
};

Slider.prototype.showAllImages = function(slideTime, onDone) {
	this.onDone = onDone;
	this.slideTime = slideTime;
	setTimeout(this.showNextImage.bind(this), this.slideTime);
};

Slider.prototype.showNextImage = function() {
	if (this.picSlider.getCurrentSlide() + 1 === this.picSlider.getSlideCount()) {
		this.onDone();
	} else {
		this.picSlider.goToNextSlide();
		setTimeout(this.showNextImage.bind(this), this.slideTime);
	}
};