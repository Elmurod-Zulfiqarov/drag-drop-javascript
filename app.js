let dragItems = document.querySelectorAll('.item');
let dragCards = document.querySelectorAll('.drag-card');
let dragImg = null;

dragItems.forEach((item) => {
	item.addEventListener('dragstart', (e) => {
		dragImg = e.target.cloneNode(true);
	});
});



dragCards.forEach((card) => {

	let closeBtn = card.querySelector('#close');

	card.addEventListener('dragstart', (e) => {
		dragImg = e.target;
	});
	card.addEventListener('dragover', (e) => {
		card.classList.add("hovered")
	});
	card.addEventListener('dragleave', (e) => {
		if (card.children.length === 1) {
			card.appendChild(dragImg);
		}
		card.classList.remove("hovered");
	});

	card.addEventListener('mousemove', (e) => {
		if (!card.querySelector('.item')) {
			closeBtn.classList.add("display-none");
		} else {
			closeBtn.classList.remove("display-none");
		}
	})


	closeBtn.addEventListener('click', (e) => {
		if (card.querySelector('.item')) {
			card.removeChild(card.querySelector('.item'));
			closeBtn.classList.add("display-none");
		}
	});

});
