//Função atualização do tempo
function atualizacaoTempo(){

	futuro = Date.parse("jun 09, 2022 00:00:00");
	agora = new Date();
	diferenca = futuro - agora;

	dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
	horas = Math.floor(diferenca / (1000 * 60 * 60));
	minutos = Math.floor(diferenca / (1000 * 60));
	segundos = Math.floor(diferenca / 1000);

	d = dias;
	h = horas - dias * 24;
	m = minutos - horas * 60;
	s = segundos - minutos * 60;

	document.getElementById("tempo")
        .innerHTML =
        '<div>' + d + '<span>Dias</span></div>' +
        '<div>' + h + '<span>Horas</span></div>' +
        '<div>' + m + '<span>Minutos</span></div>' +
        '<div>' + s + '<span>Segundos</span></div>';

}
setInterval('atualizacaoTempo()', 1000);