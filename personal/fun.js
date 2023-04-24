var slider = document.getElementById("slider");
var handle = document.getElementById("slider-handle");
var volumeValue = document.getElementById("volume-value");

var sliderWidth = slider.offsetWidth;
var handleWidth = handle.offsetWidth;
var maxLeft = sliderWidth - handleWidth;
var volume = 50;

handle.style.left = (maxLeft / 2) + "px";
volumeValue.innerHTML = "Volume: " + volume + "%";

handle.addEventListener("mousedown", function(e) {
	e.preventDefault();

	document.addEventListener("mousemove", moveHandle);
	document.addEventListener("mouseup", releaseHandle);
});

function moveHandle(e) {
	var left = e.pageX - slider.offsetLeft - (handleWidth / 2);

	if (left < 0) {
		left = 0;
	} else if (left > maxLeft) {
		left = maxLeft;
	}

	handle.style.left = left + "px";
	volume = Math.round((left / maxLeft) * 100);
	volumeValue.innerHTML = "Volume: " + volume + "%";
}

function releaseHandle(e) {
	document.removeEventListener("mousemove", moveHandle);
	document.removeEventListener("mouseup", releaseHandle);
}
