(function() {
	console.log("script loaded");

	document.addEventListener('DOMContentLoaded', (event) => {
		let hamburger = document.getElementById('hamburger');
		hamburger.setAttribute('aria-expanded', 'false');
		hamburger.onClick = (e) => {
			if(this.getAttribute('aria-expanded') == 'false')
			{
				this.setAttribute('aria-expanded', 'true')
			} else {
				this.setAttribute('aria-expanded', 'false');
			}
		}
		console.log(hamburger.getAttribute('aria-expanded'))
	})
}());