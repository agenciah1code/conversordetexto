function textoMinusculo() {
	event.preventDefault();
	const pegarTexto = document.querySelector('textarea').value;
	document.querySelector('#convertido').innerHTML = pegarTexto.toLowerCase();
}

function textoMaiusculo() {
	event.preventDefault();
	const pegarTexto = document.querySelector('textarea').value;
	document.querySelector('#convertido').innerHTML = pegarTexto.toUpperCase();
}

function primeirasMaiusculas() {
	event.preventDefault();
	const pegarTexto = document.querySelector('textarea').value;
	var subst = pegarTexto.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
		return a.toUpperCase();
	});
	document.querySelector('#convertido').innerHTML = subst;
}

function copiarTexto() {
	event.preventDefault();
	const textoCopiado = document.querySelector('#convertido');
	textoCopiado.select();
	document.execCommand('copy');
	alert('Texto copiado para sua área de transferencia');
}

function resetarTexto() {
	const limpar = document.querySelectorAll('textarea');
	limpar.forEach((item) => {
		item.innerHTML = '';
	});
}

const minuscula = document.querySelector('#minuscula');
const maiuscula = document.querySelector('#maiuscula');

minuscula.addEventListener('click', textoMinusculo);
maiuscula.addEventListener('click', textoMaiusculo);
