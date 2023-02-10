var isPlaying = false

document.addEventListener('keydown', function (event) {
	if (event.keyCode === 123 && !isPlaying) {
		isPlaying = true
		var audio = new Audio('https://r2.toshiki.dev/media/audio/urusai.mp3')
		audio.addEventListener('ended', function () {
			isPlaying = false
		})
		audio.play()
	}
})
