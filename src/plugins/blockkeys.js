document.addEventListener('keydown', function (event) {
	if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
		event.preventDefault()
		console.log('Blocked key combination')
	}
})
