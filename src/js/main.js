var curTopic, slideTime, slider;

slideTime = 2000;

$(function() {
	createTemplate();
	startNews(news);
});

function startNews() {
	curTopic = 0;
	nextTopic();
}

function createTemplate() {
	$("#newsTmpl").template("newsTmpl");
}

function nextTopic() {
	if (curTopic === news.length) {
		curTopic = 1;
	} else {
		curTopic++;
	}
	
	deleteTopic();
	showTopic(news[curTopic-1]);
	
	slider = new Slider(".bxslider");
	slider.showAllImages(slideTime, nextTopic);
}

function deleteTopic() {
	$("body").empty();
}

function showTopic(topic) {
	addTemplate(fillTemplate(topic));
}

function addTemplate(template) {
	$("body").append(template);
}

function fillTemplate(templateData) {
	return $.tmpl("newsTmpl", templateData);
}