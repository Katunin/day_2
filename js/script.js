let receiveBtn = document.querySelector('#receive'),
	nameInput = document.querySelector('.contactform_name'),
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];


receiveBtn.addEventListener('click', function() {
	modal.style.display = "block";
});

close.addEventListener('click', function() {
	modal.style.display = "none";
});

nameInput.addEventListener('input', function() {
	text.value = `Меня зовут ${nameInput.value} и я хочу спросить:`;
	if (nameInput.value == '') {
		text.value = '';
	}
})