const form = document.getElementById('contacts-form');
//const formBtn = document.getElementById('form-btn');

/* formBtn.addEventListener('click', function (event) {
	event.preventDefault();
	//console.log('Клик!');
	alert('Форма отправлена!');
	form.reset();
}); */

form.addEventListener('submit', function (event) {
	event.preventDefault();
	alert('Форма отправлена!');
	form.reset();
})