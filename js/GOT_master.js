(() => {
	
	//stub
	console.log('fired');

	const 	sigils 		= document.querySelectorAll('.sigil-container'),
			lightbox 	= document.querySelector('.lightBox'),
			video 		= document.querySelector('video');

	function openLightbox() {
		lightbox.classList.add('lightbox-on');
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
})();